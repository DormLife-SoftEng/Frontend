import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Header = () => {
    const history = useHistory();
    return (
        <>
            <Button onClick={() => history.goBack()} variant="">
                <ArrowBackIosIcon htmlColor="" fontSize="large" />
            </Button>
            <h1>Signin</h1>
        </>
    )
}
export default Header;