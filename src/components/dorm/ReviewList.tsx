/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import AReview from "./AReview";

import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function ReviewList(props: any) {
  const { dorms } = props;
  return (
    <div className="p-3 overflow-auto" style={{maxHeight: "300px"}}>
      <h4>Average Ratings: 3/5</h4>
      <p style={{color:'gold'}}>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarBorderOutlinedIcon/>
        <StarBorderOutlinedIcon/>
      </p>
      <AReview dorms={dorms}/>
      <AReview dorms={dorms}/>
      <AReview dorms={dorms}/>
      <AReview dorms={dorms}/>
    </div>
  );
}
export default ReviewList;
