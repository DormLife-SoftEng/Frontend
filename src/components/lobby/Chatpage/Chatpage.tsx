import React, { useState  , useEffect , useRef} from "react";
import Chatbox from "./Chatbox";
import Header from "./Header"
import {Container,Spinner} from "react-bootstrap";
import "./chat.css"
import Sender from "./Sender";
import Receiver from "./Receiver";
import ChatList from "./ChatList";
import lobbyService from "../../../services/lobby.service";
import { useParams } from "react-router-dom";
import { propsSendMessage } from "../../type";
import {useAuth , authContextType} from "../../../contexts/auth.context"

var interval : NodeJS.Timeout;

const Chatpage = () => {
    const {authToken} : authContextType = useAuth()

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const {lobbyID} : {lobbyID:string} = useParams();
    const [chats,setChats] = useState<any[]>([])

    const getAllChat = async () => {
        const allChat = await lobbyService.getAllMessage(lobbyID)
        setChats(allChat)
        setLoading(false)
        scrollToBottom()
    }
    const scrollToBottom = () => {
        if (null !== messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSubmit = async (message : string) => {
        const form : propsSendMessage = {message : message}
        await lobbyService.sendMessage(lobbyID,form)

    }

    useEffect(() => {
        document.body.style.backgroundColor = "#fff";
        interval = setInterval(() => {
            getAllChat()
        },500)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
    <>
    {authToken && 
    <Container style={{padding:"0"}} fluid>
    {loading && <Spinner className="Absolute-Center" animation="border" variant="danger" />}
    <Header />
    <ChatList>
        {chats.map((chat,index)=> {
            return <div key={index}>
                {chat.user.userId === authToken.userId ? <Sender key={index} author={chat.user.name} userID={chat.user.userId} profilepic={chat.user.PictureProfile} message={chat.message} /> : <Receiver key={index} author={chat.user.name} userID={chat.user.userId} profilepic={chat.user.PictureProfile} message={chat.message} /> }
            </div>
            
        })}
        <div ref={messagesEndRef} />
    </ChatList>
    <Chatbox handleSubmit={handleSubmit} />
    </Container>
    }
    </>
    )
}
export default Chatpage;


