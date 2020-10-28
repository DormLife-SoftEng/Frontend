import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = () => {
  const history = useHistory();
  return (
    <Row
      style={{
        backgroundColor: "#F55E61",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "20px",
      }}
      noGutters={true}
    >
      <Col xs={3} md={2} style={{ textAlign: "center" }}>
        <Button onClick={() => history.push("/admin/editrequest")} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
      <Col xs={6} md={8} style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: 600, color: "white" }}>Edit Request</h1>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  );
};

export default function () {
  return (
    <>
      <Header />
      <Row noGutters={true}>
        <Col xs={1} md={1}></Col>
        <Col xs={11} md={5}>
          <Row>
            <Col xs={11} md={11}>
              <Card style={{ width: "100%" }}>
                <Card.Body>Dorm info</Card.Body>
              </Card>
            </Col>
            <Col xs={1} md={1}></Col>
          </Row>
        </Col>
        <Col xs={11} md={5}>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={11} md={11}>
              <Card style={{ width: "100%" }}>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </>
  );
}
