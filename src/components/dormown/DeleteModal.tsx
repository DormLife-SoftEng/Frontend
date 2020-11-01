/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.css"

import {
  Image,
  Row,
  Col,
  Modal,
  Button,
  Card,
  Container,
} from "react-bootstrap";

function DeleteModal(props: any) {
  const { dorm } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button
        style={{
          //fontFamily: "Athiti",
          fontSize: "40px",
          height: "91px",
          width: "963px",
          background: "#F55E61",
          borderRadius: "10px",
        }}
        onClick={handleShow}
      >
        Delete Dorm
      </Button>
      <Modal centered={true} show={show} onHide={handleClose} dialogClassName="delete" >
        <Modal.Body style={{ fontSize: "1rem" ,borderRadius:"20px" ,background:"#F55E61"}}>
          <Container style={{
          }}>
            <Row style={{
              width:"100%"
            }} >
              <h1 style={{
                textAlign:"center",
                fontSize:"40px"
              }}>
                Are you sure to delete this dorm?
              </h1>
            </Row>
            <Row>
              <Col lg={6} style={{textAlign:"center"}}>
              <Button style={{borderRadius:"10px",background:"white",color:"#F55E61",fontWeight:"bold"}}>
                Confirm
              </Button>
              </Col>
              <Col lg={6} style={{textAlign:"center"}}>
              <Button onClick={handleClose} style={{borderRadius:"10px",background:"white",color:"#F55E61",fontWeight:"bold"}}>
                Cancle
              </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default DeleteModal;
