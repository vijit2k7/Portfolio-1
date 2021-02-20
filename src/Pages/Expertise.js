import React from "react";

import skills from "../data";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise-section">
      <div>
        <div>
          <h2 className="expertise-heading">EXPERTISE</h2>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <p className="expertise-section-heading">
                <strong className="tx-primary">Things </strong> i do
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
        </Container>
      </div>
      <Container container className="expertise-card-skill-container">
        <Row>
          <Col xs={12} md={4}>
            <Card xs={12} className="expertise-card-1 ">
              <div className="exp-job-container">
                <p className="exp-card-title">CURRENT EMPLOYER</p>
                <h3 className="exp-job-title">Network/System Engineer</h3>
                <ul>
                  <div className="expertise-job-link">
                    <li>2018 - Present | </li>
                    <li>
                      &nbsp;
                      <a href="#"> Tilray (Canada)</a>
                    </li>
                  </div>
                  <p className="exp-job-detail">
                    Working with a creative team to make India’s first tech
                    driven modern grocery store chain for smaller towns.
                  </p>
                </ul>
              </div>
            </Card>
            <Card xs={12} className="expertise-card-2 ">
              <div className="exp-job-container">
                <h3 className="exp-job-title">Front-End Engineer</h3>
                <ul>
                  <div className="expertise-job-link">
                    <li>2014 - 2015 |</li>
                    &nbsp;&nbsp;
                    <li>
                      <a className="" href="#">
                        Kodan Solutions(in)
                      </a>
                    </li>
                  </div>
                  <p className="exp-job-detail">
                    Collaborating with a young team on the execution of ideas
                    for processing drone data on maps.
                  </p>
                </ul>
              </div>
            </Card>
          </Col>
          <Col container className="skill-container" xs={12} md={8}>
            <Container>
              <Row>
                {skills.map((skill) => {
                  return (
                    <Col xs={6} s={3} md={4} lg={4}>
                      <Card raised className="skill-cards">
                        <span>
                          <i
                            style={{ color: `${skill.color}` }}
                            className={`${skill.type} fa-${skill.icon} fa-2x skill-icon`}
                          ></i>
                        </span>
                        <h3 className="skill-name"> {skill.name}</h3>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expertise;
