import React, { useEffect, useState, Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { Navbar, Nav, Row, Col, Button, Container } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Grid } from "@material-ui/core";
import DeleteModal from "./DeleteModal";
import dormownerService, { Ticket } from "../../services/dormowner.service";
import dorminfoService from "../../services/dorminfo.service";
//import { View, StyleSheet, Text } from 'react-native';

function Contactsupport() {
  const history = useHistory();
  const { dormID }: { dormID: string } = useParams();
  const tickets: Ticket = {
    target: {},
    newdata: {},
    type: "dorm",
    request: "delete",
    status: "pending",
  };
  function deleteHandle() {
    console.log(dormID);
    dorminfoService
      .getOneDorm(dormID)
      .then((res) => res)
      .then((data) => (tickets.target = data))
      .then(() => dormownerService.deleteDorm(tickets));
    console.log(tickets);
    history.goBack();
  }
  useEffect(() => {
    document.body.style.backgroundColor = "#FFBDBD";
  });
  return (
    <>
      <Navbar style={{}} bg="white">
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
              fontFamily: "Prompt",
              fontStyle: "normal",
              fontSize: "63px",
              fontWeight: 900,
              //font-family: "Times New Roman"
            }}
          >
            Dormlife
          </h1>
        </Nav>
      </Navbar>

      <Row className={"mt-4 mb-4"} style={{textAlign: "center"}}>
        <Col xs={12}>
          <h1
            style={{
              overflow: "visible",
              fontFamily: "Athiti",
              fontStyle: "normal",
              fontSize: "72px",
            }}
          >
            Contact Support
          </h1>
        </Col>
      </Row>

      <Row className={"mt-4 mb-4"}>
        <Col xs={1} sm={2}></Col>
        <Col xs={10} sm={8}>
          <Button
            style={{
              //fontFamily: "Athiti",
              fontSize: "40px",
              background: "#F55E61",
              borderRadius: "10px",
            }}
            block
          >
            Edit Dorm Info
          </Button>
        </Col>
        <Col xs={1} sm={2}></Col>
      </Row>
      {"  "}
      <DeleteModal deleteSubmit={deleteHandle} />
    </>
  );
}
export default Contactsupport;
