import React from "react";
import Googlemap from "../google/goole";
function DormDetail() {
  return (
    <div >
      <div
        className="overflow-auto"
        style={{ width: "700px", maxHeight: "460px" ,}}
      >
       <Googlemap coordinate={{lat:123,lng:121}}/>
      </div>
    </div>
  );
}

export default DormDetail;
