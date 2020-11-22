import React, { useEffect } from "react";
import { dorm } from "../newType";
import Dorm from "./Dorm";

interface DormListProps {
    dorms : dorm[]
}
const DormList = (props : DormListProps) => {
    const {dorms} = props
    return (
        <>
            {dorms.map((dorm,index) => {
                return <Dorm {...dorm} key={index} />
            })}
        </>
    )
}
export default DormList