/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DormList from './DormList';
import DormDetail from './DormDetail';
import SearchMDorm from './SearchMDorm';
import { propsDorm } from "./type2";
function DormHome() {
    const history = useHistory();
    useEffect(() => {
        document.body.style.backgroundColor = "#F55E61"
    }, [])
    const test: propsDorm[] = [{
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },
    {
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    },{
        "_id": "RR",
        "name": "บ้านใหญ่มมม",
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
            "coordinate": { type: "Point", coordinates: [13.749943, 100.491310] }
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
    }]
    const [dorms, setDorms] = useState<propsDorm[]>(test)
    const [searchname, SetSearch] = useState<string>("")
    const [dorm, SetDorm] = useState<number>(0)
    return (
        <div>
            <Navbar style={{ padding: "1% 4%" }} bg="">
                <Nav className="text-center">
                    <Button variant="" onClick={() => history.goBack()}>
                        <ArrowBackIosIcon htmlColor="white" fontSize="large" />
                    </Button>
                    <h1 style={{
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                        overflow: "visible",
                        height: "0",
                        left: "0%",
                        color: "white",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "2.5rem",
                    }}>My Dorm</h1>
                </Nav>
            </Navbar>
            <div style={{ padding: "1% 4%"}}>
                <Row noGutters={true}>
                    <Col xs={1}></Col>
                    <Col xs={5}>
                        <Row noGutters={true} className="mb-3">
                            <SearchMDorm search={SetSearch} />
                        </Row>
                        <DormList search={searchname} dorms={dorms} setdorm={SetDorm} />
                        <Row noGutters={true}>
                            <div
                                style={{
                                    textAlign: "left",
                                    display: "inline-block",
                                    width: "100%",
                                    padding: "2% 0% "
                                }}
                            >
                                <Button variant="light" size="lg" block style={{ fontSize: "1.5rem", color: "red", width: "150px" }} onClick={() => history.push("/dormowner/adddorm/")}>
                                    Add Dorm
                                </Button>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={6} >
                        <Col style={{ background: "white", margin: "0% 2%" }}>
                            <Row noGutters={true}>
                            <DormDetail dorm={dorms[dorm]} />
                            </Row>
                            <Row  noGutters={true} style={{ width: "100%",padding:"1% 0%"}}>
                                <Col xs={6} style={{ textAlign: "center" }}>
                                    <Button variant="danger" style={{ color: "white" }}>
                                        Generate Review Code
                            </Button>
                                </Col>
                                <Col style={{ textAlign: "center" }} xs={6}>
                                    <Button variant="warning" style={{ color: "white" }} onClick={() => history.push(`/dormowner/contactsupport`)}>
                                        Contact Support
                            </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
export default DormHome;