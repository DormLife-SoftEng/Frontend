/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {Navbar, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function DormNav(props: any) {
    const { title } = props;
    const history = useHistory();

    return (
    <div>
        <Navbar className="navbar-pink">
            <Navbar.Brand href="#">
                <Button onClick={()=> history.goBack()} variant="" ><ArrowBackIosIcon fontSize="large" /></Button>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                  {title}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}
export default DormNav;
