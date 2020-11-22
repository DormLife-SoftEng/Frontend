/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import DormCarousel from "../dorm/DormCarousel";
import RoomModal from "../dorm/RoomModal";
import Googlemap from "../google/google";
import {propsDorm, Utilities,} from "./type2";


interface DormDetailProps {
  dorm : propsDorm
}

function DormInfo(props: DormDetailProps) {
  const { dorm } = props;
  let allowedPet: boolean = false;
  let allowedCooking: boolean = false;
  useEffect(() => {
    console.log(props.dorm.image)
  },[])
  return (
      <div style={{textTransform: 'capitalize',padding:"0% 2%",width:"100%"}}>
      <h1 style={{textAlign:"center"}}>{dorm.name}</h1>
      <DormCarousel images={dorm.image}/>
      <p>Type: {dorm.type}</p>
      <p>Allowed Sex: {dorm.allowedSex}</p>
      <p>Address: {dorm.address.address}</p>
      <p>Phone Number: {dorm.contact.telephone}</p>
      {
      dorm.contact.website != null &&
        (<p>Website: {dorm.contact.website}</p>)
      }
      <p>Map: 
        <Googlemap coordinate={{lat:dorm.address.coordinate[0],lng:dorm.address.coordinate[1]}} containerStyle={{width: '193px', height: '193px'}} zoom={13}/>
      </p>
      <p>Facilities: {
        dorm.utility.map((util: Utilities, index: number)=>{
          if(util.type == 'Cooking'){
            allowedCooking = true;
            return;
          }
          if(util.type == 'Pet'){
            allowedPet = true;
            return;
          }
          return (
            <span>
              {index != 0 && (<span>{', '}</span>)}
              {util.type}
              {util.distance != null && util.distance > 0 && (
                <span>
                  {' '}({util.distance}km)
                </span>
              )}
              {util.description != null && (
                <span>
                  {' '}({util.description})
                </span>
              )}
            </span>
          )
        })
      }</p>
      <p>Allowed Pet: {allowedPet?'Yes':'No'}</p>
      <p>Allowed Cooking: {allowedCooking?'Yes':'No'}</p>
      <p>Room Type: {
        dorm.room.map((rt,index)=>{
          return (
            <>
            {index != 0 && (<span>{', '}</span>)}
            <RoomModal room={rt}/>
            </>
          )
        })
      }</p>
    </div>
  );
}
export default DormInfo;
