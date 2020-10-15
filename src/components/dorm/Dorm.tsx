/* eslint-disable jsx-a11y/anchor-is-valid */

import DormCarousel from "./DormCarousel"
import DormInfo from "./DormInfo"
import {Row, Col, Nav, Navbar, Button, Badge} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useParams } from "react-router-dom"
import { propsDorm } from "../home/type"

function Dorm() {
    const {id} : {id:string} = useParams()
    useEffect(()=> {
        console.log(`Fetch from database with ${id}`)
        document.body.style.backgroundColor="#fff"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(id)
    const history = useHistory();

    const test : propsDorm[] = [{id:"0",src:"https://cf.bstatic.com/images/hotel/max1024x768/221/221905924.jpg"},{id:"1",src:"https://udo.oop.cmu.ac.th/network%20dorm/pic_dorm/pnd.jpg"}]
    const [dorm,setDorm] = useState<propsDorm[]>(test)

    return (
    <div>
        <Navbar bg="light">
            <Navbar.Brand href="#">
                <Button onClick={()=> history.goBack()} variant="" ><ArrowBackIosIcon fontSize="large" /></Button>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                    FUCKING DORM
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <Row className="pt-4">
            <Col>
                <DormCarousel dorms={dorm}/>
                REV
            </Col>
            <Col>
                <DormInfo dorms={dorm}/>
                BTN
            </Col>
        </Row>
    </div>
    )
}
export default Dorm;