import React, { useEffect, useState, Component } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Navbar, Nav, Row, Button, Col, Container } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Dropzonef from "../dormown/Dropzonef";
import reviewservice from "../../services/review.service";
import { dialogProps } from "../type";
import Signuppop from "../signup/Signupop";
import dormownerService from "../../services/dormowner.service";

function ReviewAdd() {
  const [value, setValue] = React.useState<number|null>(0);
  const history = useHistory();
  const { reviewID }: { reviewID: string } = useParams();
  const [ReviewImage, setFiles] = useState<string[]>([]);
  const [ReviewImage2,setIm] =useState<string[]>([]) 
  const [reviewtxt, setText] = useState<string>("");
  const [dormId, setDormId] = useState<any>("");
  const [show,setShow] = useState<boolean>(false);
  const [sing,setsing] = useState<boolean>(true);
  const initialState : dialogProps = {
    title : "",
    content : "",
  }
  const [uploadImageResult,setUploadImageResult] = useState<boolean>(false)
  const [popup,setPopup] = useState<dialogProps>(initialState)
  const uploadRoomImage = async () => {
    const result = await dormownerService.uploadImageMany(ReviewImage)
    const path = result.data.image as [string]
    setIm(path)
    setUploadImageResult(true)
    setTimeout(() => {
        setUploadImageResult(false)
    },800)
}
  async function getDormId() {
    // console.log(reviewID)
    const save = await reviewservice.getdormId(reviewID);
    console.log(save);
    setDormId(save);
  }
  async function getLastReview(dormid:any) {
    const last_review = await reviewservice.getReview(reviewID);
    console.log(last_review)
    if(last_review.length!=0){
    setsing(false);
    setText(last_review[0].comment);
    setIm(last_review[0].image);
    }
  }
  useEffect(() => {
<<<<<<< Updated upstream
    getDormId();
=======
    reviewservice.getdormId(reviewID).then((save)=>{setDormId(save);getLastReview(save.id)});
    //getLastReview(dormId);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> Stashed changes
  }, []);
  interface review {
    dorm: any,
    star: number|null,
    comment: string,
    image?: string[],
  }
  function sendReview() {
    const Review: review = {
      dorm: {'dormId':dormId.id,'code':reviewID} ,
      comment:reviewtxt,
      star:value,
      image:ReviewImage2
    };
    if(sing==true){
    const post = reviewservice.postReview(Review);
    console.log(post)
    console.log(Review)
    }
    else{
    const post = reviewservice.patchReview(reviewID,Review);
    console.log(post)
    console.log(Review)
    }
    //const get =  reviewservice.getReview();

    setPopup({
      title : "Review Sent",
      content :""
    })
    setShow(true)
    setTimeout(() => {
      setShow(false)
    },800)
  }
  async function deleteReview(){
    const last_review2 = await reviewservice.getReview(reviewID);
    console.log(last_review2[0]);
    reviewservice.deleteReview(last_review2[0].id);
    
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
              //alert(JSON.stringify(newValue));
            }}
          />
        </Box>
        <Typography component="legend" style={{ fontSize: "40px" }}>
            Description
          </Typography>
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
              defaultValue={reviewtxt}
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
        <Typography component="legend" style={{ fontSize: "40px" }}>
            Image
          </Typography>
          <Dropzonef
            id="reviewImage"
            setFiles={setFiles}
          />
          <Button variant="danger" onClick={uploadRoomImage}>Upload Image</Button>
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
            <Col lg={1}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#989595", color: "white" }}
                onClick={() => deleteReview()}
              >
                DELETE
              </Button>
            </Col>
          </Row>
          <Signuppop  open={show} title={popup.title} content={popup.content} />
        </div>
      </div>
      
    </div>
    
    
  );
}

export default ReviewAdd;
