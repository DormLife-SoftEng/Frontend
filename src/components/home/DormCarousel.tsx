/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { propsCarousel } from "./type";
import { useHistory } from "react-router-dom";
const path  = "http://localhost:5000/api/v1/dorms/images/"
function DormCarousel(props: propsCarousel) {
  const { dorms } = props;
  const history = useHistory();
  return (
    <Row noGutters={true}>
      <Col xs={1}></Col>
      <Col xs={10}>
        <Carousel style={{ padding: "1% 2%" }}>
          {dorms.map((dorm, index) => {
            return (
              <Carousel.Item key={index}>
                <a onClick={() => history.push(`/dorm/${dorm.id}`)}>
                  <img
                    style={{ height: "350px", overflow: "hidden", flex: "1", objectFit: "cover" }}
                    className="d-block w-100"
                    src={`${path}${dorm.image[0]}`}
                    alt="First slide"
                  />
                </a>
              </Carousel.Item>
            );
          })}
          {/* 
      <Carousel.Item>
        <a href="#">
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://udo.oop.cmu.ac.th/network%20dorm/pic_dorm/pnd.jpg"
            alt="Second slide"
          />
        </a>
      </Carousel.Item> */}
        </Carousel>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
export default DormCarousel;
