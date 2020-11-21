import React from "react";
import dog from "../../pic/finder_silver_2.jpg";
import cat from "../../pic/finder_silver_1.jpg";
import catp from "../../pic/finder_silver_1p.jpg";
import dogp from "../../pic/finder_silver_2p.jpg";
import mon from "../../pic/finder_silver_3.jpg";
import monp from "../../pic/finder_silver_3p.jpg";
import { Button } from "react-bootstrap";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import "./image.css";
import { ImagesOwnerProps } from "../../type";
import { useAuth, authContextType } from "../../../contexts/auth.context";

const ImageOwner = (props: ImagesOwnerProps) => {
  const { authToken}: authContextType = useAuth();
  const AllImage = [dog, cat, mon, dogp, catp, monp];
  const { attr, handleKick, index } = props;
  const handleClick = () => {
    handleKick(attr.user.userId);
  };
  return (
    <>
      {authToken && (
        <>
          {index === 0 ? (
            <>
              {attr.user.userId === authToken.userId ? (
                <img
                  alt=""
                  style={{
                    margin: "2%",
                    border: "10px solid #8cd3ff",
                    width: "200px",
                    height: "200px",
                  }}
                  src={AllImage[attr.user.PictureProfile]}
                />
              ) : (
                <div className="image">
                  <Button onClick={handleClick} className="delete-image-btn" variant="">
                    <CancelPresentationIcon fontSize="large" htmlColor="#000" />
                  </Button>
                  <img
                    alt=""
                    style={{ border: "10px solid #FFF", width: "200px", height: "200px" }}
                    src={AllImage[attr.user.PictureProfile]}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {attr.user.userId === authToken.userId ? (
                <img
                  alt=""
                  style={{
                    margin: "2%",
                    border: "10px solid #8cd3ff",
                    width: "200px",
                    height: "200px",
                  }}
                  src={
                    attr.ready
                      ? AllImage[attr.user.PictureProfile + 3]
                      : AllImage[attr.user.PictureProfile]
                  }
                />
              ) : (
                <div className="image">
                  <Button onClick={handleClick} className="delete-image-btn" variant="">
                    <CancelPresentationIcon fontSize="large" htmlColor="#000" />
                  </Button>
                  <img
                    alt=""
                    style={{ border: "10px solid #FFF", width: "200px", height: "200px" }}
                    src={
                      attr.ready
                        ? AllImage[attr.user.PictureProfile + 3]
                        : AllImage[attr.user.PictureProfile]
                    }
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
export default ImageOwner;
