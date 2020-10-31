import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = (props: any) => {
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
        <h1 style={{ fontWeight: 600, color: "white" }}>{props.dormName}</h1>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  );
};

export default function () {
  const [approve, setApprove] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  return (
    <>
      <Header dormName={"Helloworld"} />
      <Row noGutters={true}>
        <Col xs={1} md={1}></Col>
        <Col xs={11} md={5}>
          <Row>
            <Col style={{ fontWeight: "bold" }} xs={11} md={11}>
              Dorm Edit
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={11} md={11}>
              <Card border="dark" style={{ width: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                      Dorm info
                    </Col>
                    <Col xs={1} md={1}></Col>
                  </Row>
                  <Row>
                    <Col>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                      <Card border="dark" style={{ width: "100%" }}>
                        Hi
                      </Card>
                    </Col>
                    <Col xs={1} md={1}></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={1} md={1}></Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={11} md={11}>
              <div style={{ textAlign: "center" }}>
                <Button variant="danger">{approve ? "Approve" : "Unapprove"}</Button>
                {!showDelete ? (
                  <>
                    {"  "}
                    <Button variant="secondary">Delete</Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Col>
        <Col xs={11} md={5}>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={11} md={11}>
              <Card border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </>
  );
}
