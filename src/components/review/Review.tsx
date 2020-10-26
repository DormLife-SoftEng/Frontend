import React, { useEffect, useState, Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Container } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

function ReviewAdd() {
  const [value, setValue] = React.useState<number | null>(0);
  const history = useHistory();
  return (
    <div>
      <div>
        <Navbar style={{ padding: "1%" ,backgroundColor: "#F55E61"}}>
          <Nav className="text-right">
            <Button variant="" onClick={() => history.goBack()}>
              <ArrowBackIosIcon htmlColor="white" fontSize="large" />
            </Button>
            <h1
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                overflow: "visible",
                height: "0",
                left: "0%",
                color: "white",
              }}
            >
              REVIEW
            </h1>
          </Nav>
        </Navbar>
      </div>
      <div style={{padding:"3% 3%"}}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" style={{fontSize:"40px"}}>Rating</Typography>
        <br />
        <Rating
          name="simple-controlled"
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            alert(JSON.stringify(newValue));
          }}
        />
      </Box>
      <FormControl component="fieldset" style={{ float: "left", backgroundColor: "#E7E7E7", width:"650px", height:"222px"}}>
        <TextField
          placeholder="Type something..."
          style={{ width: "100%", height: "100%" }}
          multiline
          variant="filled"
          rows={10}
        />
      </FormControl>
      </div>
    </div>
  )
}

export default ReviewAdd;