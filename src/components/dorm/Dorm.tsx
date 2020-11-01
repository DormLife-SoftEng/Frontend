/* eslint-disable jsx-a11y/anchor-is-valid */

import DormCarousel from "./DormCarousel"
import DormInfo from "./DormInfo"
import DormNav from "./DormNav"
import FindRoomateBTN from "./FindRoomateBTN"
import {Row, Col} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import {useParams } from "react-router-dom"
import { propsDorm } from "./type"
import ReviewList from "./ReviewList";
import dorminfoService from "../../services/dorminfo.service";

function Dorm() {
    const {id} : {id:string} = useParams()
    const getDormInfo = async () => {
        const dorm = await dorminfoService.getOneDorm(id)
        console.log(dorm)
        setDorm(dorm)
    }
    useEffect(()=> {
        document.body.style.backgroundColor = "white";
        console.log(`Fetch DormInfo from database with ${id}`)
        getDormInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(id)
    const history = useHistory();

    const test : propsDorm = {
        "_id": "RRRR",
        "name": "บ้านใหญ่พระนคร",
        "code": "R2D2",
        "owner": "",
        "contact": {
            "telephone": "022207200",
            "email": null,
            "lineID": null,
            "website": null
        },
        "location": {
            "address": "1 Bangkok 10000",
            "coordinate": { type: "Point", coordinates: [ 13.749943, 100.491310 ] }
        },
        "utility": [
            {
                "type": "parking",
                "distance": 12.01,
                "description": "ทั้งพระลานมีคุณแค่คันเดียว"
            },
            {
                "type": "washingmachine",
                "distance": null,
                "description": "เครื่องซักผ้าส่วนตัว"
            },
            {
                "type": "7-11",
                "distance": 0.00,
                "description": "ร้านสะดวกซื้อส่วนตัว"
            }
        ],
        "type": "house",
        "description": "บ้านพักตากอากาศย่านพระนคร เพียง 0 ก้าวถึงถนน ที่จอดรถกว้างขวาง จอดตรงไหนก็ได้ที่คุณอยากจอด แถมฟรีพนักงานกันขโมยจากภาษีประชาชน",
        "room": [
            {
                "name": "Grande Ballroom",
                "capacity": 200,
                "image": [
                    "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg"
                ],
                "bathroom": 5,
                "aircond": 5,
                "kitchen": 3,
                "bedroom": 8,
                "description": "โถงงามเหลืองทองอร่อมตา",
                "price": {
                    "amount": 0.00,
                    "pricePer": "month"
                },
                "allowedSex": "female"
            },
            {
                "name": "Pool view",
                "capacity": 20,
                "image": [
                    "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/uf/pi/eykoufpimg/2.jpg"
                ],
                "bathroom": 1,
                "aircond": 1,
                "kitchen": 1,
                "bedroom": 1,
                "description": "วิวสระว่ายน้ำ",
                "price": {
                    "amount": 0.01,
                    "pricePer": "month"
                },
                "allowedSex": "female"
            }
        ],
        "allowedSex": "female",
        "avgStar": 4.20,
        "license": [
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg"
        ],
        "image": [
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/uf/pi/eykoufpimg/2.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/uq/8a/eykouq8a3j/3.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/v1/2q/eykov12q4z/4.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/vq/0r/eykovq0rrm/6.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/zu/gf/eykozugfa4/7.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/08/j5/eykp08j52f/8.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/0h/01/eykp0h01t4/9.jpg",
            "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/3a/6u/eykp3a6u9t/10.jpg"
        ],
        "createdOn": new Date(),
        "modifiedOn": new Date(),
        "approved": "approved",
        "approvedOn": new Date()
    }
    const [dorm,setDorm] = useState<propsDorm>(test)

    return (
    <div>
        <DormNav title={dorm.name}/>
        {
        (dorm.approved == 'approved') && (
            <Row className="pt-4 pb-5">
                <Col>
                    <DormCarousel images={dorm.image}/>
                    <ReviewList dorm={id} avgStar={dorm.avgStar}/>
                </Col>
                <Col>
                    <DormInfo dorm={dorm}/>
                    <h5>Find Roomate</h5>
                    <FindRoomateBTN dorm={dorm}/>
                </Col>
            </Row>
        ) || (
            <h2 className="text-center">This dorminfo is not public.</h2>
        )}
    </div>
    )
}
export default Dorm;