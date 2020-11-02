import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import adminService from "../../services/admin.service";
import Dorm from "./Room";
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
  const [showDelete, setShowDelete] = useState<boolean>(true);
  const [data, setData] = useState<any>(false);
  const location = useLocation();
  const history = useHistory();
  const [dormID] = location.pathname.split("/").splice(-1);
  const getDormData = async () => {
    const result = await adminService.adminGetDormData(dormID);
    if (result !== false) {
      setData(result);
    } else {
      history.goBack();
    }
  };
  const setState = () => {
    if (data?.status == "approved") {
      setApprove(true);
    }
  };
  const getImgPath = (path: string): string => `http://localhost:5000/api/v1/dorms/images/${path}`;

  useEffect(() => {
    setState();
  }, [data]);
  document.body.style.backgroundColor = "#FFFFFF";
  !data && getDormData();
  const stringToCapital = (text: any) => text?.charAt(0).toUpperCase() + text?.slice(1);
  console.log(data?.newdata);
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
                <Card.Body className="overflow-auto" style={{ height: "60vh" }}>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}>
                      <p>Name: {data?.newdata?.name}</p>
                      <p>Address: {data?.newdata?.address?.address}</p>
                      <p>Dorm Longitude: {data?.newdata?.address?.coordinate[0]}</p>
                      <p>Dorm Latitude: {data?.newdata?.address?.coordinate[1]}</p>
                      <p>Dorm Phone Number: {data?.newdata?.contact?.telephone}</p>
                      <p>Dorm LineID: {data?.newdata?.contact?.lineID}</p>
                      <p>Accommodation Type: {stringToCapital(data?.type)}</p>
                      <p>Allowed Sex: {stringToCapital(data?.newdata?.allowedSex)}</p>
                      <p>
                        Facilities:
                        {data?.newdata?.utility
                          ?.map((item: any, index: number) => {
                            return ` ${stringToCapital(item?.type)} [${item?.distance}m]`;
                          })
                          .join(",")}
                      </p>
                      <p>Room Type:</p>

                      {data?.newdata?.room?.map((item: any, index: number) => {
                        return (
                          <Dorm
                            name={item?.name}
                            aircond={item?.aircond}
                            capacity={item?.capacity}
                            description={item?.description}
                            bedroom={item?.bedroom}
                            bathroom={item?.bathroom}
                            kitchen={item?.kitchen}
                            price={item?.price?.amount}
                            allowedSex={item?.allowedSex}
                            image={item?.image}
                          />
                        );
                      })}
                      <p>Dorm Image: </p>
                    </Col>
                    <Col xs={1} md={1}></Col>
                  </Row>
                  <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10}>
                      <img
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          flex: "1",
                          objectFit: "cover",
                        }}
                        src={`${getImgPath(data?.newdata?.image[0])}`}
                      />
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
                    adminService.adminChangeDormData(dormID);
                    setState();
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
                        adminService.adminDeleteDormData(dormID);
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
          <br />
        </Col>
        <Col xs={11} md={5}>
          <Row>
            <Col xs={1} md={1}></Col>
            <Col xs={11} md={11}>
              <Card border="dark" style={{ width: "100%" }}>
                <Card.Body className="overflow-auto" style={{ height: "70vh" }}>
                  <img
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      flex: "1",
                      objectFit: "cover",
                    }}
                    src={`${getImgPath(data?.newdata?.license[0])}`}
                  />
                </Card.Body>
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