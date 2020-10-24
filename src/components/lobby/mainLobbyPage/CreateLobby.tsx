import React  from "react";
import {CreateLobbyProps }  from "../../type"
import { Button} from "react-bootstrap";
const CreateLobby =  (props : CreateLobbyProps) => {
    const {handleRouting} = props
    return (
        <div style={{paddingRight:"50%"}}>
            <Button variant="outline-light" style={{backgroundColor:"#F55E61",color:"white"}} onClick={()=> {
                handleRouting("/lobby/create")
            }}>Create Lobby</Button>
        </div>
    )
}
export default CreateLobby