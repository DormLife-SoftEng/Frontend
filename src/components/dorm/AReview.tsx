/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Image, Row, Col} from "react-bootstrap";

import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function AReview(props: any) {
  const { review } = props;
  return (
    <div className="p-3">
        
      <hr/>
      <Row>
        <Col xs={1}>
        <Image style={{ height: "30px", objectFit: "cover"}} src={review.user.profilePic} rounded />
        </Col>
        <Col>
        <h6 style={{marginBottom:'-5px'}}>{review.user.name.firstName} {review.user.name.lastName}</h6>
        <p style={{color:'gold'}}>
          {review.star >= 1 && (<StarIcon fontSize="small"/>) || (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 2 && (<StarIcon fontSize="small"/>) || (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 3 && (<StarIcon fontSize="small"/>) || (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 4 && (<StarIcon fontSize="small"/>) || (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 5 && (<StarIcon fontSize="small"/>) || (<StarBorderOutlinedIcon fontSize="small"/>)}
        </p>
        <p>
          {review.comment}
        </p>
        <p>
          {review.image.map((img:string)=>{
            return (
              <Image className="m-1" style={{ height: "100px", width: "100px", objectFit: "cover"}} src={img} rounded />
            )
          })}
        </p>
        <p>{review.createdOn.toLocaleString('th-TH')}</p>
        </Col>
      </Row>

    </div>
  );
}
export default AReview;
