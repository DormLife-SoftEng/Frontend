import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Navbar className="test" style={{ padding: "1%" }} bg="danger">
        <Nav className="text-center">
          <Button variant="" onClick={() => history.goBack()}>
            <ArrowBackIosIcon htmlColor="white" fontSize="large" />
          </Button>
          <h1
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              overflow: "visible",
              height: "0",
              left: "0%",
              color: "white",
            }}
          >
            Add Dorm
          </h1>
        </Nav>
      </Navbar>
    </>
  );
};
export default Header;
