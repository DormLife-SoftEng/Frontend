import React from "react";
import {Container,Row,Col, Card} from "react-bootstrap"
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
const path  = "http://localhost:5000/api/v1/dorms/images/"

const Dorm = () => {
    const intStar = 3
    return (
        <>
        <a style={{color:"black"}} href="#">
        <Container fluid style={{display:"inline-block",width:"80%",margin:"2% 0"}} > 
            <Row style={{textAlign:"left",padding:"2%"}} noGutters={true}>
                <Col style={{textAlign:"center"}} lg={5}>
                    <img style={{width:"400px",height:"250px"}} src="https://www.livinginsider.com/upload/topic228/DSv90584_67503.jpeg" />
                </Col>

                <Col lg={7}>
                    <h1>hee</h1>
                    <p style={{color:'gold'}}>
                    {intStar >= 1 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {intStar >= 2 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {intStar >= 3 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {intStar >= 4 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    {intStar >= 5 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
                    </p>
                    <Card  className="des" border="info">
                        <Card.Text >
                            <h5> Address: Hee Hee Hee / Hee Hee Hee / Hee Hee Hee / </h5>
                        </Card.Text>
                        <Card.Text >
                            <h5> Room Type: Hee Hee Hee / Hee Hee Hee / Hee Hee Hee / </h5>
                        </Card.Text>                
                    </Card>
                    <h2 style={{color:"#F55E61",textAlign:"right"}} > ฿ 11111 </h2>
                    <p style={{color:"gray",textAlign:"right"}}> Price per month as low as</p>
                </Col>
            </Row>
        </Container>
        </a>
        </>
    )
}
export default Dorm;