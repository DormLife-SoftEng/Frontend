/* eslint-disable jsx-a11y/anchor-is-valid */

import DormCarousel from "./DormCarousel"
import DormInfo from "./DormInfo"
import DormNav from "./DormNav"
import FindRoomateBTN from "./FindRoomateBTN"
import {Row, Col} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import { propsDorm } from "./type"
import ReviewList from "./ReviewList";
import dorminfoService from "../../services/dorminfo.service";

function Dorm() {
    const {dormID} : {dormID:string} = useParams()
    const getDormInfo = async () => {
        const dorm = await dorminfoService.getOneDorm(dormID)
        console.log(dorm)
        setDorm(dorm)
    }
    useEffect(()=> {
        document.body.style.backgroundColor = "white";
        console.log(`Fetch DormInfo from database with ${dormID}`)
        getDormInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(dormID)
    const [dorm,setDorm] = useState<propsDorm | null>(null)

    return (
    <div>
        <DormNav title={dorm?.name}/>
        { dorm && (
            <Row className="pt-4 pb-5">
                <Col>
                    <DormCarousel images={dorm.image}/>
                    <ReviewList dorm={dormID} avgStar={dorm.avgStar}/>
                </Col>
                <Col>
                    <DormInfo {...dorm}/>
                    <h5>Find Roomate</h5>
                    <FindRoomateBTN dorm={dorm}/>
                </Col>
            </Row>
        )}
    </div>
    )
}
export default Dorm;