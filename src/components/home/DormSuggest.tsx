import React from "react";
import SuggestItem from "./SuggestItem";
import { propsSuggestItem } from "./type";
interface DormSuggestProps {
  dorms : any[]
}
function DormSuggest(props : DormSuggestProps) {
  const {dorms} = props
  return (
    <>
      <div style={{ display: "inline-block" }}>
      <div
        className="overflow-auto"
        style={{ textAlign: "center", maxWidth: "800px", maxHeight: "400px" }}
      >
      {dorms.map((item, index) => {
        return <SuggestItem {...item} key={index} />;
      })}
      </div> 
    </div>
    </>
  );
}
export default DormSuggest;
