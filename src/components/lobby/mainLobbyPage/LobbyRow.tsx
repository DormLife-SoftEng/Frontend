/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import lobbyService from "../../../services/lobby.service";
import { LobbyRowProps } from "../../type"
import { token2 } from "../../test"
import { Button,Row } from "react-bootstrap"
const LobbyRow = (props: LobbyRowProps) => {
    const { dormName, roomType, _id } = props
    const history = useHistory()
    return (
        <Row noGutters={true} className="mb-2">
            <Button variant="" size="lg" style={{backgroundColor:"white",color:"#F55E61", height:"70px",width:"700px" ,textAlign:"left"}}>
                <a onClick={async () => {
                    const param = {
                        id: _id,
                        token: token2
                    }
                    await lobbyService.joinLobby(param)
                    history.push(`/lobby/${_id}`)
                }}><p>{dormName}, {roomType}</p></a>
            </Button>
        </Row>
    )
}
export default LobbyRow;