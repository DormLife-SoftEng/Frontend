/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FormikProps, withFormik} from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import { phoneRegExp } from "../signup/constant";
import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { EditProfileFormValue , Style  , EditProfileMyFormProps , EditProfileProps } from "../type";



const styles = createStyles({
  black: {
    color: "black",
  },
  button: {
    marginRight: "10px",
  },
  textField: {
    width: "250px",
  },
  formLabel: {
    textAlign: "left",
    fontSize: "1.5rem",
    color: "black",
  },
  row: {
    marginBottom: "5%",
  },
});



function InnerForm(props: FormikProps<EditProfileFormValue> & Style) {

  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return (
    <div>
      <form
        style={{ margin: "5% 8%" }}
        onSubmit={handleSubmit}
      >
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel error={touched.firstName && Boolean(errors.firstName)} className={classes.formLabel}>
                Name
              </FormLabel>
              <TextField
                id="firstName"
                placeholder="Enter your Name"
                className={classes.textField}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstName ? errors.firstName : ""}
                error={touched.firstName && Boolean(errors.firstName)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.lastName && Boolean(errors.lastName)}
                className={classes.formLabel}
              >
                Lastname
              </FormLabel>
              <TextField
                id="lastName"
                placeholder="Enter your LastName"
                value={values.lastName}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.lastName ? errors.lastName : ""}
                error={touched.lastName && Boolean(errors.lastName)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.telephone && Boolean(errors.telephone)}
                className={classes.formLabel}
              >
                Phone number
              </FormLabel>
              <TextField
                id="telephone"
                placeholder="Enter your Phone number"
                value={values.telephone}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.telephone ? errors.telephone : ""}
                error={touched.telephone && Boolean(errors.telephone)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.email && Boolean(errors.email)}
                className={classes.formLabel}
              >
                Email
              </FormLabel>
              <TextField
                id="email"
                className={classes.textField}
                placeholder="Enter your Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.password && Boolean(errors.password)}
                className={classes.formLabel}
              >
                Password
              </FormLabel>
              <TextField
                id="password"
                placeholder="Enter your password"
                type="password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                className={classes.formLabel}
              >
                Confirm Password
              </FormLabel>
              <TextField
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                className={classes.textField}
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
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <Button
                className={classes.button}
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </Button>

              <Button className={classes.button} variant="danger" onClick={handleReset}>
                CLEAR
              </Button>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </form>
    </div>
  );
}

const EditProfileDormFinderFormik = withFormik<EditProfileMyFormProps, EditProfileFormValue>({
    mapPropsToValues: (props) => {
      return {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        email: props.email || "",
        password: props.password || "",
        confirmPassword: props.confirmPassword || "",
        telephone: props.telephone || "",
      };
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
      confirmPassword: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match"),
      telephone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
    }),
  
    handleSubmit: async (values, { resetForm  , props}) => {
        //prop.handleSubmit
    },
  })(InnerForm);

  const EditProfileDormOwnerFormik = withFormik<EditProfileMyFormProps, EditProfileFormValue>({
    mapPropsToValues: (props) => {
      return {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        email: props.email || "",
        password: props.password || "",
        confirmPassword: props.confirmPassword || "",
        telephone: props.telephone || "",
      };
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
      confirmPassword: Yup.string()
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match"),
      telephone: Yup.string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
    }),
  
    handleSubmit: async (values, { resetForm  , props}) => {
        //prop.handleSubmit
    },
  })(InnerForm);

  
  const EditProfile = (props : EditProfileProps) => {
      const {userType,classes} = props;
      const handleSubmit = () => {
          
      }
      return (
          <>
            {userType === "owner" ? <EditProfileDormOwnerFormik classes={classes}  handleSubmit={handleSubmit}/> : <EditProfileDormFinderFormik classes={classes} handleSubmit={handleSubmit} />}
          </>
      )



  }
  export default withStyles(styles)(EditProfile);