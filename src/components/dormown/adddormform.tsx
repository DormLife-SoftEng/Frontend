/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import { propsDormForm } from "./typeForm";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Input } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label } from "@material-ui/icons";

const styles = createStyles({
  black: {
    color: "black",
  },
  button: {
    marginRight: "10px",
  },
  navCenter: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    overflow: "visible",
    height: "0",
    left: "0%",
    color: "white",
  },
  textField: {
    width: "350px",
  },
  formLabel: {
    textAlign: "left",
    fontSize: "1.5rem",
    color: "black",
  },
  row: {
    marginBottom: "3%",
  },
});

function DormOwner(props: any) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
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
      <Navbar style={{ padding: "1%" }} bg="danger">
        <Nav className="text-center">
          <Button variant="" onClick={() => history.goBack()}>
            <ArrowBackIosIcon htmlColor="white" fontSize="large" />
          </Button>
          <h1 className={classes.navCenter}>Add Dorm</h1>
        </Nav>
      </Navbar>
      <form style={{ margin: "3% 20%" }} onSubmit={handleSubmit}>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormName && Boolean(errors.DormName)}
                className={classes.formLabel}
              >
                Dorm Name
              </FormLabel>
              <TextField
                id="DormName"
                placeholder="Enter Dorm Name"
                className={classes.textField}
                value={values.DormName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormName ? errors.DormName : ""}
                error={touched.DormName && Boolean(errors.DormName)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormAddress && Boolean(errors.DormAddress)}
                className={classes.formLabel}
              >
                Dorm Address
              </FormLabel>
              <TextField
                id="DormAddress"
                placeholder="Enter Dorm Address"
                value={values.DormAddress}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormAddress ? errors.DormAddress : ""}
                error={touched.DormAddress && Boolean(errors.DormAddress)}
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
                error={touched.DormLongitude && Boolean(errors.DormLongitude)}
                className={classes.formLabel}
              >
                Dorm Longitude
              </FormLabel>
              <TextField
                id="DormLongitude"
                placeholder="Enter Dorm Longitude"
                value={values.DormLongitude}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormLongitude ? errors.DormLongitude : ""}
                error={touched.DormLongitude && Boolean(errors.DormLongitude)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormLatitude && Boolean(errors.DormLatitude)}
                className={classes.formLabel}
              >
                Dorm Latitude
              </FormLabel>
              <TextField
                id="DormLatitude"
                className={classes.textField}
                placeholder="Enter Dorm Latitude"
                value={values.DormLatitude}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormLatitude ? errors.DormLatitude : ""}
                error={touched.DormLatitude && Boolean(errors.DormLatitude)}
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
                error={touched.phone && Boolean(errors.phone)}
                className={classes.formLabel}
              >
                Dorm Phone Number
              </FormLabel>
              <TextField
                id="phone"
                placeholder="Enter Phone Number"
                value={values.phone}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
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
                Dorm E-mail
              </FormLabel>
              <TextField
                id="email"
                placeholder="Enter your email"
                type="email"
                className={classes.textField}
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
                error={
                  touched.LineID && Boolean(errors.LineID)
                }
                className={classes.formLabel}
              >
                Dorm Line ID
              </FormLabel>
              <TextField
                id="LineID"
                placeholder="Enter Line ID"
                className={classes.textField}
                value={values.LineID}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.LineID ? errors.LineID : ""
                }
                error={
                  touched.LineID && Boolean(errors.LineID)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.Website && Boolean(errors.Website)
                }
                className={classes.formLabel}
              >
                Dorm Website
              </FormLabel>
              <TextField
                id="Website"
                placeholder="Enter Dorm Website"
                className={classes.textField}
                value={values.Website}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.Website ? errors.Website : ""
                }
                error={
                  touched.Website && Boolean(errors.Website)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel
                  error={touched.DormDoc && Boolean(errors.DormDoc)}
                  className={classes.formLabel}
                >
                  ใบ
              </FormLabel>
                <TextField
                  id="DormDoc"
                  placeholder="Upload your Doccument"
                  type="file"
                  className={classes.textField}
                  value={values.DormDoc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.DormDoc ? errors.DormDoc : null}
                  error={touched.DormDoc && Boolean(errors.DormDoc)}
                  margin="dense"
                  variant="outlined"
                />

              </FormControl>
            </div>
            <Row>
              <Col>
                <div
                  style={{
                    marginTop: "1.5cm",
                    textAlign: "left",
                    display: "inline-block",
                    width: "350px",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormLabel className={classes.formLabel}>Allowed Sex</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio color="secondary" />}
                        label="Female"
                      />{" "}
                      <FormControlLabel
                        value="male"
                        control={<Radio color="secondary" />}
                        label="Male"
                      />{" "}
                      <FormControlLabel
                        value="any"
                        control={<Radio color="secondary" />}
                        label="Any"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel className={classes.formLabel}>Accomodation Type</FormLabel>
                <RadioGroup
                  aria-label="Accomtype"
                  name="AccomType"
                  value={values.AccomType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="dorm"
                    control={<Radio color="secondary" />}
                    label="Dorm"
                  />{" "}
                  <FormControlLabel
                    value="condo"
                    control={<Radio color="secondary" />}
                    label="Condo"
                  />{" "}
                  <FormControlLabel
                    value="apartment"
                    control={<Radio color="secondary" />}
                    label="Aparment"
                  />
                  <FormControlLabel
                    value="Flat"
                    control={<Radio color="secondary" />}
                    label="flat"
                  />
                  <FormControlLabel
                    value="hostel"
                    control={<Radio color="secondary" />}
                    label="Hostel"
                  />
                  <FormControlLabel
                    value="house"
                    control={<Radio color="secondary" />}
                    label="House"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormLabel className={classes.formLabel}>Facilities</FormLabel>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveCon} onChange={handleChange} name="HaveCon" />}
                    label="Convenience Store"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveCon}
                    id="ConDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.ConDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ConDistance ? errors.ConDistance : null}
                    error={touched.ConDistance && Boolean(errors.ConDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveCon}
                    id="ConDistance"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.ConDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ConDescript ? errors.ConDescript : null}
                    error={touched.ConDescript && Boolean(errors.ConDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveLaun} onChange={handleChange} name="HaveLaun" />}
                    label="Laundry/Washing Machine"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveLaun}
                    id="LaunDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.LaunDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.LaunDistance ? errors.LaunDistance : null}
                    error={touched.ConDistance && Boolean(errors.ConDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveLaun}
                    id="LaunDistance"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.ConDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ConDescript ? errors.ConDescript : null}
                    error={touched.ConDescript && Boolean(errors.ConDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveParkLot} onChange={handleChange} name="HaveParkLot" />}
                    label="Parking Lot"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveParkLot}
                    id="ParklotDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.ParkLotDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ParkLotDistance ? errors.ParkLotDistance : null}
                    error={touched.ParkLotDistance && Boolean(errors.ParkLotDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveParkLot}
                    id="ParklotDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.ParklotDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ParklotDescript ? errors.ParklotDescript : null}
                    error={touched.ParklotDescript && Boolean(errors.ParklotDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveRestaurant} onChange={handleChange} name="HaveRest" />}
                    label="Restaurant"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveRestaurant}
                    id="RestDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.RestaurantDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.RestaurantDistance ? errors.RestaurantDistance : null}
                    error={touched.RestaurantDistance && Boolean(errors.RestaurantDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveRestaurant}
                    id="LaunDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.RestaurantDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.RestaurantDescript ? errors.RestaurantDescript : null}
                    error={touched.RestaurantDescript && Boolean(errors.RestaurantDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveSmoke} onChange={handleChange} name="HaveSmoke" />}
                    label="Smoking Area"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveSmoke}
                    id="SmokeDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.SmokeDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.SmokeDistance ? errors.SmokeDistance : null}
                    error={touched.SmokeDistance && Boolean(errors.SmokeDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveSmoke}
                    id="SmokeDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.SmokeDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.SmokeDescript ? errors.SmokeDescript : null}
                    error={touched.SmokeDescript && Boolean(errors.SmokeDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveLaun} onChange={handleChange} name="HaveFitness" />}
                    label="Fitness"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveFitness}
                    id="FitnessDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.FitnessDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.FitnessDistance ? errors.FitnessDistance : null}
                    error={touched.FitnessDistance && Boolean(errors.FitnessDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveFitness}
                    id="FitnessDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.FitnessDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.FitnessDescript ? errors.FitnessDescript : null}
                    error={touched.FitnessDescript && Boolean(errors.FitnessDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveParkLot} onChange={handleChange} name="HaveParkLot" />}
                    label="Parking Lot"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveParkLot}
                    id="ParklotDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.ParkLotDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ParkLotDistance ? errors.ParkLotDistance : null}
                    error={touched.ParkLotDistance && Boolean(errors.ParkLotDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveParkLot}
                    id="ParklotDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.ParklotDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.ParklotDescript ? errors.ParklotDescript : null}
                    error={touched.ParklotDescript && Boolean(errors.ParklotDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
          </Col>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={values.HaveRestaurant} onChange={handleChange} name="HaveRest" />}
                    label="Restaurant"
                    labelPlacement="end"
                    onClick={() => {
                      setShow(true);
                    }}
                  />
                  <TextField disabled={!values.HaveRestaurant}
                    id="RestDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.RestaurantDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.RestaurantDistance ? errors.RestaurantDistance : null}
                    error={touched.RestaurantDistance && Boolean(errors.RestaurantDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveRestaurant}
                    id="LaunDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.RestaurantDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.RestaurantDescript ? errors.RestaurantDescript : null}
                    error={touched.RestaurantDescript && Boolean(errors.RestaurantDescript)}
                    margin="dense"
                    variant="outlined"></TextField>
                </FormGroup>
              </FormControl>
            </div>
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
              <Button
                className={classes.button}
                variant="danger"
                onClick={handleReset}
              >
                CLEAR
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </form>
    </div>
  );
}
const DormOwnerForm = withFormik({
  mapPropsToValues: ({
    DormName,
    DormAddress,
    email,
    phone,
    DormLongitude,
    DormLatitude,
    LineID,
    Website,
    DormDoc,
    AllowSex,
    AccomType,
    HaveCon,
    ConDistance,
    HaveLaun,
    LaunDistance,
  }: propsDormForm) => {
    return {
      DormName: DormName || "",
      DormAddress: DormAddress || "",
      email: email || "",
      DormLongitude: DormLongitude || "",
      DormLatitude: DormLatitude || "",
      LineID: LineID || "",
      phone: phone || "",
      Website: Website || "",
      DormDoc: DormDoc || "",
      AllowSex: AllowSex || "any",
      AccomType: AccomType || "",
      HaveCon: HaveCon || false,
      ConDistance: ConDistance || "",
      HaveLaun: HaveLaun || false,
      LaunDistance: LaunDistance || ""
    };
  },
  validationSchema: Yup.object().shape({
    DormName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),

  handleSubmit: (values, { resetForm }) => {
    const { DormName, DormAddress, email, DormLatitude, DormLongitude, phone, LineID, Website, DormDoc, AllowSex, AccomType, HaveCon, ConDistance, HaveLaun, LaunDistance, } = values;
    const form = {
      DormName,
      DormAddress,
      DormLatitude,
      DormLongitude,
      phone,
      email,
      LineID,
      Website,
      DormDoc,
      AllowSex,
      AccomType,
      HaveCon,
      ConDistance,
      HaveLaun,
      LaunDistance,
    };
    setTimeout(() => {
      alert(JSON.stringify(form));
    }, 1000);
    resetForm();
  },

})(DormOwner);

export default withStyles(styles)(DormOwnerForm);
