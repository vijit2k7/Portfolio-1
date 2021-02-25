import React from "react";
import {
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OpenSource.css";
function OpenSource() {
  return (
    <Container className="os">
      <Row>
        <Col>
          <div>
            <h2 className="os-heading">OPEN-SOURCE</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <p className="os-section-heading">
            <strong className="tx-primary">My </strong> Projects
          </p>
        </Col>
        <Col md={4}>
          <ul>
            <li>
              <Link
                className="os-collabrate"
                smooth="easeInOutQuint"
                duration={2000}
                to="contact"
              >
                Collabrate
              </Link>
            </li>
          </ul>
        </Col>
      </Row>

      <div className="os-container">
        <Row className="os-card-container">
          <Col lg={4} xs={12} className="os-col">
            <Card raised className="os-card-1">
              <div className="os-projects-text">
                <a href="https://ignite-4a52c.web.app/">
                  <h4 className="os-card-heading">Ignite</h4>
                </a>

                <p className="os-card-text">
                  Like IMDB for movies, we got Ignite for the games. Shows
                  Upcoming, Popular & New Games. React, Redux, Rawg.io API,
                  Axios, MaterialUI and much more.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Sid-Agnihotri"
                >
                  Visit Git
                </a>
              </div>
            </Card>
          </Col>
          <Col lg={4} xs={12} className="os-col">
            <Card className="os-card-2 ">
              <div className="os-projects-text">
                <h4 className="os-card-heading">Snappy</h4>
                <p className="os-card-text">
                  Captures full page screenshot of any website. Powered with
                  Javascript & Google Chrome Headless API. Just a test.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Sid-Agnihotri"
                >
                  Visit Git
                </a>
              </div>
            </Card>
          </Col>
          <Col lg={4} xs={12} className="os-col">
            <Card className="os-card-3">
              <div className="os-projects-text">
                <h4 className="os-card-heading">Tasty</h4>
                <p className="os-card-text">
                  Recipe Application powered by React, ExpressJS, NodeJS, &
                  MongoDB. Also, has a custom build React Library for uploading
                  files.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Sid-Agnihotri"
                >
                  Visit Git
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default OpenSource;
