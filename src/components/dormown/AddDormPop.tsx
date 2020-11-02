import React from 'react';
import { Modal } from "react-bootstrap";
interface dialogProps {
    open : boolean,
    title : string,
    content : string
}


const AddDormPop = (props : dialogProps) => {
    const {open , title , content} = props
    return (
        <Modal  dialogClassName="result" centered size="sm" show={open} >
            <Modal.Body>
                <h1 style={{padding : "10%"}}>{title}</h1>
                    {content !== "" && <h3>{content}</h3>}
            </Modal.Body>
      
        </Modal>
    )
}

export default AddDormPop;