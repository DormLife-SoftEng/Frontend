/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import authService from "../../services/auth.service";
import { dialogProps, LoginForm } from "../type";
import Signinpop from "./Dialog";
import Footer from "./Footer";
import Header from "./Header";
import SigninFormik from './Signinformik'
import {useAuth , authContextType} from "../../contexts/auth.context"
import { Button , Row ,Col } from "react-bootstrap";

const Signin = () => {

  const {setAuthToken} : authContextType = useAuth()


  const [show,setShow] = useState<boolean>(false)

  const initialState : dialogProps = {
    title : "",
    content : "",
  }

  const [popup,setPopup] = useState<dialogProps>(initialState)

  const handleSubmit = async (form : LoginForm)   => {
    const result = await authService.Login(form)
    if (result.isAuthError) {
      setPopup({
        title : "Login Failed",
        content : "Invalid email or password"
      })
      setShow(true)
      setTimeout(() => {
        setShow(false)
      },800)
      return result.isAuthError
    } else {
      setPopup({
        title : "Login success",
        content : ""
      })

      setShow(true)
      setTimeout(() => {
        setShow(false)
        if (result.token) {
          setAuthToken(result.token)
        }
      },800)
      return result.isAuthError
    }
    
  }
  useEffect(() => {
    document.body.style.backgroundColor = "#F55E61"
  }, []);

  return (
    <div style={{textAlign:"center",padding:"2% 4%"}}> 
      <Header />
      <Row style={{color:"white",margin:"0 10%"}} noGutters={true}>
      <Col lg={5} style={{padding:"1% 4%",textAlign:"left"}}>
      <SigninFormik handleSubmit={handleSubmit} />
      </Col>
      <Footer />
      </Row>
      <Signinpop open={show} title={popup.title} content={popup.content} />
    </div>
  )

}

export default Signin

