/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DormList from "./DormList";
import DormDetail from "./DormDetail";
import SearchMDorm from "./SearchMDorm";
import { propsDorm } from "./type2";
import ReviewCodeModal from "./ReviewCodeModal";
import dormownerService from "../../services/dormowner.service";
function MyDorm() {
  const history = useHistory();
  const [dorms, setDorms] = useState<propsDorm[]>([]);
  const [dorm, SetDorm] = useState<number>(0);

  useEffect(() => {
    document.body.style.backgroundColor = "#F55E61";
    GetDorms();
  }, []);

  async function GetDorms() {
    const result = (await dormownerService.getMydorm()) as propsDorm[];
    console.log(result);
    setDorms(result);
  }

  const [searchname, SetSearch] = useState<string>("");

  return (
    <div>
      <Navbar style={{ padding: "1% 4%" }} bg="">
        <Nav className="text-center">
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
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "2.5rem",
            }}
          >
            My Dorm
          </h1>
        </Nav>
      </Navbar>
      <div style={{ padding: "1% 4%" }}>
        <Row noGutters={true}>
          <Col xs={1}></Col>
          <Col xs={5}>
            <Row noGutters={true} className="mb-3">
              <SearchMDorm search={SetSearch} />
            </Row>
            <DormList search={searchname} dorms={dorms} setdorm={SetDorm} />
            <Row noGutters={true}>
              <div
                style={{
                  textAlign: "left",
                  display: "inline-block",
                  width: "100%",
                  padding: "2% 0% ",
                }}
              >
                <Button
                  variant="light"
                  size="lg"
                  block
                  style={{ fontSize: "1.5rem", color: "#F55E61", width: "150px" }}
                  onClick={() => history.push("/dormowner/adddorm/")}
                >
                  Add Dorm
                </Button>
              </div>
            </Row>
          </Col>
          <Col xs={6}>
            {dorms.length >= 1 && (
              <Col style={{ background: "white", margin: "0% 2%" }}>
                <Row noGutters={true}>
                  <Col xs={12}>
                    <DormDetail dorm={dorms[dorm]} />
                  </Col>
                </Row>
                <Row noGutters={true} style={{ width: "100%", padding: "1% 0%" }}>
                  <Col xs={6} style={{ textAlign: "center" }}>
                    <ReviewCodeModal dorm={dorms[dorm]} />
                  </Col>
                  <Col style={{ textAlign: "center" }} xs={6}>
                    <Button
                      variant="warning"
                      style={{ color: "white" }}
                      onClick={() => history.push(`/dormowner/contactsupport/${dorms[dorm].id}`)}
                    >
                      Contact Support
                    </Button>
                  </Col>
                </Row>
              </Col>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default MyDorm;
