import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "./Navbar";
import adminService from "../../services/admin.service";
import "./styles.css";

function DormViewButton(props: any) {
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
      onClick={() => history.push(`/admin/view/${dormLink}`)}
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
        className="shadow-dormlife-red"
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
  document.body.style.backgroundColor = "white";
  const [query, setQuery] = useState<string>("");
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  !data.length && adminService.adminListGetAllDorm().then((res) => setData(res));
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
            {data.map((item, index) =>
              item?.name.includes(query) ? (
                <DormViewButton dormName={item.name} dormLink={item.id} />
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
