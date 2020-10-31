import React from "react";
import { Col, Row } from "react-bootstrap";
import { propsSuggestItem } from "./type";
function SuggestItem(props: propsSuggestItem) {
  const { src, link } = props;
  return (
    <Row noGutters={true} style={{ paddingTop: "15px", paddingBottom: "15px" }}>
      <Col xs={1}></Col>
      <Col>
        <a href={link}>
          <img
            src={src}
            alt="..."
            style={{
              height: "200px",
              width: "75%",
              overflow: "hidden",
              flex: "1",
              objectFit: "cover",
            }}
          />
        </a>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}
export default SuggestItem;
