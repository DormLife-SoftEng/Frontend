import React from "react";

interface lobbyProps {
    dormName : string,
    roomType : string,
    link : string,
}

const LobbyRow = (props : lobbyProps) => {
    const {dormName,roomType,link} = props
    return (
        <div>
            <a href={`/lobby/${link}`}><p>{dormName}, {roomType}</p></a>
        </div>
    )
}
export default LobbyRow;