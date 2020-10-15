import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

interface BackProps {
    handleGoBack : () => void
}
const BackButton = (props : BackProps) => {
    const {handleGoBack} = props
    return (
        <>
        <button onClick={()=> {
            handleGoBack();
        }}>
            <ArrowBackIosIcon htmlColor="" fontSize="large" />
        </button>
        </>
    );
};

export default BackButton;