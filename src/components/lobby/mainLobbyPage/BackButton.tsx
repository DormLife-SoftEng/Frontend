import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { backButtonProps } from "../../type"
import { Button} from "react-bootstrap";
const BackButton = (props: backButtonProps) => {
    const { handleGoBack } = props
    return (

        <Button variant="" onClick={() => {
            handleGoBack();
        }}>
            <ArrowBackIosIcon htmlColor="white" fontSize="large" />
        </Button>

    );
};

export default BackButton;