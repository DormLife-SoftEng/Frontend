import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "./BackButton";
import CreateLobby from "./CreateLobby";
import JoinCode from "./JoinCode";
import LobbyList from "./LobbyList";
import SearchBar from "./SearchBar"
import { Lobby } from "../../type"
import lobbyService from "../../../services/lobby.service"
import { Nav, Navbar, Row, Col } from "react-bootstrap";
function MainLobby() {
  const history = useHistory();
  const [lobbylist, setLobbyList] = useState<any[]>([])
  const [lobbylistSearch,setlobbylistSearch] = useState<any[]>([])
  const handleRouting = (s: string) => {
    history.push(s);
  }
  const handleGoBack = () => {
    history.push("/");
  }
  const handleSubmit = (s: string) => {
    // search by parameter & set new State 
    const search = lobbylist.filter(lobby =>  {
      const name = lobby.dormName+", "+lobby.room as string
      return name.includes(s)
    })
    setlobbylistSearch(search)
  }

  const getAllLobbys = async () => {
    const allLobbys = await lobbyService.getLobbys();
    console.log(allLobbys)
    setLobbyList(allLobbys)
    setlobbylistSearch(allLobbys)
  }
  
  useEffect(() => {
    getAllLobbys()
    document.body.style.backgroundColor = "#F55E61"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{textAlign:"center"}}>
      <Navbar style={{ padding: "1% 4%" }} bg="">
        <Nav className="text-center">
          <BackButton handleGoBack={handleGoBack} />
          <h1 style={{
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
          }}>Main Lobby</h1>
        </Nav>
      </Navbar>
      <Row noGutters={true} style={{padding:"1%"}}>
      <Col xs="4"></Col>
      <Col xs="4">
      <SearchBar handleSubmit={handleSubmit}/>
      </Col>
      <Col xs="4"></Col>
      </Row>
      <Row noGutters={true}>
      <Col xs="2"></Col>
      <Col xs="8">
      <LobbyList lobbylist={lobbylistSearch} />
      </Col>
      <Col xs="2"></Col>
      </Row>
      <Row style={{paddingTop:"2%"}} noGutters={true} xs="12">
        <Col>
        <JoinCode handleRouting={handleRouting} />
        </Col>
        <Col>
        <CreateLobby handleRouting={handleRouting} />
        </Col>
      </Row>
    </div>
  );
}
export default MainLobby;
