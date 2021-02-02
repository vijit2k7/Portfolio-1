import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import "../styles/Passion.css";
function Passion() {
  return (
    <div className="passion">
      <Grid container>
        <div>
          <h2 className="passion-heading">PASSION</h2>
        </div>
        <Grid item xs={10}>
          <p className="passion-section-heading">
            <strong className="tx-primary">Things </strong> i do
          </p>
        </Grid>
        <Grid item xs={2}>
          <a href="#" className="passion-hireme">
            Hire me
          </a>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="passion-section-intro">
            <small>I mostly love to design websites & web apps.</small>
          </Grid>
        </Grid>
      </Grid>

      <div className="passion-container">
        <Grid container xs={12} className="passion-card-container">
          <Grid container xs={12} md={4}>
            <Card raised className={"passion-card-1"}>
              <h4 className="passion-card-heading">Product Design</h4>
              <p className="passion-card-text">
                In today’s customer-centric world, user experience is
                Everything.
              </p>
              <p className="passion-card-text">
                You should be targeting to deliver stellar UI/UX if you wish to
                tap more leads & keep your customers happy.
              </p>
            </Card>
          </Grid>
          <Grid container xs={12} md={4}>
            <Card raised className={"passion-card-2 "}>
              <h4 className="passion-card-heading">Product Development</h4>
              <p className="passion-card-text">
                With the Internet becoming the platform of choice for people,
                you need to have a strong online presence.
              </p>
              <p className="passion-card-text">
                Get a website that makes sure you’re seen and heard in the right
                circles.
              </p>
            </Card>
          </Grid>
          <Grid container xs={12} md={4}>
            <Card raised className={"passion-card-3"}>
              <h4 className="passion-card-heading">Landing Page & Email</h4>
              <p className="passion-card-text">
                Merely building products is not enough.
              </p>
              <p className="passion-card-text">
                Getting out in the market & popularizing it to the extent that
                people want to use it, is a major chunk of the overall growth
                mantra.
              </p>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Passion;
