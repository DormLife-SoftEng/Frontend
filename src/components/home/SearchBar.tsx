import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Modal, Button} from "react-bootstrap";
import SearchList from "./SearchList"
import { dorm, QueryParams } from "../newType";
import generalService from "../../services/general.service";
import AddDormPop from "../dormown/AddDormPop";

interface searchProps {
  setSearch : React.Dispatch<React.SetStateAction<boolean>>,
  setDorms : React.Dispatch<React.SetStateAction<dorm[]>>
}

function SearchBar(props : searchProps ) {
  const [show , setShow] = useState(false)
  const [showRes ,setShowRes] = useState(false)
  const {setSearch , setDorms} = props
  function handleClose() {
    setShow(false)
  }
  const handleSubmit = async (searchprop : QueryParams) => {
    const result = await generalService.getSearchDorm(searchprop) as dorm[]
    if (result.length === 0) {
      setDorms(result)
      setShow(false)
      setShowRes(true)
      setTimeout(() => {
        
        setShowRes(false)
        setSearch(false)
      },1000)
    } else {  
      setDorms(result)
      setSearch(true)
      setShow(false)
    }

  }
  return (
    <div style={{padding:"0 10%"}}>
      <InputGroup onClick={()=> {
        setShow(true)
      }
      } className="mb-3">
        <FormControl
          placeholder="Search"
          style={{backgroundColor:"white"}}
          readOnly
        />
        <InputGroup.Append>
          <Button variant="danger">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <Modal centered onHide={handleClose} show={show} size="xl">
        <Modal.Header>
            <Modal.Title  style={{padding:"0 2%",fontWeight:"bold",color:"#F55E61"}}>Search Filter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <SearchList handleSubmit={handleSubmit}  />
        </Modal.Body>
      </Modal>
      <AddDormPop open={showRes} content="" title="Search not found" />

    </div>
  );
}
export default SearchBar;
