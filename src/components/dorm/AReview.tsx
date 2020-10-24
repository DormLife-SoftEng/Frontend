/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Image, Row, Col} from "react-bootstrap";

import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function AReview(props: any) {
  const { dorms } = props;
  return (
    <div className="p-3">
        
      <hr/>
      <Row>
        <Col xs={1}>
        <Image style={{ height: "30px", objectFit: "cover"}} src="https://cdn-images-1.medium.com/fit/c/200/200/0*rXb4oZGJO__0Eijv." rounded />
        </Col>
        <Col>
        <h6 style={{marginBottom:'-5px'}}>P***** L*****</h6>
        <p style={{color:'gold'}}>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarIcon fontSize="small"/>
          <StarBorderOutlinedIcon fontSize="small"/>
          <StarBorderOutlinedIcon fontSize="small"/>
        </p>
        <p>
          ห้องน้ำสะอาด สว่าง สงบ
        </p>
        <p>
          <Image style={{ height: "100px", width: "100px", objectFit: "cover"}} src="https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg" rounded />
        </p>
        <p>29/09/2020 11:12</p>
        </Col>
      </Row>

    </div>
  );
}
export default AReview;
