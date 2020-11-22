import React from "react";
import {Container,Row,Col, Card} from "react-bootstrap"
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { dorm } from "../newType";
import { useHistory } from "react-router-dom";
const path  = "http://localhost:5000/api/v1/dorms/images/"

const Dorm = (props : dorm) => {
    const history = useHistory()
    const {name,address,avgStar,room,id,image} = props
    const getroom = () => {
        var res = ""
        var price = room[0].price.amount
        for (let i  = 0 ; i <  room.length ; i++ ) {
           res += room[i].name
           if (room[i].price.amount < price ) {
               price = room[i].price.amount
           }
        }
        return {lowprice : price , roomtype : res}
    }
    const {lowprice,roomtype} = getroom();
    console.log(lowprice)
    
    return (
        <>
        <a style={{color:"black"}} onClick={()=> history.push(`/dorm/${id}`)} >
        <Container fluid style={{display:"inline-block",width:"80%",margin:"2% 0"}} > 
            <Row style={{textAlign:"left",padding:"2%"}} noGutters={true}>
                <Col style={{textAlign:"center"}} lg={5}>
                    <img style={{width:"400px",height:"250px"}} src={`${path}${image[0]}`} />
                </Col>

                <Col lg={7}>
                    <h1>{name}</h1>
                    <p style={{color:'gold'}}>
                    {avgStar >= 1 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {avgStar >= 2 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {avgStar >= 3 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {avgStar >= 4 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {avgStar >= 5 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    </p>
                    <Card  className="des" border="info">
                        <Card.Text >
                            {address.address}
                        </Card.Text>
                        <Card.Text >
                            {roomtype}
                        </Card.Text>                
                    </Card>
                    <h2 style={{color:"#F55E61",textAlign:"right"}} > ฿ {lowprice}  </h2>
                    <p style={{color:"gray",textAlign:"right"}}> Price per month as low as</p>
                </Col>
            </Row>
        </Container>
        </a>
        </>
    )
}
export default Dorm;