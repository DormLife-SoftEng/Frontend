import React from "react";
import { Button, Row } from "react-bootstrap"
import { propsSuggestItem } from "./type";
function SuggestItem(props: propsSuggestItem) {
    const {name} = props
    return (
        <Row noGutters={true} className="mb-3" style={{width:"100%"}}>
            <Button variant="light" size="lg" block style={{ fontSize:"1.25rem",textAlign: "left",color:"#F55E61" }}>
                {name}
            </Button>
        </Row>
    )
}
export default SuggestItem