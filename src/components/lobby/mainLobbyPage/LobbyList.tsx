import React  from "react";
import LobbyRow from "./LobbyRow";
import { Lobby } from "./type";

interface propsLobby {
    lobbylist : Lobby[]
}

const LobbyList = (props : propsLobby) => {
    const {lobbylist} = props
    return (
        <>
        <div style={{ display: "inline-block" }}>
            <div
            className="overflow-auto  bg-light"
            style={{ textAlign: "center", maxWidth: "800px", maxHeight: "250px" }}
            >
            </div>
            {lobbylist.map((lobby,index) => {
                return <LobbyRow {...lobby} key={index} />
            })}
        </div>
        </>
    );
};
export default LobbyList
