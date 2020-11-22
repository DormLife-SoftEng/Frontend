import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAuth, authContextType } from "../../contexts/auth.context";
import ReviewcodeModal from "../review/ReviewcodeModal";
import lobbyService from "../../services/lobby.service";

function Navbar2() {

  const history = useHistory();
  const { authToken }: authContextType = useAuth();

  const checkHaveLobby = async () => {
    const result = await lobbyService.checkHaveLobby();
    if (result === "") {
      history.push("/lobby")
    } else {
      history.push(`/lobby/${result}`)
    }
  }

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
                checkHaveLobby();
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
