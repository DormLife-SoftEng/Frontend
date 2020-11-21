import React from "react";
import { Button } from "react-bootstrap";
import { ChatRoomProps } from "../../type";


const ChatRoom = (props : ChatRoomProps) => {
    const {handleGoChatPage} = props
    return (
        <Button size="lg" style={{backgroundColor:"#F55E61",border:"3px solid white"}} onClick={handleGoChatPage}>Chat Room</Button>
    )
}

export default ChatRoom