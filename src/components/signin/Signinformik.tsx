/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "react-bootstrap";
import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { LoginForm , LoginFormProps } from "../type";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";

function InnerForm(props: FormikProps<LoginForm>) {

  const {values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,handleReset} = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel error={touched.username && Boolean(errors.username)}>
            Email
          </FormLabel>
          <TextField
            id="username"
            placeholder="Enter your Email"
            type="email"
            margin="dense"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username ? errors.username : ""}
            error={touched.username && Boolean(errors.username)}
          />
        </FormControl>
        <FormControl>
          <FormLabel error={touched.password && Boolean(errors.password)}>
            Password
          </FormLabel>
          <TextField
            id="password"
            placeholder="Enter your password"
            type="password"
            margin="dense"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password ? errors.password : ""}
            error={touched.password && Boolean(errors.password)}
          />
        </FormControl>
        <Button type="submit" >Sign in</Button>
      </form>
    </>
  )
}

const SigninFormik = withFormik<LoginFormProps,LoginForm>({
  mapPropsToValues: props => {
    return {
      username: props.username || "",
      password: props.password || ""
    };
  },
  validationSchema : Yup.object().shape({
    username: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().required("Required").min(8,"Password must contain at least 8 symbol")
  }),
  handleSubmit: async (values, { resetForm , props }) => {
    const result = await props.handleSubmit(values)
    if (result === true) {
        resetForm();
    }
  },
})(InnerForm);

export default SigninFormik;