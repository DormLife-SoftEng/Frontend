/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";

function DormInfo(props: any) {
  const { dorms } = props;
  return (
    <div>
      <p>Type: Dorm</p>
      <p>Allowed Sex: Dorm</p>
      <p>Address: Dorm</p>
      <p>Phone Number: Dorm</p>
      <p>Website: Dorm</p>
      <p>Map: Dorm</p>
      <p>Facilities: Dorm</p>
      <p>Allowed Pet: Dorm</p>
      <p>Allowed Cooking: Dorm</p>
      <p>Room Type: Dorm</p>
    </div>
  );
}
export default DormInfo;
