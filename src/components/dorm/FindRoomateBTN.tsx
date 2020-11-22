/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Navbar, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import lobbyService from "../../services/lobby.service";

function FindRoomateBTN(props: any) {
    const { title } = props;
    const history = useHistory();
    
    const checkHaveLobby = async () => {
      const result = await lobbyService.checkHaveLobby();
      if (result === "") {
        history.push("/lobby")
      } else {
        history.push(`/lobby/${result}`)
      }
    }

    return (
    <div className="text-center mt-5">
        <Button className="btn-xxl btn-danger" onClick={() => {

          checkHaveLobby();
        }}>
        CLICK HERE
        </Button>
    </div>
  );
}
export default FindRoomateBTN;
