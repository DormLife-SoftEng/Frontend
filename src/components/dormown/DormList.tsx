import React from "react";
import SuggestItem from "./SuggestItem";
import { propsDorm } from "./type2";

interface Props {
  dorms : propsDorm[],
  setdorm : React.Dispatch<React.SetStateAction<number>>,
  search : any
}

function DormList(props: Props) {
  const {dorms,setdorm}=props
  return (
    <div
      className="overflow-auto"
      style={{ textAlign: "center", maxHeight: "480px" }}
    >
      {dorms.map(
        (item ,  index) =>
          item["name"].includes(props.search) && (
            <SuggestItem index={index} dorm={item} key={index} setdorm={setdorm}/>
          )
      )}
    </div>
  );
}

export default DormList;
