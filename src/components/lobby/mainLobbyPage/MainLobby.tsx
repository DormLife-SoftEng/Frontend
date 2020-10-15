import React , {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import BackButton from "./BackButton";
import CreateLobby from "./CreateLobby";
import JoinCode from "./JoinCode";
import LobbyList from "./LobbyList";
import SearchBar from "./SearchBar"
import { Lobby } from "./type"
function MainLobby() {
  const history = useHistory();
  const [lobbylist,setLobbyList] = useState<Lobby[]>([])
  const mockup : Lobby[] = [{dormName:"Hee" ,roomType:"Kuy" , link : "lobbyID1"},{dormName:"Kuy" ,roomType:"Hee" , link : "lobbyID2"}]
  const handleRouting = (s : string) => {
    history.push(s);
  }
  const handleGoBack = () => {
    history.goBack();
  }
  const handleSubmit = (s : string) => {
    // search by parameter & set new State 
    alert(s)
    setLobbyList([])
  }
  useEffect(()=> {
    // fetch start lobbylist
    setLobbyList(mockup)
  },[])
  return (
    <div>
      <BackButton handleGoBack={handleGoBack} />
      <h1>Main Lobby</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <LobbyList lobbylist={lobbylist}/>
      <JoinCode handleRouting={handleRouting} />
      <CreateLobby handleRouting={handleRouting} />
    </div>
  );
}
export default MainLobby;
