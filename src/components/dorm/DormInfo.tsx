/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";

function DormInfo(props: any) {
  const { dorms } = props;
  return (
    <div>
      <p><strong>Type:</strong> Dorm</p>
      <p><strong>Allowed Sex:</strong> Dorm</p>
      <p><strong>Address:</strong> Dorm</p>
      <p><strong>Phone Number:</strong> Dorm</p>
      <p><strong>Website:</strong> Dorm</p>
      <p><strong>Map:</strong> Dorm</p>
      <p><strong>Facilities:</strong> Dorm</p>
      <p><strong>Allowed Pet:</strong> Dorm</p>
      <p><strong>Allowed Cooking:</strong> Dorm</p>
      <p><strong>Room Type:</strong> Dorm</p>
    </div>
  );
}
export default DormInfo;
