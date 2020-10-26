/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { withFormik, yupToFormErrors } from "formik";
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
import {phoneRegExp } from "./constant";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Input } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Label } from "@material-ui/icons";
import Dropzonef from "./Dropzonef"
import Termservice from "./Termservice";
import AddRoomPopUp from "./AddRoomPopUp"

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
  const [DormDoc, setFiles] = useState<any[]>([]);
  const [DormImage, setFiles2] = useState<any[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [HaveConString, setHaveCon] = useState<string>("");
  const [HaveLaunString, setHaveLaun] = useState<string>("");
  const [HaveParkLotString, setHaveParkLot] = useState<string>("");
  const [HaveRestaurantString, setHaveRestaurant] = useState<string>("");
  const [HaveSmokingAreaString, setHaveSmokingArea] = useState<string>("");
  const [HaveFitnessString, setHaveFitness] = useState<string>("");
  const [HavePoolString, setHavePool] = useState<string>("");
  const [HaveCommonString, setHaveCommon] = useState<string>("");
  const [HaveInternetString, setHaveInternet] = useState<string>("");
  const [HaveRestString, setHaveRest] = useState<string>("");
  const [show2, setShow2] = useState<boolean>(false);
  const [Roomarray , setRoomarray] = useState<any>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const temp: any = {};

  const handleClose = () => {
    setShow2(false);
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
      <form style={{ margin: "3% 20%" }} onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
        console.log(DormDoc)
        e.preventDefault()
        handleSubmit()
      }}>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormName && Boolean(errors.DormName)}
                className={classes.formLabel}
              >
                Dorm Name*
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
                Dorm Address*
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
                Dorm Longitude*
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
                Dorm Latitude*
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
                Dorm Phone Number*
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
                  ใบอนุญาตประกอบกิจการหอพักเอกชน
              </FormLabel>
                <Dropzonef files={DormDoc} setFiles={(files: any) => { values.DormDoc = files; setFiles(files); }} />
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
                    <FormLabel className={classes.formLabel}>Allowed Sex*</FormLabel>
                    <RadioGroup
                      aria-label="AllowSex"
                      name="AllowSex"
                      value={values.AllowSex}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="any"
                        control={<Radio color="primary" />}
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
                <FormLabel className={classes.formLabel}>Accomodation Type*</FormLabel>
                <RadioGroup
                  aria-label="Accomtype"
                  name="AccomType"
                  value={values.AccomType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="dorm"
                    control={<Radio color="primary" />}
                    label="Dorm"
                  />
                  <FormControlLabel
                    value="condo"
                    control={<Radio color="primary" />}
                    label="Condo"
                  />
                  <FormControlLabel
                    value="apartment"
                    control={<Radio color="primary" />}
                    label="Aparment"
                  />
                  <FormControlLabel
                    value="flat"
                    control={<Radio color="primary" />}
                    label="Flat"
                  />
                  <FormControlLabel
                    value="hostel"
                    control={<Radio color="primary" />}
                    label="Hostel"
                  />
                  <FormControlLabel
                    value="house"
                    control={<Radio color="primary" />}
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
                      values.HaveConString = "convenienceStore";
                      setHaveCon("convenienceStore");
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
                    id="ConDescript"
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
                      values.HaveLaunString = "Laundry";
                      setHaveLaun("Laundry");
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
                    id="LaunDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.LaunDescript}
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
                      values.HaveParkLotString = "parkLot";
                      setHaveParkLot("parkLot");
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
                    control={<Checkbox checked={values.HaveRestaurant} onChange={handleChange} name="HaveRestaurant" />}
                    label="Restaurant"
                    labelPlacement="end"
                    onClick={() => {
                      values.HaveRestaurantString = "Restaurant";
                      setHaveRestaurant("Restaurant");
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
                    id="RestDescript"
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
                      values.HaveSmokeAreaString = "smokeArea";
                      setHaveSmokingArea("smokeArea");
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
                    control={<Checkbox checked={values.HaveFitness} onChange={handleChange} name="HaveFitness" />}
                    label="Fitness"
                    labelPlacement="end"
                    onClick={() => {
                      values.HaveFitnessString = "Fitness";
                      setHaveFitness("Fitness");
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
                    control={<Checkbox checked={values.HavePool} onChange={handleChange} name="HavePool" />}
                    label="Swimming Pool"
                    labelPlacement="end"
                    onClick={() => {
                      values.HavePoolString = "Pool";
                      setHavePool("Pool");
                    }}
                  />
                  <TextField disabled={!values.HavePool}
                    id="PoolDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.PoolDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.PoolDistance ? errors.PoolDistance : null}
                    error={touched.PoolDistance && Boolean(errors.PoolDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HavePool}
                    id="PoolDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.PoolDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.PoolDescript ? errors.PoolDescript : null}
                    error={touched.PoolDescript && Boolean(errors.PoolDescript)}
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
                    control={<Checkbox checked={values.HaveCommon} onChange={handleChange} name="HaveCommon" />}
                    label="Common Room"
                    labelPlacement="end"
                    onClick={() => {
                      values.HaveCommonString = "commonRoom";
                      setHaveCommon("commonRoom");
                    }}
                  />
                  <TextField disabled={!values.HaveCommon}
                    id="CommonDistance"
                    placeholder="Enter Distance"
                    className={classes.textField}
                    value={values.CommonDistance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.CommonDistance ? errors.CommonDistance : null}
                    error={touched.CommonDistance && Boolean(errors.CommonDistance)}
                    margin="dense"
                    variant="outlined"></TextField>
                  <TextField disabled={!values.HaveCommon}
                    id="CommonDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.CommonDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.CommonDescript ? errors.CommonDescript : null}
                    error={touched.CommonDescript && Boolean(errors.CommonDescript)}
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
                    control={<Checkbox checked={values.HaveInternet} onChange={handleChange} name="HaveInternet" />}
                    label="Internet"
                    labelPlacement="end"
                    onClick={() => {
                      values.HaveInternetString = "Internet";
                      setHaveInternet("Internet");
                    }}
                  />
                  <TextField disabled={!values.HaveInternet}
                    id="InternetDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.InternetDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.InternetDescript ? errors.InternetDescript : null}
                    error={touched.InternetDescript && Boolean(errors.InternetDescript)}
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
                    control={<Checkbox checked={values.HaveRest} onChange={handleChange} name="HaveRest" />}
                    label="Restroom"
                    labelPlacement="end"
                    onClick={() => {
                      values.HaveRestString = "RestRoom";
                      setHaveRest("RestRoom");
                    }}
                  />
                  <TextField disabled={!values.HaveRest}
                    id="RestRoomDescript"
                    placeholder="Description"
                    className={classes.textField}
                    value={values.RestDescript}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.RestDescript ? errors.RestDescript : null}
                    error={touched.Restescript && Boolean(errors.RestDescript)}
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
                marginTop: "1.5cm",
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
              <FormControl component="fieldset">
                <FormLabel className={classes.formLabel}>Allowed Pet*</FormLabel>
                <RadioGroup
                  aria-label="AllowedPet"
                  name="AllowedPet"
                  value={values.AllowedPet}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />{" "}
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
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
                <FormLabel className={classes.formLabel}>Allowed Cooking*</FormLabel>
                <RadioGroup
                  aria-label="AllowedCook"
                  name="AllowedCook"
                  value={values.AllowedCook}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />{" "}
                  <FormControlLabel
                    value="no"
                    control={<Radio color="primary" />}
                    label="No"
                  />
                </RadioGroup>
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
              <FormControl component="fieldset">
                <FormLabel
                  error={touched.DormImage && Boolean(errors.DormImage)}
                  className={classes.formLabel}
                >
                  Dorm Image*
              </FormLabel>
                <Dropzonef  files={DormImage} setFiles={(files: any) => { values.DormImage = files; setFiles2(files); }} />
              </FormControl>
            </div>
          </Col>
          <Col></Col>
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
                variant="danger"
                onClick={()=>{
                  setShowPopup(true);
                }}
              >
                Add Room Type
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <AddRoomPopUp open={showPopup} setOpen={setShowPopup} RoomList={temp} Roomarray={Roomarray} setRoomarray={(Arr :any)=>{values.Roomarray=Arr; setRoomarray(Arr)}}/>
        <Row className={classes.row} noGutters={true}>
          <Col>
          <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
            <Checkbox
              style={{paddingLeft:"0"}}
              checked={values.acceptTerm}
              onChange={handleChange}
              onBlur={handleBlur}
              name="acceptTerm"
              color="primary"
            />
            <FormLabel style={{fontSize:"0.7rem"}} className={classes.black}>
              I have to read and agree to 
            </FormLabel>{" "}
            <a style={{fontSize:"0.7rem",textDecoration:"underline",color:"#0066cc"}}
              onClick={() => {
                setShow2(true);
              }}
            >
              Term service and policy
            </a>
            <Termservice show={show2} handleClose={handleClose} />
            <FormHelperText error={true}>
              {touched.acceptTerm ? errors.acceptTerm : ""}
            </FormHelperText>
            </div>
          </Col>
          <Col></Col>
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
                *Field is required
            </div>
          </Col>
          <Col></Col>
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
                variant="primary"
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
          <Col>
          </Col>
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
    HaveConString,
    ConDistance,
    ConDescript,
    HaveLaunString,
    LaunDistance,
    LaunDescript,
    HaveParkLotString,
    ParkLotDistance,
    ParkLotDescript,
    HaveRestaurantString,
    RestuarantDistance,
    RestuarantDescript,
    HaveSmokeAreaString,
    SmokeDistance,
    SmokeDescript,
    HaveFitnessString,
    FitnessDistance,
    FitnessDescript,
    HavePoolString,
    PoolDistance,
    PoolDescript,
    HaveCommonString,
    CommonDistance,
    CommonDescript,
    HaveInternetString,
    InternetDescript,
    HaveRestString,
    RestDescript,
    AllowedPet,
    AllowedCook,
    DormImage,
    Roomarray,
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
      AccomType: AccomType || "dorm",
      ConDistance: ConDistance || "",
      ConDescript: ConDescript || "",
      HaveConString : HaveConString || "",
      HaveLaunString: HaveLaunString || "",
      LaunDistance: LaunDistance || "",
      LaunDescript: LaunDescript || "",
      HaveParkLotString: HaveParkLotString || "",
      ParkLotDistance: ParkLotDistance || "",
      ParkLotDescript: ParkLotDescript || "",
      HaveRestaurantString: HaveRestaurantString || "",
      RestuarantDistance: RestuarantDistance || "",
      RestuarantDescript: RestuarantDescript || "",
      HaveSmokeAreaString: HaveSmokeAreaString || "",
      SmokeDistance: SmokeDistance || "",
      SmokeDescript: SmokeDescript || "",
      HaveFitnessString: HaveFitnessString || "",
      FitnessDistance: FitnessDistance || "",
      FitnessDescript: FitnessDescript || "",
      HavePoolString: HavePoolString || "",
      PoolDistance: PoolDistance || "",
      PoolDescript: PoolDescript || "",
      HaveCommonString: HaveCommonString || "",
      CommonDistance: CommonDistance || "",
      CommonDescript: CommonDescript || "",
      HaveInternetString: HaveInternetString|| "",
      InternetDescript: InternetDescript || "",
      HaveRestString : HaveRestString || "",
      RestDescript : RestDescript || "",
      AllowedPet: AllowedPet || "no",
      AllowedCook: AllowedCook || "no",
      DormImage: DormImage || "",
      Roomarray: Roomarray || [],
    };
  },
  validationSchema: Yup.object().shape({
    DormName: Yup.string().required("Required"),
    DormAddress: Yup.string().required("Required"), 
    DormLongitude: Yup.string().required("Required"),
    DormLatitude: Yup.string().required("Required"),
    phone : Yup.string().required("Required").matches(phoneRegExp, "Invalid phone number"),
    email: Yup.string()
      .email("Enter a valid email"),
    acceptTerm: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
   /* AllowSex : Yup.string().required("Required"),
    AccomType : Yup.string().required("Required"),
    AllowPet : Yup.string().required("Required"),
    AllowedCook : Yup.string().required("Required"),*/
  }),

  handleSubmit: (values, { resetForm }) => {
    const { DormName, DormAddress, email, DormLatitude, DormLongitude, phone, LineID, Website, DormDoc, AllowSex, AccomType,
      ConDistance,
      ConDescript,
      HaveConString,
      HaveLaunString,
      LaunDistance,
      LaunDescript,
      HaveParkLotString,
      ParkLotDistance,
      ParkLotDescript,
      HaveRestaurantString,
      RestuarantDistance,
      RestuarantDescript,
      HaveSmokeAreaString,
      SmokeDistance,
      SmokeDescript,
      HaveFitnessString,
      FitnessDistance,
      FitnessDescript,
      HavePoolString,
      PoolDistance,
      PoolDescript,
      HaveCommonString,
      CommonDistance,
      CommonDescript,
      HaveInternetString,
      InternetDescript,
      AllowedPet,
      AllowedCook,
      DormImage,
      Roomarray, } = values;
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
      HaveConString,
      ConDistance,
      ConDescript,
      HaveLaunString,
      LaunDistance,
      LaunDescript,
      HaveParkLotString,
      ParkLotDistance,
      ParkLotDescript,
      HaveRestaurantString,
      RestuarantDistance,
      RestuarantDescript,
      HaveSmokeAreaString,
      SmokeDistance,
      SmokeDescript,
      HaveFitnessString,
      FitnessDistance,
      FitnessDescript,
      HavePoolString,
      PoolDistance,
      PoolDescript,
      HaveCommonString,
      CommonDistance,
      CommonDescript,
      HaveInternetString,
      InternetDescript,
      AllowedPet,
      AllowedCook,
      DormImage,
      Roomarray,
    };
    console.log(form)
    setTimeout(() => {
      console.log("kuy")
      alert(JSON.stringify(form));
    }, 1000);
    resetForm();
  },

})(DormOwner);

export default withStyles(styles)(DormOwnerForm);
