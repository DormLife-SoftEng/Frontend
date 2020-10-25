import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";
import LobbyService from "../../../services/lobby.service";
import { token1 } from "../../test";
import {Nav,Navbar} from "react-bootstrap";

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
    <div style={{textAlign:"center"}}>
      <Navbar style={{ padding: "1% 4%" }} bg="danger">
        <Nav className="text-center" >
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
        <label>Dorm Name</label>
        <br />
        <input
          name="dormName"
          value={form.dormName}
          onChange={handleChangeInput}
          placeholder="Enter Dorm Name"
        />
        <br />
        <label>Room Type</label>
        <br />
        <input
          name="roomType"
          value={form.roomType}
          onChange={handleChangeInput}
          placeholder="Enter Room Type "
        />
        <br />
        <button type="submit">Create</button>
      </form>
      <button onClick={handleGoBack}>Cancel</button>
    </div>
  );
};
export default CreatePage;
