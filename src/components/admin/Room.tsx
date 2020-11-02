import React, { useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const path = "http://localhost:5000/api/v1/dorms/images/";

interface addRoomFormValue {
  name: string;
  capacity: string;
  image: [string];
  bathroom: string;
  aircond: string;
  kitchen: string;
  bedroom: string;
  description: string;
  price: string;
  allowedSex: string;
}
const Room = (props: addRoomFormValue) => {
  const {
    name,
    aircond,
    capacity,
    description,
    bedroom,
    bathroom,
    kitchen,
    price,
    allowedSex,
    image,
  } = props;

  const room: addRoomFormValue = {
    name,
    aircond,
    capacity,
    description,
    bedroom,
    bathroom,
    kitchen,
    price,
    allowedSex,
    image,
  };
  const stringToCapital = (text: any) => text?.charAt(0).toUpperCase() + text?.slice(1);

  return (
    <>
      <Row
        style={{ width: "100%", margin: "2% 0", borderRadius: "20px", border: "solid 1px #000" }}
        noGutters={true}
      >
        <div style={{ width: "100%", padding: "2%" }}>
          <Col lg={12}>
            <Row noGutters={true}>
              <Col xs={12} md={6} lg={6}>
                <Row noGutters={true}>
                  <Col xs={12}>
                    <img
                      style={{
                        width: "90%",
                        overflow: "hidden",
                        flex: "1",
                        objectFit: "cover",
                      }}
                      src={`${path}${image[0]}`}
                    />
                  </Col>
                </Row>
                <Row style={{ paddingTop: "5px" }} noGutters={true}>
                  <Col xs={12}>
                    <p>Room Type Name: {name}</p>
                    <p>Room Capacity: {capacity}</p>

                    <p></p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <p>Allowed Sex: {stringToCapital(allowedSex)}</p>
                <p>No. of Bathroom : {bathroom}</p>
                <p>No. of Kitchen : {kitchen}</p>
                <p>No. of Bedroom : {bedroom}</p>
                <p>Air Condition : {stringToCapital((!!aircond).toString())}</p>
                <p>Pricing : {price} ฿/month</p>
                <br/>
                {!description && (
                  <Card className="des" border="info">
                    <Card.Text>Description : {description}</Card.Text>
                  </Card>
                )}
              </Col>
              <Col lg={12}></Col>
            </Row>
          </Col>
        </div>
      </Row>
    </>
  );
};
export default Room;
