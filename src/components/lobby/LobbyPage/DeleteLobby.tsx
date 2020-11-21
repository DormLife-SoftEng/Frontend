import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DeleteLobbyProps } from "../../type";
import ModalCheckup from "./ModalCheckup";

const DeleteLobby = (props : DeleteLobbyProps) => {
    const {handleDelete} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete Lobby
        handleDelete()
    }
    return (
        <div>
            <Button variant="light" size="lg" style={{color:"#F55E61",border:"3px solid white"}} onClick={()=> {
                setShow(true)
            }}>Delete Lobby</Button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Delete"  />
        </div>
    )
}

export default DeleteLobby;