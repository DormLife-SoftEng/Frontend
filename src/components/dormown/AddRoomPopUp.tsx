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
interface AddRoomPopupProps {
  open: boolean;
  setOpen: any;
  RoomList: any[];
  setRoomList: any;
}

interface Roomtype{
    name : string;
    setName: any;
    capacity: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
        marginRight: "10px",
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
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardPopup: {
      minWidth: 500,
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

export default function AddRoomPopup(props: AddRoomPopupProps, RT: Roomtype) {
    const [roomname,setroomname] = useState<string>("");
    const handleClickOpen = () => {
    props.setOpen(true);
  };
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
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
                    marginLeft: "6cm",
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
                        <TextField 
                        className={classes.textField} 
                        label="Room Type Name" 
                        onChange={(event) => {
                            //console.log(event.target.value)
                            const roomname = event.target.value
                            setroomname(roomname)
                        }}
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className={classes.row} noGutters={true}>
                    <Button 
                        className={classes.button}
                        onClick ={()=>{
                            console.log(roomname)
                        }}>
                        Submit
                    </Button>
                </Row>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}

