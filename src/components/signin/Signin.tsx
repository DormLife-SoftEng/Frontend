/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
function Signin() {
  const history = useHistory();
  useEffect(() => {
    // document.body.style.backgroundColor = "#F55E61";
    document.body.style.backgroundColor = "#fff";
  }, []);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div style={{ textAlign: "left" }}>
      <Button onClick={() => history.goBack()} variant="">
        <ArrowBackIosIcon htmlColor="" fontSize="large" />
      </Button>
      <br />
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          name="email"
          placeholder="Enter your Email"
          type="email"
          margin="dense"
          variant="outlined"
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Password</FormLabel>
        <TextField
          name="password"
          placeholder="Enter your password"
          type="email"
          margin="dense"
          variant="outlined"
        />
      </FormControl>
      <br />
      <Button onClick={handleClick}>Sign in</Button>
      <br />
      <a
        onClick={() => {
          history.push("/signin/forgetpassword");
        }}
        style={{textDecoration:"underline"}}
      >
        forget your password?
      </a>
      <br />
      <p>Don't have an accout Why don't you <a onClick={()=> {
          history.push("/signup")
      }} style={{textDecoration:"underline"}}>sign up</a></p>
    </div>
  );
}
export default Signin;
