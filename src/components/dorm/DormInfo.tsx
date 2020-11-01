/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Googlemap from "../google/google";
import RoomModal from "./RoomModal";
import {dormRoom, Utilities} from './type';

function DormInfo(props: any) {
  const { dorm } = props;
  let allowedPet: boolean = false;
  let allowedCooking: boolean = false;
  return (
    <div style={{textTransform: 'capitalize'}}>
      <p>Type: {dorm.type}</p>
      <p>Allowed Sex: {dorm.allowedSex}</p>
      <p>Address: {dorm.location.address}</p>
      <p>Phone Number: {dorm.contact.telephone}</p>
      {
      dorm.contact.website != null &&
        (<p>Website: {dorm.contact.website}</p>)
      }
      <p>Map: 
        <Googlemap coordinate={{lat:dorm.location.coordinate.coordinates[0],lng:dorm.location.coordinate.coordinates[1]}} containerStyle={{width: '193px', height: '193px'}} zoom={13}/>
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
                  {' '}({util.distance}m)
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
        dorm.room.map((rt: dormRoom, index: number)=>{
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
