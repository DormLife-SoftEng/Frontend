/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button , Row ,Col } from "react-bootstrap";
import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { LoginForm , LoginFormProps } from "../type";
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

function InnerForm(props: FormikProps<LoginForm>) {

  const {values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,handleReset} = props;
  const history = useHistory();

  return (
    <>
      <br />
      <h1 style={{fontSize:"4rem",textAlign:"left"}}>Sign in</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <FormControl style={{backgroundColor:""}}>
          <FormLabel style={{margin:"5% 0",color:"white",fontSize:"2rem"}} error={touched.username && Boolean(errors.username)}>
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
            FormHelperTextProps={{style:{margin:"0",backgroundColor:"#F55E61",color:"white"}}}
            error={touched.username && Boolean(errors.username)}
            style={{backgroundColor:"white",width:"450px"}}
          />
        </FormControl>

        <FormControl style={{backgroundColor:""}}>
          <FormLabel style={{margin:"5% 0",color:"white",fontSize:"2rem"}} error={touched.password && Boolean(errors.password)}>
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
            style={{backgroundColor:"white",width:"450px"}}
            FormHelperTextProps={{style:{margin:"0",backgroundColor:"#F55E61",color:"white"}}}
            
          />
        </FormControl>
        <Row style={{margin:"5% 0"}} noGutters={true} >
        <Button style={{fontSize:"2rem"}} className="btn-lg"variant="outline-light" type="submit" >Sign in</Button>
        </Row>

      </form>
      <a
        onClick={() => {
          history.push("/signin/forgetpassword");
        }}
        style={{ fontSize:"1.5rem",textDecoration: "underline" }}
      >
        forget your password?
      </a>
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