import React from "react";
import "../styles/Contact.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  TextField,
  withStyles,
  Icon,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "green",
//     },
//     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "red",
//     },
//     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//       borderColor: "purple",
//     },
//   },
// });
const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});
function Contact() {
  const classes = styles();
  return (
    <div className="contact">
      <div>
        <h2 className="contact-heading">CONTACT</h2>
      </div>
      <div>
        <p className="contact-section-intro">
          <strong className="tx-primary">Let's</strong> get in touch
        </p>
      </div>
      <Grid xs={12} container direction="row">
        <Grid className="contact-grid-1" xs={3}>
          <Card raised className="contact-card-1 contact-card">
            <Grid container>
              <Grid xs={2}>
                <i className="fas fa-phone-alt fa-2x"></i>
              </Grid>
              <Grid className="grid-item-call" item xs={9}>
                <ul>
                  <li className="card-text-heading">Phone/Whatsapp</li>
                  <p className="card-text-content">
                    <a href="#">+1 (438)927-9098</a>
                  </p>
                </ul>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid className="contact-grid-2" xs={4}>
          <Card raised className="contact-card-2 contact-card">
            <Grid container>
              <Grid xs={3}>
                <i className="fas fa-at fa-2x"></i>
              </Grid>
              <Grid className="grid-item-call" item xs={9}>
                <ul>
                  <li className="card-text-heading">Email</li>
                  <p className="card-text-content">
                    <a href="#">sharma.sidhant@outlook.com</a>
                  </p>
                </ul>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid className="contact-grid-3" xs={2}>
          <Card raised className="contact-card-3 contact-card">
            <Grid container>
              <Grid xs={3}>
                <i className="contact-fab fa-skype fa-2x"></i>
              </Grid>
              <Grid className="grid-item-call" item xs={9}>
                <ul>
                  <li className="card-text-heading">Skype</li>
                  <p className="card-text-content">
                    <a href="#">sid_agnihotri</a>
                  </p>
                </ul>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid className="contact-grid-4" xs={3}>
          <Card raised className="contact-card-4 contact-card">
            <Grid container>
              <Grid xs={3}>
                <i className="contact-fab fab fa-linkedin fa-2x"></i>
              </Grid>
              <Grid className="grid-item-call" item xs={9}>
                <ul>
                  <li className="card-text-heading">Linkedin</li>
                  <p className="card-text-content">
                    <a href="#">Sid_agnihotri</a>
                  </p>
                </ul>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid container xs={12} direction="row" className="contact-seprator">
        <Grid>
          <span>
            <b className="tx-primary">OR</b>
          </span>
        </Grid>
        <Grid xs={11}>
          <div className="seprator"></div>
        </Grid>
      </Grid>
      {/* Form from here */}
      <Grid container xs={12}>
        <Grid item container xs={8}>
          <Card raised className="contact-form-grid">
            <form className="contact-form">
              <Grid container xs={12} direction="row">
                <Grid className="form-grid-name" item xs={6}>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    id="name"
                    label="Enter Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth id="email" label="Email" />
                </Grid>
              </Grid>
              <Grid className="contact-textfield-grid" xs={12}>
                <TextField
                  fullWidth
                  label=""
                  variant="filled"
                  id="text-field"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                />
              </Grid>
              <Grid className="button-grid" xs={12}>
                <Button
                  id="button"
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                >
                  Send
                </Button>
              </Grid>
            </form>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <span>
              <i className="fas fa-comments"></i>
            </span>
            <p>Live Chat</p>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
