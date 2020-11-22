/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const path = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/dorms/images/`;
function SuggestItem(props: any) {
  const { image, id } = props;
  const history = useHistory();
  return (
    <Row noGutters={true} style={{ paddingTop: "15px", paddingBottom: "15px" }}>
      <Col xs={1}></Col>
      <Col>
        <a onClick={() => history.push(`/dorm/${id}`)}>
          <img
            src={`${path}${image[0]}`}
            alt="..."
            style={{
              height: "200px",
              width: "600px",
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
