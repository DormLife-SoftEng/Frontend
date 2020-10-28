import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "./Navbar";
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
        color: "white",
        backgroundColor: "#F55E61",
        fontWeight: 600,
      }}
      onClick={() => history.push(`/admin/${dormLink}`)}
    >
      {dormName}
    </Button>
  );
}

function SearchBar(props: any) {
  let { query, setQuery, style } = props;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
  }

  return (
    <div style={{ width: "100%" }}>
      <FormControl
        name="input"
        onChange={handleChange}
        value={query}
        placeholder="Search"
        style={style}
      />
    </div>
  );
}

export default function () {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  const [query, setQuery] = useState<string>("");
  const history = useHistory();
  return (
    <>
      <Container>
        <Navbar />
        <Row noGutters={true}>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <Button
              variant="light"
              size="lg"
              block
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
                color: "black",
                backgroundColor: "white",
                fontWeight: 600,
              }}
              onClick={() => history.push(`/admin/editrequest`)}
            >
              Edit Request
            </Button>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <SearchBar
              query={query}
              setQuery={setQuery}
              style={{ marginTop: "30px", marginBottom: "30px", backgroundColor: "#E7E7E7" }}
            />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row noGutters={true}>
          <Col xs={0} md={1}></Col>
          <Col xs={12} md={10}>
            {mockup.map((item, index) =>
              item.name.includes(query) ? (
                <DormEditButton dormName={item.name} dormLink={item.url} />
              ) : (
                <></>
              )
            )}
          </Col>
          <Col xs={0} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
