import React  from "react";
import LobbyRow from "./LobbyRow";
import { LobbyListProps } from "../../type";



const LobbyList = (props : LobbyListProps) => {
    const {lobbylist} = props
    return (
        <div style={{ display: "inline-block" ,paddingTop:"2%"}}>
            <div
            className="overflow-auto"
            style={{ textAlign: "center", maxWidth: "800px", maxHeight: "400px" }}
            >
            {lobbylist.map((lobby,index) => {
                return <LobbyRow roomType={lobby.roomType} _id={lobby._id} dormName={lobby.dormName}  key={index} />
            })}
            </div>
        </div>
    );
};
export default LobbyList
