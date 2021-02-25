import React from "react";
import skills from "../data";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <Container className="expertise-section">
      <Row>
        <Col>
          <div>
            <h2 className="expertise-heading">EXPERTISE</h2>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <p className="expertise-section-heading">
            <strong className="tx-primary">My </strong> Background
          </p>
          <p className="passion-intro">
            <small className="exp-intro-small">
              Learning is what keeps the mind young.
            </small>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <ul>
            <li>
              <a href="#" className="expertise-download-resume">
                Download Resume
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="expertise-card-skill-container">
        <Col>
          <Card className="expertise-card-1 ">
            <div className="exp-job-container">
              <p className="exp-card-title">CURRENT EMPLOYER</p>
              <h3 className="exp-job-title">Network/System Analyst</h3>
              <ul>
                <div className="expertise-job-link">
                  <li>2018 - Present | </li>
                  <li>
                    &nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.tilray.com/"
                    >
                      Tilray (Canada)
                    </a>
                  </li>
                </div>
                <p className="exp-job-detail">
                  Working with a creative team to make India’s first tech driven
                  modern grocery store chain for smaller towns.
                </p>
              </ul>
            </div>
          </Card>
          <Card className="expertise-card-2 ">
            <div className="exp-job-container">
              <h3 className="exp-job-title">Front-End Developer</h3>
              <ul>
                <div className="expertise-job-link">
                  <li>2014 - 2015 |</li>
                  &nbsp;&nbsp;
                  <li>
                    <a className="indishine-container" href="">
                      Indshine(in) - Freelance
                    </a>
                  </li>
                </div>
                <p className="exp-job-detail">
                  Collaborating with a young team on the execution of ideas for
                  processing drone data on maps.
                </p>
              </ul>
            </div>
          </Card>
        </Col>
        <Col container className="skill-container" xs={12} md={8}>
          <Row>
            {skills.map((skill) => {
              return (
                <Col>
                  <Card raised className="skill-cards">
                    <i
                      style={{ color: `${skill.color}` }}
                      className={`${skill.type} fa-${skill.icon} fa-2x skill-icon`}
                    ></i>

                    <h3 className="skill-name"> {skill.name}</h3>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Expertise;
