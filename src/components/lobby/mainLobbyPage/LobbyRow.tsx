/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useEffect} from "react";
import { useHistory } from "react-router-dom";
import lobbyService from "../../../services/lobby.service";
import { LobbyRowProps } from "../../type"
import { token2 } from "../../test"
import { Button,Row } from "react-bootstrap"
const LobbyRow = (props: LobbyRowProps) => {
    const { dormName, room, id } = props
    const history = useHistory()
    useEffect(() => {
        console.log(id)
    },[])
    return (
        <Row noGutters={true} className="mb-2">
            <Button variant="" size="lg" style={{backgroundColor:"white",color:"#F55E61", height:"70px",width:"700px" ,textAlign:"left"}}>
                <a onClick={async () => {
                    const param = {
                        id: id,
                    }
                    await lobbyService.joinLobby(param)
                    history.push(`/lobby/${id}`)
                }}><p>{dormName}, {room}</p></a>
            </Button>
        </Row>
    )
}
export default LobbyRow;