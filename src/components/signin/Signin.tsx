/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import authService from "../../services/auth.service";
import { dialogProps, LoginForm } from "../type";
import Signinpop from "./Dialog";
import Footer from "./Footer";
import Header from "./Header";
import SigninFormik from './Signinformik'
import {useAuth , authContextType} from "../../contexts/auth.context"

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

  return (
    <>
    <Header />
    <SigninFormik handleSubmit={handleSubmit} />
    <Footer />
    <Signinpop open={show} title={popup.title} content={popup.content} />
    </>
  )

}

export default Signin

