/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import {
  Image,
  Row,
  Col,
  Modal,
  Button,
  Card,
  Container,
} from "react-bootstrap";

function ReviewCodeModal(props: any) {
  const { dorm } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" style={{ color: "white" }} onClick={handleShow}>
        Generate Review Code
      </Button>
      <Modal centered={true} size="lg" show={show} onHide={handleClose}>
        <Modal.Body style={{ fontSize: "1rem" }}>
          <Container>
            <Row noGutters={true}>
              <Col md={3}></Col>
              <Col md={6}>
                <p style={{textAlign:"center"}}>This Dorm Reviw Code is</p>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row noGutters={true} style={{ textAlign: "center" }}>
              <Col md={3}></Col>
              <Col md={6}>
                <Card border="dark">
                  <Card.Body>{dorm.code}</Card.Body>
                </Card>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row noGutters={true} style={{ padding:"5% 0% 0%",textAlign: "center" }}>
              <Col md={3}></Col>
              <Col md={6}>
                <Button variant="secondary" size="lg" onClick={handleClose}>
                  Close
                </Button>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ReviewCodeModal;
