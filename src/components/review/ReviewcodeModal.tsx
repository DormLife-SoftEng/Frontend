/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Image, Row, Col, Modal, Button } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

function ReviewcodeModal() {
    const [ code, codeChange ] = useState<string>("");
    const [show, setShow] = useState(false);
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function reviewSS(){
        console.log(code)
        history.push("/review");
    }
    return (
        <>
            <Button
                onClick={handleShow}
                size="lg"
                variant="light"
                block
                style={{ fontWeight: "bold" }}
            >
                Review
            </Button>
            <Modal centered={true} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ border: "none", backgroundColor: "#F55E61" }} />
                <Modal.Body style={{ backgroundColor: "#F55E61", textAlign: "center" }}>
                    <h1 style={{ color: "white", textAlign: "center" }}>
                        Enter Review Code
                    </h1>
                    <h5 style={{ fontWeight: "normal", color: "white", textAlign: "center" }}>
                        **Please contact Dorm Owner for the review code**
                    </h5>
                    <FormControl>
                        <TextField
                            placeholder="Enter Review Code"
                            margin="dense"
                            variant="outlined"
                            value={code}
                            onChange={(event:any)=>{codeChange(event.target.value)}}
                            style={{ backgroundColor: "white", width: "300px" }}
                        />
                    </FormControl>
                    <br /><br />
                    <Button onClick={()=> {
                        reviewSS()
                    }} style={{ fontSize: "2rem", color: "#F55E61" }} variant="light" type="submit" >REVIEW NOW</Button>
                </Modal.Body>
                <Modal.Footer style={{ border: "none", backgroundColor: "#F55E61" }}>
                    <br />
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ReviewcodeModal;
