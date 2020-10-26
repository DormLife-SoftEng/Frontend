/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Navbar, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function FindRoomateBTN(props: any) {
    const { title } = props;
    const history = useHistory();

    return (
    <div className="text-center mt-5">
        <Button className="btn-xxl btn-danger" onClick={() => {
          history.push("/lobby");
        }}>
        CLICK HERE
        </Button>
    </div>
  );
}
export default FindRoomateBTN;
