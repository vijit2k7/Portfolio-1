import React from "react";
import { Grid } from "@material-ui/core";
import "../styles/Summary.css";

function Summary() {
  return (
    <div className="summary">
      <div>
        <h2 className="summary-heading">SUMMARY</h2>
        <p>
          From the beginning of my journey as a designer & developer. I've
          always been drawn to the overlap between design and development. My
          skills are broad: from <b> UX </b> to <b> UI </b>, <b>Front end</b> to{" "}
          <b> Back end </b>development. I enjoy each aspect, & love building
          products from start to finish, for clients all over the world.
        </p>
        <p>
          I've done remote work for business owners, consulted for startups, and
          produced digital products for both business and consumer use. I'm
          quietly confident, naturally curious, & perpetually improving my
          chops.
        </p>
      </div>
      <div className="buttons">
        <Grid container xs={12}>
          <Grid item>
            <button className="download-cv">
              <i className="fas fa-angle-down"></i>
              Download CV
            </button>
            <button className="summary-linkedin-btn">
              <i className="fab fa-linkedin-in "></i>
            </button>

            <button className="summary-skype-btn">
              <i className="fab fa-skype"></i>
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Summary;
