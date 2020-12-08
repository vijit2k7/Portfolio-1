import React from "react";
import {
  Card,
  Grid,
  GridList,
  LinearProgress,
  Button,
} from "@material-ui/core";
import skills from "../data";
import "../styles/Expertise.css";
import { red } from "@material-ui/core/colors";

const Expertise = () => {
  return (
    <div className="expertise-section">
      <Grid container>
        <div>
          <h2 className="expertise-heading">EXPERTISE</h2>
        </div>
        <Grid item xs={9}>
          <p className="expertise-section-heading">
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
          <Grid item xs={12} className="section-intro">
            <small>Learning is what keeps the mind young.</small>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="expertise-card-skill-container">
        <Grid item xs={4}>
          <Card raised className="expertise-card-1 ">
            <span id="expertise-title" className="expertise-title">
              CURRENT EMPLOYER
            </span>
            <h3 className="job-title">React Engineer</h3>
            <ul>
              <div className="expertise-job-link">
                <li>2018-Present | </li>
                <li>
                  <a href="#"> Tilray (Canada)</a>
                </li>
              </div>
              <p className="expertise-job-detail">
                Working with a creative team to make India’s first tech driven
                modern grocery store chain for smaller towns.
              </p>
            </ul>
          </Card>
          <Card raised className="expertise-card-2 ">
            <h3 className="job-title">Front-End Engineer</h3>
            <ul>
              <li>2014 - 2015</li>
              <li>
                <a className="" href="#">
                  Kodan Solutions(India)
                </a>
              </li>
              <p className="expertise-job-detail">
                Collaborating with a young team on the execution of ideas for
                processing drone data on maps.
              </p>
            </ul>
          </Card>
        </Grid>
        <Grid container className="skill-container" xs={8}>
          {skills.map((skill) => {
            return (
              <Grid item xs={4}>
                <Card className="skill-cards">
                  <span>
                    <i
                      style={{ color: `${skill.color}` }}
                      className={`fab fa-${skill.icon} fa-2x skill-icon`}
                    ></i>
                  </span>
                  <h3 className="skill-name"> {skill.name}</h3>
                  <progress
                    className="skills-progress"
                    max="100"
                    value={`${skill.value}`}
                  ></progress>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Expertise;
