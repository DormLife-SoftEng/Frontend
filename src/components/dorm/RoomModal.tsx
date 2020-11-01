/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import {Image, Row, Col, Modal, Button} from "react-bootstrap";
import DormCarousel from "./DormCarousel";

function RoomModal(props: any) {
  const { room } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a style={{color:"blue"}} onClick={handleShow}>
        {room.name}
      </a>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Row>
          <Col>
          <DormCarousel images={room.image} height='200px'/>
          </Col>
          <Col>
            <h3>
              Room Type Name: {room.name}
            </h3>
            <h3>
              Room Capacity: {room.capacity}
            </h3>
          </Col>
          <Col>
          <span style={{textTransform: 'capitalize'}}>
            <p>Allowed Sex: {room.allowedSex}</p>
            <p>No. of Bathroom: {room.bathroom}</p>
            <p>No. of Kitchen: {room.kitchen}</p>
            <p>No. of Bedroom: {room.bedroom}</p>
            <p>No. of Aircond: {room.aircond}</p>
            <p>Pricing: {room.price}฿/month</p>
          </span>
          <br/>
          <h5>Description</h5>
          <p>{room.description}</p>
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RoomModal;
