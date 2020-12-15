import React from "react";
import { Card, Grid, Button, CardMedia } from "@material-ui/core";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <Grid container>
        <div>
          <h2 className="portfolio-heading">PORTFOLIO</h2>
        </div>
        <Grid item xs={9}>
          <p className="portfolio-section-heading">
            <strong className="tx-primary">Work </strong> i did
          </p>
        </Grid>
        <Grid item xs={3}>
          <a href="#" className="portfolio-download-resume">
            Download Resume
          </a>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="portfolio-section-intro">
            <small>
              I'm proud to have collaborated with some of the awesome minds.
            </small>
          </Grid>
        </Grid>
      </Grid>

      <div className="portfolio-card-container">
        <div className="portfolio-card-item">
          <img className="card-img" src="./static/img1.jpg" alt="" />
        </div>

        <div className="portfolio-card-item">
          <img className="card-img" src="./static/img2.jpg" alt="" />
        </div>

        <div className="portfolio-card-item">
          <img className="card-img" src="./static/img3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
