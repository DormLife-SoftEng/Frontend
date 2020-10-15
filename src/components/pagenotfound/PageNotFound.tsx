import React, { useState } from "react";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardPopup: {
      minWidth: 250,
      backgroundColor: "#FFFFFF",
    },
    expandIcon: { padding: 0 },
    grid: { paddingBottom: 0 },
    textPopup: { color: "#F55E61" },
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
export default function EmailPopup() {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
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
                    aria-label="show more"
                    style={{ padding: 0, outline: "none", color: "#F55E61" }}
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon style={{ color: "#F55E61" }} />
                  </IconButton>
                </CardActions>
              </Grid>
              <Grid item xs={12} style={{ justifyContent: "center" }}>
                <Typography className={classes.textPopup} variant="h3" component="h2">
                  Error 404 - Page not found
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
}
