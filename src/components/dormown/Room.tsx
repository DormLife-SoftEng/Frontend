import React, { useEffect } from "react";
import {addRoomFormValue, RoomMethod} from "./newType"
import { Row  ,Col, Button , Card } from "react-bootstrap"

const path  = "http://localhost:5000/api/v1/dorms/images/"


const Room = (props : addRoomFormValue & RoomMethod) => {

    const {handleEdit,index,handleDelete,name,aircond,capacity,description,bedroom,bathroom,kitchen,price,allowedSex,image} = props

    const room : addRoomFormValue = {
        name,aircond,capacity,description,bedroom,bathroom,kitchen,price,allowedSex,image
    }

    return (
        <>
        <Row style={{width:"80%",margin:"2% 0",borderRadius:"20px",border: "solid 1px #000"}} noGutters={true}>
            <div style={{width:"100%",padding:"2%"}}> 
            <Col lg={12}>
                <Row noGutters={true}>
                <Col lg={3}>
                    <img style={{width:"200px",height:"200px"}} src={`${path}${image[0]}`} />
                    <p>Room Type Name: {name}</p>
                    <p>Room Capacity: {capacity}</p>
                </Col>
                <Col lg={9}>
                    <p>Allowed Sex: {allowedSex}</p>
                    <p>No. of Bathroom : {bathroom}</p>
                    <p>No. of Kitchen : {kitchen}</p>
                    <p>No. of Bedroom : {bedroom}</p>
                    <p>Air Condition : {aircond}</p>
                    <p>Pricing  : {price} ฿/month</p>
                    {description &&                      
                    <Card className="des" border="info">
                        <Card.Text>
                            Description : {description}
                        </Card.Text>
                        
                    </Card>}

                    <p></p>
                </Col>
                </Row>
            </Col>

            <Col lg={12}>
            <Row noGutters={true}>
                <Col>
                </Col>
                <Col style={{textAlign:"right"}}>
                <Button  onClick={() => handleEdit(index)} style={{marginRight:"3%"}} variant="secondary" >Edit</Button>
                <Button onClick={()=>  handleDelete(index)} variant="danger" >Delete</Button>
                </Col>
            </Row>
            </Col>
            </div>
        </Row>
        </>
    )
}
export default Room