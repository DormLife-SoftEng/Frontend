import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "./Navbar";
let mockup: any[] = [
  {
    id: "5f9d55417b1604001e8b1d53",
    request: "add",
    type: "dorm",
    newdata: {
      name: "asd",
      code: "ebvti",
      owner: "5f9d30f598fba20028c95cfe",
      contact: {
        telephone: "0987654222",
        email: "peerawich.pru@ku.th",
        lineID: "asdasd",
        website: "google.com",
      },
      address: {
        address: "asd",
        coordinate: [1, 1],
      },
      utility: [],
      type: "dorm",
      description: "1",
      room: [
        {
          image: ["dorm_owner_3-5fda.jpg"],
          _id: "5f9d55417b1604001e8b1d52",
          name: "1",
          capacity: 1,
          bathroom: 1,
          aircond: 1,
          kitchen: 1,
          bedroom: 1,
          description: "1",
          price: {
            amount: 1,
            pricePer: 1,
          },
          allowedSex: "male",
        },
      ],
      allowedSex: "male",
      avgStar: 0,
      image: ["finder_gold_2p-92e1.jpg"],
      license: ["dorm_owner_2-8497.jpg"],
      createdOn: 1604146497865,
      modifiedOn: 1604146497865,
      approved: "pending",
      approvedOn: null,
    },
    createdOn: "2020-10-31T12:14:57.865Z",
    createdBy: "5f9d30f598fba20028c95cfe",
    status: "pending",
  },
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
              item.newdata.name.includes(query) ? (
                <DormEditButton dormName={item.newdata.name} dormLink={item.id} />
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
