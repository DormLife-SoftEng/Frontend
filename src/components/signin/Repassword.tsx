import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { useHistory , useParams } from "react-router-dom";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";

interface FormValue {
    password: string,
    confirmPassword : string
}
interface MyFormProps {
    password?: string,
    confirmPassword? : string
    handleSubmit : (form : FormValue) => void
}

const InnerFormRepassword = (props: FormikProps<FormValue>) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
      <h1>Repassword</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel error={
                touched.password && Boolean(errors.password)
            }>
            Password
            </FormLabel>
            <TextField
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={values.password}
                placeholder="Enter your password"
                type="password"
                margin="dense"
                variant="outlined"
            />
        </FormControl>
        <FormControl>
            <FormLabel 
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
            >
            Confirm Password
            </FormLabel>
            <TextField
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.confirmPassword ? errors.confirmPassword : ""
                }
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                margin="dense"
                variant="outlined"
              />
        </FormControl>
        <br />
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

const RepasswordFormik = withFormik<MyFormProps,FormValue>({
    mapPropsToValues : props => {
        return {
            password : props.password || "",
            confirmPassword : props.confirmPassword || ""
        }
    },
    handleSubmit : (values , {props}) => {
        alert(JSON.stringify(values))
        props.handleSubmit(values)
    },
    validationSchema : Yup.object().shape({
        password: Yup.string()
        .required("Required")
        .min(8, "Password must contain at least 8 characters"),
        confirmPassword: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match"),
    })

})(InnerFormRepassword);

const Repassword = () => {
    const history = useHistory();
    const {id} : {id:string} = useParams();
    const handleSubmit = (form : FormValue) => {
        console.log(form)
        console.log(id)
        history.replace("/")
    }
    return (<div>
        <RepasswordFormik handleSubmit={handleSubmit} />
    </div>)
}

export default Repassword;