/* eslint-disable jsx-a11y/anchor-is-valid */

import DormCarousel from "./DormCarousel"
import DormInfo from "./DormInfo"
import DormNav from "./DormNav"
import FindRoomateBTN from "./FindRoomateBTN"
import {Row, Col} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import {useParams } from "react-router-dom"
import { propsDorm } from "../home/type"
import ReviewList from "./ReviewList";

function Dorm() {
    const {id} : {id:string} = useParams()
    useEffect(()=> {
        console.log(`Fetch from database with ${id}`)
        document.body.style.backgroundColor="#fff"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(id)
    const history = useHistory();

    const test : propsDorm[] = [{id:"0",src:"https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg"},{id:"1",src:"https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/uf/pi/eykoufpimg/2.jpg"}]
    const [dorm,setDorm] = useState<propsDorm[]>(test)

    return (
    <div>
        <DormNav title="ROYAL GRAND PALACE (พระบรมหาราชวัง) (วังหลวง)"/>
        <Row className="pt-4">
            <Col>
                <DormCarousel dorms={dorm}/>
                <ReviewList dorms={dorm}/>
            </Col>
            <Col>
                <DormInfo dorms={dorm}/>
                <h5>Find Roomate</h5>
                <FindRoomateBTN dorms={dorm}/>
            </Col>
        </Row>
    </div>
    )
}
export default Dorm;