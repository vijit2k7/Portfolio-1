import React from "react";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import kodan from "../images/kodan.jpeg";
import ornaz from "../images/ornaz.png";
import img3 from "../images/img3.jpg";
function Portfolio() {
  return (
    <Row className="portfolio-section">
      <Col lg={12}>
        <Container>
          <h2 className="portfolio-heading">PORTFOLIO</h2>

          <Row>
            <Col xs={12} lg={8}>
              <p className="portfolio-section-heading">
                <strong className="tx-primary">Work </strong> i did
              </p>
              <p>
                <small>
                  I'm proud to have collaborated with some of the awesome minds.
                </small>
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <a href="#" className="portfolio-download-resume">
                Download Resume
              </a>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col lg={12}>
        <Container>
          <Row className="portfolio-card-container">
            <Col xs={12} md={4} lg={4} className="portfolio-card-item">
              <img src={kodan} alt="Norway" />
            </Col>

            <Col xs={12} md={4} className="portfolio-card-item">
              <img src={ornaz} alt="Norway" />
            </Col>

            <Col xs={12} md={4} className="portfolio-card-item">
              <img src={img3}></img>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}

export default Portfolio;
