import React from "react";
import DormInfo from "./DormInfo";
function DormDetail(props:any) {
  const {dorm}=props
  return (
      <div
        className="overflow-auto"
        style={{maxHeight: "70%" }}
      >
       <DormInfo dorm={dorm}/>
      </div>
  );
}
export default DormDetail;
