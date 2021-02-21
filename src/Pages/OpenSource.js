import React from "react";
import {
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
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
            <strong className="tx-primary">Projects </strong> you can see
          </p>
        </Col>
        <Col md={4}>
          <ul>
            <li>
              <a className="os-collabrate" href="#">
                Collabrate
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <div className="os-container">
        <Row className="os-card-container">
          <Col lg={4} xs={12} className="os-col">
            <Card raised className="os-card-1">
              <div className="os-projects-text">
                <h4 className="os-card-heading">Pocket</h4>
                <p className="os-card-text">
                  A personalised article reader that provides a single
                  destination for browsing & adding the publications you care
                  about.
                </p>
                <a href="#">Visit Git</a>
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
                <a href="#">Visit Git</a>
              </div>
            </Card>
          </Col>
          <Col lg={4} xs={12} className="os-col">
            <Card className="os-card-3">
              <div className="os-projects-text">
                <h4 className="os-card-heading">Tasty</h4>
                <p className="os-card-text">
                  Recipe Application powered by Angular, ExpressJS, NodeJS, &
                  MongoDB. Also, has a custom build Angular Library for
                  uploading files. (Multer)
                </p>
                <a href="#">Visit Git</a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default OpenSource;
