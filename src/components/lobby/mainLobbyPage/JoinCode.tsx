import React, { useState }  from "react";
import { JoinCodeProps } from "../../type";
import JoinCodeModal from "./JoinCodeModal";
import { Button} from "react-bootstrap";


const JoinCode =  (props : JoinCodeProps) => {
    const {handleRouting} = props
    const [show,setShow] = useState<boolean>(false)
    const handleClose = () => {
        setShow(false)
    }
    return (
        <div style={{paddingLeft:"50%"}}>
            <Button variant="" style={{backgroundColor:"white",color:"#F55E61"}} onClick={()=> {
                setShow(true)
            }}>Join By Code</Button>
            <JoinCodeModal show={show} handleRouting={handleRouting}  handleClose={handleClose}  />
        </div>
    )
}
export default JoinCode