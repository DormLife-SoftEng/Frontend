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
    const reviews = await dorminfoService.getDormReviews(dorm)
    console.log(reviews)
    setReviews(reviews)
  }
  useEffect(()=> {
      console.log(`Fetch DormReview from database with ${dorm}`)
      getDormInfo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let intStar:number = Math.round(avgStar);

  const test : propsReview[] = [{
      "dorm": "RRRR",
      "user": {
        "userId": "AAA",
        "name": {
          "firstName": "Rama",
          "lastName": "Mara"
        },
        "profilePic": "https://cdn-images-1.medium.com/fit/c/200/200/0*rXb4oZGJO__0Eijv."
      },
      "star": 4,
      "comment": "มมม มะ.. ไม่ได้ดั่งใจเลย ต้องกระชับ",
      "image": [
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg",
          "https://cdn.royalgrandpalace.th/stocks/gallery/o0x0/tn/d0/eykotnd0o0/1.jpg"
      ],
      "createdOn": new Date()
    }
  ]
  const [reviews,setReviews] = useState<propsReview[]>(test)

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
