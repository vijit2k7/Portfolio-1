import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import "../styles/Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <Grid container className="subscribe-content">
          <Grid xs={3} className="subscribe-heading">
            <h5>
              Never miss my
              <br></br>
              latest udpates
            </h5>
          </Grid>
          <Grid xs={6}>
            <input
              type="email"
              name="email"
              disabled
              className="subscribe-email-input"
            ></input>
            <p>
              <small>i will start news letters soon!</small>
            </p>
          </Grid>
          <Grid xs={3}>
            <input
              type="button"
              value="subscribe"
              disabled
              className="subscribe-button"
            ></input>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Subscribe;
