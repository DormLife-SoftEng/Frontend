/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import dormownerService from "../../services/dormowner.service";
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
  const [code,setCode] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = async () => {
    const result = await dormownerService.generateReviewCode(dorm.id)
    console.log(result)
    setCode(result.code)
    handleShow()

  }

  return (
    <>
      <Button variant="danger" style={{ color: "white" }} onClick={handleClick}>
        Generate Review Code
      </Button>
      <Modal centered={true} size="lg" show={show} onHide={handleClose}>
        <Modal.Body style={{ fontSize: "1rem" }}>
          <Container>
            <Row noGutters={true}>
              <Col md={3}></Col>
              <Col md={6}>
                <p style={{color:"#F55E61",textAlign:"center"}}>This Dorm Reviw Code is</p>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row noGutters={true} style={{ textAlign: "center" }}>
              <Col md={3}></Col>
              <Col md={6}>
                <Card border="dark">
                  <Card.Body style={{fontWeight:"bold"}} >{code}</Card.Body>
                </Card>
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row noGutters={true} style={{ padding:"5% 0% 0%",textAlign: "center" }}>
              <Col md={3}></Col>
              <Col md={6}>
                <Button variant="danger" size="lg" onClick={handleClose}>
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
