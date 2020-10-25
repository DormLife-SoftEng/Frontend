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
        <>
        <style type="text/css">
            {`
            .btn-pink {
              background-color: #F55E61;
              color: white;
            }
            
            .btn-xxl {
                padding: 1rem 2rem;
                font-size: 1.5rem;
                line-height: 2.25;
                border-radius: .45rem;
            }
            `}
        </style>
        </>
        <a className="btn-xxl btn-pink" onClick={() => {
          history.push("/lobby");
        }}>
        CLICK HERE
        </a>
    </div>
  );
}
export default FindRoomateBTN;
