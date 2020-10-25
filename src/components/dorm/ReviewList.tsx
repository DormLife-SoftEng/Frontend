/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import AReview from "./AReview";
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { propsReview } from "./type"

function ReviewList(props: any) {
  const { dorm } = props;
  useEffect(()=> {
    console.log(`Fetch from database with ${dorm._id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const intStar:number = Math.round(dorm.avgStar);

  const test : propsReview[] = [{
      "dorm": "RRRR",
      "user": "PPPP",
      "star": 5,
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
  const [reviews,setDorm] = useState<propsReview[]>(test)

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
