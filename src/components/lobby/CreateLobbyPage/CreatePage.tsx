import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";
import LobbyService from "../../../services/lobby.service";
import { token1 } from "../../test";
import { Nav, Navbar, Row, Col ,Button} from "react-bootstrap";

const CreatePage = () => {
  const history = useHistory();
  const [form, setForm] = useState({ dormName: "", roomType: "" });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleGoBack = () => {
    history.goBack();
  };
  const handleSubmit = async () => {
    const lobby = { ...form, token: token1, maxMember: 4 };
    const lobbyID: string = await LobbyService.createLobby(lobby);
    history.push(`/lobby/${lobbyID}`);
  };
  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar style={{ padding: "1% 4%" }} bg="danger">
        <Nav className="text-center">
          <BackButton handleGoBack={handleGoBack} />
          <h1
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              overflow: "visible",
              height: "0",
              left: "0%",
              color: "white",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "45px",
            }}
          >
            Create Lobby
          </h1>
        </Nav>
      </Navbar>
      <br />
      <form onSubmit={handleForm}>
        <label style = {{
            paddingTop:"10%"
          }}>
          <Row noGutters={true} xs={12}>
            <Col lg={6} style={{
              marginBottom:"auto",
              marginTop:"auto"
            }}>
              <span style = {{
            fontSize:"32px",
            color:"#F55E61"
          }}>Dorm Name</span>
            </Col>
            <Col lg={6}>
              <input style ={{
                textAlign:"center",
                width:"500px",
                height:"50px",
                fontSize:"18px"
              }}
                name="dormName"
                value={form.dormName}
                onChange={handleChangeInput}
                placeholder="Enter your Dorm Name"
              />
            </Col>
          </Row>
        </label>
        <br />
        <label style = {{
            paddingTop:"10%"
          }}>
          <Row noGutters={true} xs={12}>
            <Col lg={6} style = {{
            fontSize:"32px",
            marginBottom:"auto",
            marginTop:"auto"
          }}>
              <span style={{
                color:"#F55E61"
              }}>Room Type</span>
            </Col>
            <Col lg={6}>
              <input style ={{
                textAlign:"center",
                width:"500px",
                height:"50px",
                fontSize:"18px"
              }}
                name="roomType"
                value={form.roomType}
                onChange={handleChangeInput}
                placeholder="Enter your Room Type "
              />
            </Col>
          </Row>
        </label>
        <br />
        <Row style={{
          paddingTop:"5%"
        }}>
          <Col style={{
            marginLeft:"30%"
          }}>
            <Button variant="danger" type="submit" >Create</Button>
          </Col>
          <Col style={{
            marginRight:"30%"
          }}>
            <Button variant="secondary" onClick={handleGoBack}>Cancel</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};
export default CreatePage;
