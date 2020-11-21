import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { LeaveLobbyProps } from "../../type";
import ModalCheckup from "./ModalCheckup";



const LeaveLobby = (props : LeaveLobbyProps) => {
    const {handleLeave} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        handleLeave()
    }
    return (
        <div>
            <Button variant="light" size="lg" style={{color:"#F55E61",border:"3px solid white"}} onClick={()=> {
                setShow(true)
            }}>Leave Lobby</Button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Leave"  />
        </div>
    )
}

export default LeaveLobby;