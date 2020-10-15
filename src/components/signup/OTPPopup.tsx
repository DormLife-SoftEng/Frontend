import React from "react";
import { createStyles } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

interface OTPPopupProps {
  open: boolean;
  setOpen: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardPopup: {
      minWidth: 250,
      backgroundColor: "#F55E61",
    },
    expandIcon: { padding: 0 },
    grid: { paddingBottom: 0 },
    textPopup: { color: "#FFFFFF" },
    otpTextField: {
      background: "#FFFFFF",
    },
    buttonPopup: {
      margin: "1vh",
      outline: "none",
      "&:hover": {
        outline: "none",
        backgroundColor: "#FFF",
      },
    },
  })
);
export default function EmailPopup(props: OTPPopupProps) {
  const handleClickOpen = () => {
    props.setOpen(true);
  };
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Card
            elevation={0}
            className={classes.cardPopup}
            style={{ outline: "none", borderRadius: "15px" }}
          >
            <CardContent style={{ outline: "none", paddingBottom: 0, marginBottom: "24px" }}>
              <Grid container direction="column" alignItems="center" justify="center" spacing={3}>
                <Grid container item xs={12} direction="row" justify="flex-end">
                  <CardActions
                    disableSpacing
                    className={classes.expandIcon}
                    style={{ outline: "none" }}
                  >
                    <IconButton
                      aria-label="close"
                      style={{ padding: 0, outline: "none", color: "#FFFFFF" }}
                      onClick={handleClose}
                    >
                      <CloseIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </CardActions>
                </Grid>
                <Grid item xs={12} style={{ justifyContent: "center" }}>
                  <Typography className={classes.textPopup} variant="h3" component="h2">
                    Enter OTP Code
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ justifyContent: "center" }}>
                  <Typography className={classes.textPopup} variant="h6" component="h2">
                    A text message with your code
                    <br />
                    has been send to: {"userNumber"}
                  </Typography>
                </Grid>
                <Grid container item xs={12} style={{ justifyContent: "center" }}>
                  <InputBase
                    className={classes.otpTextField}
                    placeholder="Enter your OTP code"
                    style={{ fontSize: 35, borderRadius: "10px" }}
                    inputProps={{
                      maxLength: 5,
                      style: { textAlign: "center", marginLeft: "5%", marginRight: "5%" },
                    }}
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                    }}
                  />
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  xs={12}
                  spacing={1}
                  alignItems="center"
                  justify="center"
                  style={{ justifyContent: "center", outline: "none" }}
                >
                  <Grid item>
                    <Button
                      disableElevation
                      className={classes.buttonPopup}
                      variant="contained"
                      color="secondary"
                      size="large"
                      style={{ outline: "none" }}
                      onClick={() => {}}
                    >
                      <Typography
                        color="primary"
                        variant="h5"
                        component="h3"
                        style={{ outline: "none" }}
                      >
                        Comfirm
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      className={classes.buttonPopup}
                      variant="contained"
                      color="secondary"
                      size="large"
                      style={{ outline: "none" }}
                      onClick={() => {}}
                    >
                      <Typography
                        color="primary"
                        variant="h5"
                        component="h3"
                        style={{ outline: "none" }}
                      >
                        Resend
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
