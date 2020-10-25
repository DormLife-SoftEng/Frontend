import React , {useState} from "react";
import { Modal, Button ,Row , Col } from "react-bootstrap";
import dog from "../pic/finder_silver_2.jpg"
import EditProfile from "./EditProfile";
import "./style.css"

interface UserModalProps {
    show : boolean,
    handleClose : () => void,
}



function UserModal(props : UserModalProps) {
  const {show,handleClose} = props 
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
                <img src={dog} style={{width:"250px" , height:"250px"}} />
            </Col>
            <Col style={{margin:"5% 0"}} >
                <h4>Name : Test </h4>
                <h4>LastName : Test</h4>
                <h4>Sex : Male</h4>
                <h4>Email : Test@Test.com</h4>
                <h4>Phone number : 0111111111</h4>
            </Col>
        </Row>
        <Row className="Row" noGutters={true}>
            <Col>
            </Col>
            <Col style={{textAlign:"right"}}>
                <Button variant="secondary" onClick={() => setEdit(true)} className="mr-2">Edit Profile</Button>
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