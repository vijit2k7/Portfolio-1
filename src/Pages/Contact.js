import React from "react";
import "../styles/Contact.css";
import { Card, Grid, TextField, Icon, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Contact() {
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

      <Grid container spacing={3} className="contact-cards">
        <Grid item xs>
          <Card raised className="contact-grid">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Phone/Whatsapp</div>
                  <p>
                    <a href="#"> +1(438)927-9098</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Grid>
        <Grid item xs>
          <Card raised className="contact-grid contact-email">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-at"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Email</div>
                  <p>
                    <a href="#"> sharma.sidhant@outlook.com</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Grid>
        <Grid item xs>
          <Card raised className="contact-grid">
            <a href="">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Skype</div>
                  <p>
                    <a href="#"> Sid_Agnihotri</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Grid>
        <Grid item xs>
          <Card raised className="contact-grid">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="upwork-icon"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">FreeLancer</div>
                  <p>
                    <a>Upwork</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Grid>
      </Grid>
      {/* seprator */}

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
                />
              </Grid>
              <Grid className="button-grid" xs={12}>
                <button type="submit" className="contact-send-btn">
                  SEND MESSAGE
                  <span></span>
                </button>
                Send
              </Grid>
            </form>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card raised className="live-chat-container">
            <span>
              <i className="fas fa-comments fa-3x"></i>
            </span>
            <p className="live-chat">Live Chat</p>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
