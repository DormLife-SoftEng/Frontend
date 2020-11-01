import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import authService from "../../services/auth.service";

const Header = (props: any) => {
  const history = useHistory();
  return (
    <Row
      style={{
        backgroundColor: "#F55E61",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "20px",
      }}
      noGutters={true}
    >
      <Col xs={3} md={2} style={{ textAlign: "center" }}>
        <Button onClick={() => history.push("/admin/editrequest")} variant="">
          <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>
      </Col>
      <Col xs={6} md={8} style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: 600, color: "white" }}>{props.dormName}</h1>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  );
};

export default function () {
  const [approve, setApprove] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [data, setData] = useState<any>(false);
  const location = useLocation();
  const history = useHistory();
  const [dormID] = location.pathname.split("/").splice(-1);
  const getDormData = async () => {
    const result = await authService.adminGetDormData(dormID);
    if (result !== false) {
      setData(result);
    } else {
      history.goBack();
    }
  };
  const setState = () => {
    if (data?.request == "delete") {
      setShowDelete(true);
    }
    if (data?.status == "approved") {
      setApprove(true);
    }
  };
  const getImgPath = (): string =>
    `http://localhost:5000/api/v1/dorms/images/${data?.newdata?.license[0]}`;

  useEffect(() => {
    setState();
  }, [data]);

  getDormData();

  return (
    <>
      <Header dormName={data?.newdata?.name} />
      <Row noGutters={true}>
        <Col xs={1} md={1}></Col>
        <Col xs={11} md={5}>
          <Row>
            <Col style={{ fontWeight: "bold" }} xs={11} md={11}>
              Dorm Edit
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={11} md={11}>
              <Card border="dark" style={{ width: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                      Dorm info
                    </Col>
                    <Col xs={1} md={1}></Col>
                  </Row>
                  <Row>
                    <Col>
                      <br />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                      <Card border="dark" style={{ width: "100%" }}>
                        Hi
                      </Card>
                    </Col>
                    <Col xs={1} md={1}></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={1} md={1}></Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={11} md={11}>
              <div style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    authService.adminChangeDormData(dormID);
                  }}
                  variant="danger"
                >
                  {approve ? "Unapprove" : "Approve"}
                </Button>
                {showDelete ? (
                  <>
                    {"  "}
                    <Button
                      onClick={() => {
                        authService.adminDeleteDormData(dormID);
                        history.push("/admin/editrequest");
                      }}
                      variant="secondary"
                    >
                      Delete
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Col>
        <Col xs={11} md={5}>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={11} md={11}>
              <Card border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={getImgPath()} />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}></Col>
      </Row>
    </>
  );
}
