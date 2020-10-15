import React from "react";
import { Button, Row } from "react-bootstrap"
import { propsSuggestItem } from "./type";
function SuggestItem(props: propsSuggestItem) {
    const {name} = props
    return (
        <Row noGutters={true} className="mb-3" style={{width:"600px"}}>
            <Button variant="light" size="lg" block style={{ textAlign: "left",color:"#F55E61" }}>
                {name}
            </Button>
        </Row>
    )
}
export default SuggestItem