/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";
import {propsCarousel} from "./type";
function DormCarousel(props: propsCarousel) {
  const path  = "http://localhost:5000/api/v1/dorms/images/"
  var { images, height } = props;
  if(height == null)height = '275px';
  return (
    <Carousel style={{ padding: "1% 2%" }}>
      {images.map((img, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              style={{ height: height, objectFit: "cover"}}
              className="d-block w-100"
              src={`${path}${img}`}
              alt="First slide"
            />
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
  );
}
export default DormCarousel;
