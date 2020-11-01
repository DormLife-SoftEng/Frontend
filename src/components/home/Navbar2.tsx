import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAuth, authContextType } from "../../contexts/auth.context";
import ReviewcodeModal from "../review/ReviewcodeModal";

function Navbar2() {
  const history = useHistory();
  const { authToken }: authContextType = useAuth();
  authToken && authToken.role === "admin" && history.push("/admin");
  return (
    <Row noGutters={true}>
      {authToken && authToken.role === "owner" ? (
        <Col>
          <Button
            size="lg"
            variant="light"
            onClick={() => {
              history.push("/dormowner");
            }}
            block
            style={{ fontWeight: "bold" }}
          >
            My Dorm
          </Button>
        </Col>
      ) : (
        <>
          <Col>
            <ReviewcodeModal />
          </Col>
          <Col>
            <Button
              onClick={() => {
                history.push("/lobby");
              }}
              size="lg"
              variant="light"
              block
              style={{ fontWeight: "bold" }}
            >
              Find Roommate
            </Button>
          </Col>
        </>
      )}
    </Row>
  );
}
export default Navbar2;
