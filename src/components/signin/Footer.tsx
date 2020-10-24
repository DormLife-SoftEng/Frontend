import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <>
      <a
        onClick={() => {
          history.push("/signin/forgetpassword");
        }}
        style={{ textDecoration: "underline" }}
      >
        forget your password?
      </a>
      <p>
        Don't have an accout Why don't you{" "}
        <a
          onClick={() => {
            history.push("/signup");
          }}
          style={{ textDecoration: "underline" }}
        >
          sign up
        </a>
      </p>
    </>
  )
}

export default Footer;
