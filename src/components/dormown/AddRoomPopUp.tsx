import React, { useState, useEffect } from "react";
import { createStyles } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import { FormikProps, withFormik } from "formik";
import { phoneRegExp } from "./constant";
import { propsAddRoomForm } from "./typeForm";
import * as Yup from "yup";
import Dropzonef from "./Dropzonef";
interface AddRoomPopupProps {
  open: boolean;
  setOpen: any;
  RoomList: any;
  Roomarray: any[];
  setRoomarray: any;
}

interface Roomtype {
  name: string;
  setName: any;
  capacity: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: "10px",
    },
    textField: {
      width: "400px",
    },
    SmalltextField: {
      width: "250px",
    },
    DestextField: {
      width: "800px",
    },
    formLabel: {
      textAlign: "left",
      fontSize: "1.5rem",
      color: "black",
    },
    row: {
      marginBottom: "3%",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardPopup: {
      minWidth: 600,
      backgroundColor: "#F55E61",
    },
    expandIcon: { padding: 0 },
    grid: { paddingBottom: 0 },
    textPopup: { color: "#FFFFFF" },
    buttonPopup: {
      margin: "1vh",
      outline: "none",
      "&:hover": {
        outline: "none",
        backgroundColor: "#FFF",
      },
    },
  })
);

export default function AddRoomPopup(props: AddRoomPopupProps) {
  const [roomname, setroomname] = useState<string>("");
  let temparray: any[] = [];
  //const { name, capacity, bathroom, kitchen, bedroom, pricing } = props.RoomList
  const handleClickOpen = () => {
    props.setOpen(true);
  };
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleSubmit = () => {
    console.log(props.Roomarray);
    /*props.setRoomarray([...props.Roomarray,...props.RoomList])
    temparray = [...temparray,...props.RoomList]
    console.log(temparray);
    console.log(props.Roomarray);*/
    props.setRoomarray([...props.Roomarray, props.RoomList])
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Card
            elevation={0}
            className={classes.cardPopup}
            style={{ outline: "none", borderRadius: "15px" }}
          >
            <CardContent style={{ outline: "none", paddingBottom: 0, marginBottom: "24px" }}>
              <Row className={classes.row} noGutters={true}>
                <Col></Col>
                <Col>
                  <div style={{
                    marginLeft: "95%",
                  }}>
                    <IconButton
                      aria-label="show more"
                      style={{ padding: 0, outline: "none", color: "#FFFFFF" }}
                      onClick={handleClose}
                    >
                      <CloseIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </div>
                </Col>
              </Row>
              <Row className={classes.row} noGutters={true}>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      Room Type Name*
              </FormLabel>
                    <TextField
                      id="RoomTypeName"
                      placeholder="Enter room type name"
                      value={props.RoomList.Name}
                      className={classes.textField}
                      onChange={(event) => {
                        props.RoomList.Name = event.target.value
                      }}
                      margin="dense"
                      variant="outlined"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      Room Capacity*
              </FormLabel>
                    <TextField
                      id="RoomCapacity"
                      placeholder="Enter room capacity"
                      value={props.RoomList.capacity}
                      className={classes.textField}
                      onChange={(event) => {
                        props.RoomList.capacity = event.target.value
                      }}
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
                      className={classes.formLabel}
                    >
                      No. of bathroom*
              </FormLabel>
                    <TextField
                      id="bathroom"
                      placeholder="Enter number of bathroom"
                      value={props.RoomList.bathroom}
                      className={classes.SmalltextField}
                      onChange={(event) => {
                        props.RoomList.bathroom = event.target.value
                      }}
                      margin="dense"
                      variant="outlined"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      No. of kitchen*
              </FormLabel>
                    <TextField
                      id="kitchen"
                      placeholder="Enter number of kitchen"
                      value={props.RoomList.kitchen}
                      className={classes.SmalltextField}
                      onChange={(event) => {
                        props.RoomList.kitchen = event.target.value
                      }}
                      margin="dense"
                      variant="outlined"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      No. of bedroom*
              </FormLabel>
                    <TextField
                      id="bedroom"
                      placeholder="Enter number of bedroom"
                      value={props.RoomList.bedroom}
                      className={classes.SmalltextField}
                      onChange={(event) => {
                        props.RoomList.bedroom = event.target.value
                      }}
                      margin="dense"
                      variant="outlined"
                    />
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      Pricing (1 month)*
              </FormLabel>
                    <TextField
                      id="pricing"
                      placeholder="Enter 1 month pricing"
                      value={props.RoomList.pricing}
                      className={classes.SmalltextField}
                      onChange={(event) => {
                        props.RoomList.pricing = event.target.value
                      }}
                      margin="dense"
                      variant="outlined"
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel className={classes.formLabel}>Allowed Sex*</FormLabel>
                    <RadioGroup
                      aria-label="AllowSex"
                      name="AllowSex"
                      value={props.RoomList.AllowSex}
                      onChange={(event) => {
                        //console.log(event.target.value)
                        props.RoomList.AllowSex = event.target.value
                      }}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio color="secondary" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio color="secondary" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="any"
                        control={<Radio color="secondary" />}
                        label="Any"
                      />
                    </RadioGroup>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel className={classes.formLabel}>Air Conditioner*</FormLabel>
                    <RadioGroup
                      aria-label="AirCon"
                      name="AirCon"
                      value={props.RoomList.AllowSex}
                      onChange={(event) => {
                        //console.log(event.target.value)
                        props.RoomList.AirCon = event.target.value
                      }}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio color="secondary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio color="secondary" />}
                        label="no"
                      />
                    </RadioGroup>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl component="fieldset">
                    <FormLabel
                      className={classes.formLabel}
                    >
                      Room image
              </FormLabel>
                    <Dropzonef files={props.RoomList.RoomImage} setFiles={(files: any) => { props.RoomList.RoomImage = files; }} />
                  </FormControl>
                </Col>
                <Col>
                </Col>
              </Row>
              <Row className={classes.row} noGutters={true}>
                <FormControl component="fieldset">
                  <FormLabel
                    className={classes.formLabel}
                  >
                    Description
              </FormLabel>
                  <TextField
                    id="des"
                    placeholder="Enter description"
                    value={props.RoomList.des}
                    className={classes.DestextField}
                    onChange={(event) => {
                      props.RoomList.des = event.target.value
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </FormControl>
              </Row>
              <Row className={classes.row} noGutters={true}>
                <Button
                  className={classes.button}
                  onClick={handleSubmit}>
                  Confirm
                    </Button>
              </Row>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}

