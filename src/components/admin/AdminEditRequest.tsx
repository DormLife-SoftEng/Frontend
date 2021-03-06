import React, { useState , useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import adminService from "../../services/admin.service";

var interval : NodeJS.Timeout;
const Header = (props : any) => {
  const history = useHistory();

  return (
    <Row
      style={{
        backgroundColor: "#F55E61",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "20px",
      }}
    >
      <Col xs={3} md={2} style={{ textAlign: "center" }}>
        <Button onClick={() => props.handleRouting("/admin")} style={{boxShadow: "none"}} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
      <Col xs={6} md={8} style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: 600, color: "white" }}>Edit Request</h1>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  );
};

function DormEditButton(props: any) {
  const history = useHistory();
  const { dormName, dormLink, dormRequest, handleRouting } = props;

  return (
    <Button
      variant="light"
      size="lg"
      block
      style={{
        fontSize: "1.25rem",
        textAlign: "left",
        color: "#F55E61",
        backgroundColor: "white",
        fontWeight: 600,
      }}
      onClick={() => {handleRouting(`/admin/editrequest/${dormLink}`)}}

    >
      <Row>
        <Col style={{ textAlign: "center" }} xs={2} md={2}>
          {dormName}
        </Col>
        <Col xs={8} md={8}></Col>
        <Col style={{ textAlign: "center" }} xs={2} md={2}>
          {dormRequest}
        </Col>
      </Row>
    </Button>
  );
}

export default function () {
  const history = useHistory()
  const [data, setData] = useState<any[]>([]);
  const [chk, setChk] = useState<boolean>(false);
  document.body.style.backgroundColor = "#F55E61";
  useEffect(() => {
    interval = setInterval(() => {
      adminService.adminListGetDormData().then((res) => setData(res));
    },1000)
  },[])
  const handleRouting = (s : string) => {
    clearInterval(interval)
    history.push(s)
  }

  
  console.log(data);
  return (
    <>
      <Header handleRouting={handleRouting}/>
      <Container>
        <Row noGutters={true}>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            {data?.map((item: any, index) => (
              <DormEditButton
                handleRouting={handleRouting}
                dormName={(item.newdata.name || item.target.name)}
                dormLink={item.id}
                dormRequest={item.request}
              />
            ))}
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
