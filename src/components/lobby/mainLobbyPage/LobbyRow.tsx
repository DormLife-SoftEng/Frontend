/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useEffect} from "react";
import { useHistory } from "react-router-dom";
import lobbyService from "../../../services/lobby.service";
import { LobbyRowProps } from "../../type"
import { token2 } from "../../test"
import { Button,Col,Row } from "react-bootstrap"
const LobbyRow = (props: LobbyRowProps) => {
    const { dormName, room, id  , max, member , handleRouting} = props

    return (
        <Row noGutters={true} className="mb-2">
            <Button variant="" size="lg" style={{backgroundColor:"white",color:"#F55E61", height:"70px",width:"700px" ,textAlign:"left"}}>
                <a onClick={async () => {
                    const param = {
                        id: id,
                    }
                    await lobbyService.joinLobby(param)
                    handleRouting(`/lobby/${id}`)
                }}>
                    <Row noGutters={true}>
                        <Col>
                            <p>{dormName}, {room}</p>
                        </Col>
                        <Col style={{textAlign:"right"}}>
                            <p>{member}/{max}</p>
                        </Col>
                    </Row></a>
            </Button>
        </Row>
    )
}
export default LobbyRow;