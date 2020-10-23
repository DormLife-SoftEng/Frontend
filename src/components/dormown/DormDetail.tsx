import React from "react";
import Googlemap from "../google/goole";

function DormDetail(props:any) {

  
  return (
    <div >
      <div
        className="overflow-auto"
        style={{ width: "700px", maxHeight: "460px" ,}}
      >
       <br/>
       <Googlemap coordinate={{lat:13.846234, lng:100.568526}}/>
      </div>
    </div>
  );
}

export default DormDetail;
