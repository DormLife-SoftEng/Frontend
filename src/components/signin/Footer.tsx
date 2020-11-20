/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import logowhite from "../pic/Logo_White.png"

const Footer = () => {
  const history = useHistory();
  return (
    <>
      <Col lg={2} style={{padding: "5px" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "white",
            width: "4px",
            height: "600px",
          }}
        ></div>
      </Col>
      <Col lg={5}>
        <br />
        <br />
        <h1 style={{ fontSize: "3rem" }}>Don't have an account?</h1>
        <h1 style={{ fontSize: "3rem" }}>
          Why don't you &nbsp;
          <a
            onClick={() => {
              history.push("/signup");
            }}
            style={{ fontSize: "3rem", textDecoration: "underline" }}
            role="button"
          >
            sign up
          </a>
          !
        </h1>
        <br />
        <br />
        <br />
        <h1 style={{ padding: "0 120px" }}>
          <img src={logowhite} style={{ width: "300px", height: "300px" }} />
        </h1>
      </Col>
    </>
  );
};

export default Footer;
