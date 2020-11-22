import React, { useEffect, useState } from "react";
import HomeButton from "./HomeButton";
import { useHistory, useParams , Redirect } from "react-router-dom";
import CloseLobby from "./CloseLobby";
import DeleteLobby from "./DeleteLobby";
import LeaveLobby from "./LeaveLobby";
import Ready from "./Ready"
import ImageList from "./ImageList";
import ChatRoom from "./ChatRoom";
import lobbyService from "../../../services/lobby.service";
import {Nav,Navbar, Row,Col} from "react-bootstrap"
import {useAuth , authContextType} from "../../../contexts/auth.context"
import { lobbyProps } from "../../newType";
var interval : NodeJS.Timeout;

const LobbyPage = () => {
    const history = useHistory();
    const {authToken} : authContextType = useAuth()
    const [lobbyInfo, setLobbyInfo] = useState<lobbyProps | null>(null)
    const { lobbyID }: { lobbyID: string } = useParams();

    const handleGoHome = () => {
        clearInterval(interval)
        history.push("/")

    }
    const handleReady = async () => {
        await setLobbyReadyInfo()
    }
    const getLobbyInfo = async () => {
        const lobby = await lobbyService.getSpecificLobby(lobbyID)
        if (lobby) {
            setLobbyInfo(lobby)
            if (authToken) {
                const result = lobby.member.some((mem : any) => mem.user.userId === authToken.userId) as boolean
                if(!result) {
                    clearInterval(interval)
                    history.push("/")
                }
            }
        } else {
            clearInterval(interval)
            history.push("/")
        }

    }
    const setLobbyReadyInfo = async () => {
        await lobbyService.setReady(lobbyID)
    }
    const handleGoChatPage = () => {
        clearInterval(interval)
        history.push(`/lobby/${lobbyID}/chat/`)
    }
    const handleKick = async (userID: string) => {
        await lobbyService.kickMember(lobbyID,userID)
    }
    const handleLeave = async () => {
        await lobbyService.leaveLobby(lobbyID)
        clearInterval(interval)
        history.push("/")
    }
    const handleDelete = async () => {
        await lobbyService.deleteLobby(lobbyID)
    }
    const handleCloseLobby = async () => {
        await lobbyService.closeLobby(lobbyID)
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#F55E61"
        interval = setInterval(() => {
            getLobbyInfo()
        },500)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        {lobbyInfo && 
        <div style={{textAlign:"center"}}>
            <Navbar style={{ padding: "2.4% 4%" }} bg="">
                <Nav className="text-center">
                <HomeButton handleGoHome={handleGoHome} />
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
                    }}>{lobbyInfo.dorm.name} {lobbyInfo.room.name}</h1>
                </Nav>
            </Navbar>
            <p>Lobby Code : {lobbyInfo.code}</p>
            <p>Expire Date : {lobbyInfo.expireOn} </p>
            {authToken &&             
            <>
            {(lobbyInfo.owner.userId === authToken.userId) ?
                <>
                    <Row style={{margin:"3% 0%"}} >
                    <Col>
                    <ImageList handleKick={handleKick} isOwner={true} maxMember={lobbyInfo.maxMember} member={lobbyInfo.member} />
                    </Col>
                    </Row>
                    <Row style={{margin:"1% 0%"}}>
                    <Col>
                    <CloseLobby disable={lobbyInfo.member.some((mem : any) => mem.ready === false)} handleCloseLobby={handleCloseLobby} />
                    </Col>
                    </Row>
                    <Row style={{margin:"2% 0%"}} >
                    <Col lg="4"/>
                    <Col lg="2">
                    <DeleteLobby handleDelete={handleDelete} />
                    </Col>
                    <Col lg="2">
                    <ChatRoom handleGoChatPage={handleGoChatPage} />
                    </Col>
                    <Col lg="4"/>
                    </Row>
                </>
                :
                <>
                    <Row style={{margin:"3% 0%"}} >
                    <Col>
                    <ImageList handleKick={handleKick} isOwner={false} maxMember={lobbyInfo.maxMember} member={lobbyInfo.member} />
                    </Col>
                    </Row>
                    <Row style={{margin:"1% 0%"}}>
                    <Col>
                    {lobbyInfo.member.find((mem) => mem.user.userId === authToken.userId)?.ready ? <Ready text="Unready" handleReady={handleReady} /> : <Ready text="Ready" handleReady={handleReady} />}
                    </Col>
                    </Row>
                    <Row style={{margin:"2% 0%"}} >
                    <Col lg="4"/>
                    <Col lg="2">
                    <LeaveLobby handleLeave={handleLeave} />
                    </Col>
                    <Col lg="2">
                    <ChatRoom handleGoChatPage={handleGoChatPage} />
                    </Col>
                    <Col lg="4"/>
                    </Row>
                </>
            }
            </> }

        </div>
        }
        </>
    )
}

export default LobbyPage;
