import React, { useState } from "react";
import { InputGroup, Modal , FormControl, Button } from "react-bootstrap";
import lobbyService from "../../../services/lobby.service";
import { ModalMainPageProps } from "../../type";
import "./style.css";

const JoinCodeModal = (props: ModalMainPageProps) => {
  const { show, handleClose, handleRouting } = props;
  const [lobbyID, setLobbyID] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLobbyID(value);
  };
  return (
    <Modal
      dialogClassName="lobby"
      centered={true}
      onHide={handleClose}
      show={show}
    >
      <form
        onSubmit={async (e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (lobbyID !== "") {
            const param = {
                lobbyCode: lobbyID
            }
            const result = await lobbyService.joinLobbyCode(param)
            if (result) {
                handleClose();
                handleRouting(`/lobby/${result}`);
            }   
          }
        }}
      >
        <Modal.Body style={{ padding: "8%", textAlign: "center" }}>
          <h1>Enter Lobby Code</h1>
          <InputGroup
            className="mt-5"
          >
            <FormControl
              placeholder="Enter Lobby Code"
              style={{ backgroundColor: "white" }}
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button type="submit" variant="danger">Enter</Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
      </form>
    </Modal>
  );
};
export default JoinCodeModal;
