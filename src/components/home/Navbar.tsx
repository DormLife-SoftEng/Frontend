import React , {useEffect, useState} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button  from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import {useAuth , authContextType} from "../../contexts/auth.context"
import dog from "..//pic/finder_silver_2.jpg"
import authService from "../../services/auth.service";
import UserModal from "./UserModal";

function NavBar() {

  const history = useHistory()
  const {authToken,setAuthToken} : authContextType = useAuth()
  const [show ,setShow] = useState<boolean>(false)

  // const [userInfo,setUserInfo] = useState({}) usetoset Profile Modal
  useEffect(() => {
    if (authToken) {
      console.log(authToken)
      console.log("Get request")
    }
  },[authToken])

  const handleClose = () => {
    setShow(false)
  }

  const handleClick = async () => {
    const result = await authService.Logout();
    if(result) {
      setAuthToken(null)
    }
  }

  return (
    <Navbar bg="light">
      <Navbar.Brand style={{color:"red" , fontSize:"2rem" , fontWeight:"bold"}} >DormLife</Navbar.Brand>
      <Nav className="ml-auto">
        {authToken ? 
          <>
            <div onClick={()=>{
              setShow(true)
            }}>
              <img style={{marginBottom:"5px",width:"50px" , height : "50px"}} src={dog} />
              <h3 style={{display:"inline-block",margin:"10px 10px 0"}} >{authToken.name.firstName} {authToken.name.lastName}</h3>
            </div>
            <Button onClick={handleClick} style={{backgroundColor:"#F55E61",borderColor:"#F55E61"}}  className="mt-2 ml-1 mb-2 mr-1"  variant="danger" >Signout</Button>
            <UserModal show={show} handleClose={handleClose} />
          </> 
          : 
          <>
            <Button style={{backgroundColor:"#F55E61",borderColor:"#F55E61"}} onClick={()=> history.push("/signup")}  className="mt-1 ml-1 mb-1 mr-1"  variant="danger" >Sign up</Button>
            <Button style={{backgroundColor:"#F55E61",borderColor:"#F55E61"}} onClick={()=> history.push("/signin")} className="mt-1 ml-1 mb-1 mr-1"   variant="danger" >Sign in</Button>
          </>
        }

      </Nav>
    </Navbar>
  );
}
export default NavBar;
