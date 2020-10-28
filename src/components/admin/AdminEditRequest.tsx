import React, { useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = () => {
  const history = useHistory();
  return (
    <Row>
      <Col xs={3} md={2} style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>
        <Button onClick={() => history.push("/admin")} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
      <Col xs={6} md={8} style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>
        <h1 style={{ fontWeight: 600, color: "white" }}>Edit Request</h1>
      </Col>
      <Col xs={3} md={2}></Col>
      {/* <Col xs={9} md={10}></Col> */}
    </Row>
  );
};

let mockup: any[] = [
  { name: "Hi", url: "12345" },
  { name: "Hello", url: "98765" },
  { name: "御機嫌よう", url: "13579" },
];

function DormEditButton(props: any) {
  const history = useHistory();
  const { dormName, dormLink } = props;
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
      onClick={() => history.push(`/admin/${dormLink}`)}
    >
      {dormName}
    </Button>
  );
}

export default function () {
  useEffect(() => {
    document.body.style.backgroundColor = "#F55E61";
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row noGutters={true}>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            {mockup.map((item, index) => (
              <DormEditButton dormName={item.name} dormLink={item.url} />
            ))}
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
