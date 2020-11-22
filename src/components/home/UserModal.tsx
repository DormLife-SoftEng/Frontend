import React , {useState} from "react";
import { Modal, Button ,Row , Col } from "react-bootstrap";
import {AllImages} from "../pic/pic"
import { user } from "../newType";
import EditProfile from "./EditProfile";

interface UserModalProps {
    show : boolean,
    handleClose : () => void,
    user : user
}



function UserModal(props : UserModalProps) {

  const {show,handleClose,user} = props 
  const [edit,setEdit] = useState<boolean>(false)
  return (
    <Modal animation={false} onHide={()=> {
      handleClose()
      setEdit(false)
    }} dialogClassName="info-modal" centered size="lg" show={show} >
      <Modal.Body>
        {edit ? <EditProfile userType="owner" /> 
        :  
        <>
        <Row className="Row" noGutters={true}>
            <Col lg={5} >
                { user.userType === "owner" && <img src={AllImages[user.PictureProfile + 6]} alt="" style={{width:"250px" , height:"250px"}} />  }
                { user.userType === "general" && <img src={AllImages[user.PictureProfile]} alt="" style={{width:"250px" , height:"250px"}} /> }
            </Col>
            <Col style={{margin:"5% 0"}} >
                <h4>Name : {user.name.firstName} </h4>
                <h4>LastName : {user.name.lastName} </h4>
                <h4>Sex : {user.sex}</h4>
                <h4>Email : {user.email}</h4>
                <h4>Phone number : {user.telephone}</h4>
            </Col>
        </Row>
        <Row className="Row" noGutters={true}>
            <Col>
            </Col>
            <Col style={{textAlign:"right"}}>
                {/* <Button variant="secondary" onClick={() => setEdit(true)} className="mr-2">Edit Profile</Button> */}
                <Button onClick={handleClose} variant="danger">Close</Button>
            </Col>
        </Row> 
        </>
        }

      </Modal.Body>

    </Modal>
  );
}
export default UserModal;