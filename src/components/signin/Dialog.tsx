import React from 'react';
import { Modal } from "react-bootstrap";
interface dialogProps {
    open : boolean,
    title : string,
    content : string
}

const Signinpop = (props : dialogProps) => {
    const {open , title , content} = props
    return (
        <Modal animation={false} dialogClassName="alert-signin" centered size="sm" show={open} >
            <Modal.Body>
                <h1>{title}</h1>
                    {content !== "" && <h3>{content}</h3>}
            </Modal.Body>
      
          </Modal>
    )
    
}

export default Signinpop;