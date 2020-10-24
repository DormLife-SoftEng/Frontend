import React from "react";
import Googlemap from "../google/google"
function DormDetail() {
  return (
    <div >
      <div
        className="overflow-auto"
        style={{ width: "700px", maxHeight: "460px" ,}}
      >
       <Googlemap coordinate={{lat:13.8,lng:121}}/>
      </div>
    </div>
  );
}

export default DormDetail;
