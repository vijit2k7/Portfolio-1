import React from "react";
import {
  Card,
  Grid,
  GridList,
  LinearProgress,
  Button,
  CardMedia,
} from "@material-ui/core";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-section">
      <Grid container>
        <div>
          <h2 className="portfolio-heading">PORTFOLIO</h2>
        </div>
        <Grid item xs={9}>
          <p className="section-heading">
            <strong className="tx-primary">Technologies </strong> i do
          </p>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            className="download-resume"
            size="medium"
            href="#"
          >
            Download Resume
          </Button>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="portfolio-section-intro">
            <small>Learning is what keeps the mind young.</small>
          </Grid>
        </Grid>
      </Grid>
      <div className="portfolio-card-section">
        <Grid className=" portfolio-card-media " xs={12}>
          <Grid item xs={4}>
            <Card className="portfolio-card-1">
              <CardMedia id="portfolio-img" image="/static/img1.jpg">
                Test
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="portfolio-card-2">
              <CardMedia image="/static/img2.jpg">TEST</CardMedia>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="portfolio-card-3">
              <CardMedia image="/static/img3.jpg">TEST</CardMedia>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Portfolio;
