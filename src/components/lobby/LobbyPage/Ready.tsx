import { red } from "@material-ui/core/colors";
import React  from "react";
import { Button } from "react-bootstrap";
import { ReadyProps } from "../../type";

const Ready = (props : ReadyProps) => {
    const {handleReady,text} = props
    return (
        <>
        {text === "Ready"  ? <Button style={{padding:"0.5% 1%",border:"3px solid green"}} variant="success" size="lg" onClick={handleReady}>{text}</Button> : <Button size="lg" variant="light" style={{color:"red",border:"3px solid"}} onClick={handleReady}>{text}</Button>}
        </>
    )
}

export default Ready;