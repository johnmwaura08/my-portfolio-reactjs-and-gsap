import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import stylez from "./Contact.module.css";
import cx from "classnames";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00ffff",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  textarea: {
    backgroundColor: "white",
  },
  info: {
    color: "#42474b",
    alignItems: "center",
    textAlign: "center",
    fontSize: "30px"
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xbjpoprv",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Message Succesfuly Sent", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
    }
    return (
      <Container
        component="main"
        maxWidth="xs"
        className={stylez.mainContainer}
      >
        <CssBaseline />
        <div className={classes.paper}>
          {/* <span className={stylez.contactH1Span}>{"<h1>"}</span> */}
          <Typography component="h1" variant="h5" className={classes.info}>
            Contact Form
          </Typography>

          {/* <span className={stylez.contactH1Span}>{"</h1>"}</span>

          <span className={stylez.contactFormSpan}>{"<form>"}</span> */}

          <form
            className={classes.form}
            noValidate
            action={process.env.FormSpree_ID}
            method="POST"
            onSubmit={handleOnSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              className={classes.textarea}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.textarea}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="subject"
              label="Subject"
              name="subject"
              autoComplete="subject"
              autoFocus
              className={classes.textarea}
            />

            <TextField
              id="message"
              label="message"
              name="message"
              autoComplete="message"
              // variant="filled"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              className={classes.textarea}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={serverState.submitting}
            >
              Send
            </Button>
            <Grid item className={stylez.linkEmail}>
              Contact By Email:{" "}
              <a href="mailto:johnmwaura08@gmail.com">johnmwaura08@gmail.com</a>
            </Grid>
            {serverState.status && (
              <p
                className={!serverState.status.ok ? "errorMsg" : ""}
                style={{ color: "green" }}
              >
                {serverState.status.msg}
              </p>
            )}
          </form>
          <br />
          {/* <span className={stylez.contactFormSpan}>{"</form>"}</span> */}
        </div>
      </Container>
    );
  }
