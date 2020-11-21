import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Modal, Button} from "react-bootstrap";
import SearchList from "./SearchList"

interface searchProps {
  setSearch : React.Dispatch<React.SetStateAction<boolean>>,
  setDorms : React.Dispatch<React.SetStateAction<any[]>>
}

function SearchBar(props : searchProps ) {
  const [show , setShow] = useState(false)
  const {setSearch , setDorms} = props
  function handleClose() {
    setShow(false)
  }
  const handleSubmit = (searchprop : any) => {
    setDorms([])
    setSearch(true)
    setShow(false)
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
      <Modal onHide={handleClose} show={show} size="xl">
        <Modal.Header>
            <Modal.Title>Search Filter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <SearchList handleSubmit={handleSubmit}  />
        </Modal.Body>
      </Modal>

    </div>
  );
}
export default SearchBar;
