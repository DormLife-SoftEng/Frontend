import React from "react";
import { HomeButtonProps } from "../../type";
import { SvgIcon } from "@material-ui/core";
import {Button} from "react-bootstrap";

function HomeIcon(props:any) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const HomeButton = (props: HomeButtonProps) => {
    const { handleGoHome } = props;
    return (
        <div>
        <Button variant=""
            onClick={() => {
            handleGoHome();
            }}
        >
        <HomeIcon style={{color:"white"}} fontSize="large"/>
        </Button>
        </div>
    );
};

export default HomeButton;
