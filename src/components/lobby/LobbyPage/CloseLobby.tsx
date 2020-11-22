import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CloseLobbyProps } from "../../type";
import ModalCheckup from "./ModalCheckup";

const CloseLobby = (props : CloseLobbyProps) => {
    const {handleCloseLobby,disable} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        handleCloseLobby()
    }
    return (
        <>
            <Button disabled={disable} size="lg" variant="light" style={{color:"#F55E61"}} onClick={()=> {
                setShow(true)
            }} >Close Lobby</Button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Close"  />
        </>
    )
}

export default CloseLobby;