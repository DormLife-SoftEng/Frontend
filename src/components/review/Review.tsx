import React, { useEffect, useState, Component } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Navbar, Nav, Row, Button, Col, Container } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Dropzonef from "./Dropzonef";
import reviewservice from "../../services/review.service";
function ReviewAdd() {
  const [value, setValue] = React.useState<number|null>(0);
  const history = useHistory();
  const { reviewID }: { reviewID: string } = useParams();
  const [ReviewImage, setFiles] = useState<any[]>([]);
  const [reviewtxt, setText] = useState<string>("");
  const [dormId, setDormId] = useState<string>("");
  async function getDormId() {
    // console.log(reviewID)
    const save = await reviewservice.getdormId(reviewID);
    console.log(save);
    setDormId(save);
  }
  useEffect(() => {
    getDormId();
  }, []);
  interface review {
    dorm: string,
    user: string,
    star: number|null,
    comment: string,
    image?: string[],
  }
  function sendReview() {
    const Review: review = {
      dorm: dormId ,
      user: "5f958b20ff5d68001c530cb3",
      comment:reviewtxt,
      star:value,
      image:[]
    };
    const post = reviewservice.postReview(Review);
    //const get =  reviewservice.getReview(reviewID);
    console.log(post)
  }
  return (
    <div>
      <div>
        <Navbar style={{ padding: "1%", backgroundColor: "#F55E61" }}>
          <Nav className="text-right">
            <Button variant="" onClick={() => history.push("/")}>
              <ArrowBackIosIcon htmlColor="white" fontSize="large" />
            </Button>
            <h1
              style={{
                position: "absolute",
                width: "100%",
                textAlign: "center",
                overflow: "visible",
                height: "0",
                left: "0%",
                color: "white",
              }}
            >
              REVIEW
            </h1>
          </Nav>
        </Navbar>
      </div>
      <div style={{ padding: "3% 3%" }}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend" style={{ fontSize: "40px" }}>
            Rating
          </Typography>
          <br />
          <Rating
            name="simple-controlled"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              alert(JSON.stringify(newValue));
            }}
          />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <FormControl
            component="fieldset"
            style={{
              float: "left",
              backgroundColor: "#E7E7E7",
              width: "650px",
              height: "222px",
            }}
          >
            <TextField
              placeholder="Type something..."
              style={{ width: "100%", height: "100%" }}
              multiline
              value={reviewtxt}
              onChange={(event: any) => {
                setText(event.target.value);
              }}
              variant="filled"
              rows={10}
            />
          </FormControl>
        </Box>
        <br />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Dropzonef
            files={ReviewImage}
            setFiles={(files: any) => {
              setFiles(files);
            }}
          />
        </Box>
        <div style={{ padding: "5% 5%", height: "10px" }}>
          <Row>
            <Col lg={1}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#F55E61", color: "white" }}
                onClick={() => {
                  sendReview();
                }}
              >
                SUBMIT
              </Button>
            </Col>
            <Col lg={1}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#989595", color: "white" }}
                onClick={() => history.push("/")}
              >
                CANCEL
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ReviewAdd;
