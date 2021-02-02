import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import "../styles/OpenSource.css";
function OpenSource() {
  return (
    <div className="os">
      <Grid container>
        <div>
          <h2 className="os-heading">OPEN-SOURCE</h2>
        </div>
        <Grid item xs={10}>
          <p className="os-section-heading">
            <strong className="tx-primary">Things </strong> i do
          </p>
        </Grid>
        <Grid item xs={2}>
          <a className="os-collabrate" href="#">
            Collabrate
          </a>
        </Grid>
        <Grid container>
          <Grid item xs={12} className="os-section-intro">
            <small>I mostly love to design websites & web apps.</small>
          </Grid>
        </Grid>
      </Grid>

      <div className="os-container">
        <Grid container xs={12} className="os-card-container">
          <Grid container xs={4}>
            <Card raised className={"os-card-1"}>
              <h4 className="os-card-heading">Pocket</h4>
              <p className="os-card-text">
                A personalised article reader that provides a single destination
                for browsing & adding the publications you care about.
              </p>
              <a href="#">Visit Git</a>
            </Card>
          </Grid>
          <Grid container xs={4}>
            <Card raised className={"os-card-2 "}>
              <h4 className="os-card-heading">Snappy</h4>
              <p className="os-card-text">
                Captures full page screenshot of any website. Powered with
                Javascript & Google Chrome Headless API. Just a test.
              </p>
              <a href="#">Visit Git</a>
            </Card>
          </Grid>
          <Grid container xs={4}>
            <Card raised className={"os-card-3"}>
              <h4 className="os-card-heading">Tasty</h4>
              <p className="os-card-text">
                Recipe Application powered by Angular, ExpressJS, NodeJS, &
                MongoDB. Also, has a custom build Angular Library for uploading
                files. (Multer)
              </p>
              <a href="#">Visit Git</a>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default OpenSource;
