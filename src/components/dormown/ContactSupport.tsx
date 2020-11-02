import React, { useEffect, useState, Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Container } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid } from "@material-ui/core";
import DeleteModal from "./DeleteModal"
//import { View, StyleSheet, Text } from 'react-native';

function Contactsupport() {
  const history = useHistory();
  const {id}:{id:string} = useParams();
  useEffect(() => {
    document.body.style.backgroundColor = "#FFBDBD";
  }, []);
  return (
    <div style={{textAlign:"center"}}>
      <div>
        <Navbar style={{ padding: "1%" }} bg="white">
          <Nav className="text-right">
            <Button variant="" onClick={() => history.goBack()}>
              <ArrowBackIosIcon htmlColor="red" fontSize="large" />
            </Button>
            <h1
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "right",
                overflow: "visible",
                height: "10%",
                top: "0",
                left: "-5%",
                color: "#F55E61",
                //fontFamily: "Prompt",
                fontStyle: "normal",
                fontSize: "63px",
                fontWeight: "bold",
                //font-family: "Times New Roman"
              }}
            >
              Dormlife
            </h1>
          </Nav>
        </Navbar>
      </div>

      <div style={{ padding: "100px" }}>
      <Grid container direction="column" spacing={5} alignItems="center" justify="center">
          <Grid container item direction="column" spacing={10}>
            
              <h1
                style={{
                  width: "100%",
                  overflow: "visible",
                  //fontFamily: "Athiti",
                  fontStyle: "normal",
                  fontSize: "72px",
                }}
              >
                Contact Support
              </h1>
            
            
              <Grid item>
                <Button 
                  style={{
                    //fontFamily: "Athiti",
                    fontSize: "40px",
                    height: "91px",
                    width: "963px",
                    background: "#F55E61",
                    borderRadius: "10px",
                  }}
                
               >
                 Edit Dorm Info
               </Button>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={10}>
              <Grid item >
              <DeleteModal id={id}/>
              </Grid>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}
export default Contactsupport;
