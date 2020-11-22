/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import AReview from "./AReview";
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { propsReview } from "./type"
import dorminfoService from "../../services/dorminfo.service";

function ReviewList(props: any) {
  const { dorm, avgStar } = props;
  const getDormInfo = async () => {
    const review = await dorminfoService.getDormReviews(dorm)
    console.log('pussy')
    console.log(review)
    setReviews(review)
  }
  useEffect(()=> {
      console.log(`Fetch DormReview from database with ${dorm}`)
      getDormInfo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let intStar:number = Math.round(avgStar);

  const [reviews,setReviews] = useState<propsReview[]>([])

  return (
    <div className="p-3 overflow-auto" style={{maxHeight: "300px"}}>
      <h4>Average Ratings: {intStar}/5</h4>
      <p style={{color:'gold'}}>
        {intStar >= 1 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
        {intStar >= 2 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
        {intStar >= 3 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
        {intStar >= 4 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
        {intStar >= 5 && (<StarIcon/>) || (<StarBorderOutlinedIcon/>)}
      </p>
      {reviews.map(rev=>{
        return (<AReview review={rev}/>)
      })}
    </div>
  );
}
export default ReviewList;
