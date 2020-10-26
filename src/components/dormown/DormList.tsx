import React from "react";
import SuggestItem from "./SuggestItem";
import { propsSuggestItem } from "./type";

function DormList(props: any) {
  const suggestLists: propsSuggestItem[] = [
    {
      id: "999999",
      name: "บ้านใหญ่พระนคร",
    },
    {
      id: "12534",
      name: "บ้านเล็กเยอรมัน",
    },
  ];
  return (
    <div
      className="overflow-auto"
      style={{ textAlign: "center", maxHeight: "80%" }}
    >
      {suggestLists.map(
        (item: any, index) =>
          item["name"].includes(props.search) && (
            <SuggestItem {...item} key={index} />
          )
      )}
    </div>
  );
}

export default DormList;
