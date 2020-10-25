import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Header = () => {
  const history = useHistory();
  return (
    <Row style={{ textAlign: "left" }}>
      <Col>
        <Button onClick={() => history.push("/")} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
    </Row>
  );
};
export default Header;
