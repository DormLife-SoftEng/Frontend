import React, { useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAuth, authContextType } from "../../contexts/auth.context";
import authService from "../../services/auth.service";

function NavBar() {
  const { authToken, setAuthToken }: authContextType = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!!!authToken) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authToken]);
  const handleClick = async () => {
    const result = await authService.Logout();
    if (result) {
      setAuthToken(null);
      history.push("/");
    }
  };

  return (
    <Navbar bg="light">
      <Navbar.Brand style={{ color: "#F55E61", fontSize: "2rem", fontWeight: "bold" }}>
        DormLife
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Button
          onClick={handleClick}
          style={{ backgroundColor: "#F55E61", borderColor: "#F55E61" }}
          className="mt-2 ml-1 mb-2 mr-1"
          variant="danger"
        >
          Signout
        </Button>
      </Nav>
    </Navbar>
  );
}
export default NavBar;
