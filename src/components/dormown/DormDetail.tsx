import React from "react";
import { Row } from "react-bootstrap";
import DormInfo from "./DormInfo";
import { propsDorm } from "./type2";

interface DormDetailProps {
  dorm : propsDorm
}

function DormDetail(props: DormDetailProps) {
  const {dorm}=props
  return (
      <div
        className="overflow-auto"
        style={{maxHeight: "550px",width:"100%" }}
      >
       <DormInfo dorm={dorm}/>
      </div>
  );
}
export default DormDetail;
