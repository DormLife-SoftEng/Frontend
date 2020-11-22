/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Image, Row, Col} from "react-bootstrap";
import {AllImages} from "../pic/pic"
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DormCarousel from "./DormCarousel";

function AReview(props: any) {
  const { review } = props;
  console.log(review)
  return (
    <div className="p-3">
        
      <hr/>
      <Row>
        <Col xs={1}>
        <Image style={{ height: "30px", objectFit: "cover"}} src={AllImages[review.user.PictureProfile]} rounded />
        </Col>
        <Col>
        <h6 style={{marginBottom:'-5px'}}>{review.user.firstName} {review.user.lastName}</h6>
        <p style={{color:'gold'}}>
          {review.star >= 1 ? (<StarIcon fontSize="small"/>) : (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 2 ? (<StarIcon fontSize="small"/>) : (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 3 ? (<StarIcon fontSize="small"/>) : (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 4 ? (<StarIcon fontSize="small"/>) : (<StarBorderOutlinedIcon fontSize="small"/>)}
          {review.star >= 5 ? (<StarIcon fontSize="small"/>) : (<StarBorderOutlinedIcon fontSize="small"/>)}
        </p>
        <p>
          {review.comment}
        </p>
        <p>
          <DormCarousel images={review.image}/>
        </p>
        <p>{review.createdOn.toLocaleString('th-TH')}</p>
        </Col>
      </Row>

    </div>
  );
}
export default AReview;
