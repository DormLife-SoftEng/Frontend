import React  from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalLobbyPageProps } from "../../type";
import "./style.css"

const ModalCheckup = (props : ModalLobbyPageProps) => {
    const {show , action , handleAction , handleCancel} = props
    return (
        <Modal dialogClassName="check" show={show}  style={{textAlign:"center"}} size="lg" centered >
            <Modal.Body>
            <p>Do you want to {action.toLocaleLowerCase()} this lobby ?</p>
            <Button variant="danger" size="lg" style={{margin:"10px 30px"}} onClick={handleAction}>{action}</Button>
            <Button variant="secondary" size="lg" style={{margin:"10px 30px"}} onClick={handleCancel}>Cancel</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalCheckup;
