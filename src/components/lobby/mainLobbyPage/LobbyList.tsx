import React  from "react";
import LobbyRow from "./LobbyRow";
import { LobbyListProps } from "../../type";



const LobbyList = (props : LobbyListProps) => {
    const {lobbylist,handleRouting} = props
    return (
        <div style={{ display: "inline-block" ,paddingTop:"2%"}}>
            <div
            className="overflow-auto"
            style={{ textAlign: "center", maxWidth: "800px", maxHeight: "400px" }}
            >
            {lobbylist.map((lobby:any,index:number) => {
                return <LobbyRow  handleRouting={handleRouting} member={lobby.member.length} max={lobby.maxMember} room={lobby.room} id={lobby.id} dormName={lobby.dormName}  key={index} />
            })}
            </div>
        </div>
    );
};
export default LobbyList
