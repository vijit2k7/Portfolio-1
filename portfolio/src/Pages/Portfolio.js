import React from "react";
import { Card, Grid, Button, CardMedia } from "@material-ui/core";
import "../styles/Portfolio.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
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
        <div
          className="portfolio-card-item"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        ></div>

        <div
          className="portfolio-card-item"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        ></div>

        <div
          className="portfolio-card-item"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Portfolio;
