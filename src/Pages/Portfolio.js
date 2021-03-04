import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <Container className="portfolio">
      <Row>
        <Col>
          <div>
            <h2 className="portfolio-heading">PORTFOLIO</h2>
          </div>
        </Col>
      </Row>

      <Row className="portfolio-section">
        <Col xs={12} md={9}>
          <p className="portfolio-section-heading">
            <strong className="tx-primary">Work </strong> i've done
          </p>
          <p>
            <small>
              I'm proud to have collaborated with some of the awesome minds.
            </small>
          </p>
        </Col>
        <Col xs={12} md={3}>
          <ul>
            <li>
              <Link
                to="contact"
                smooth="easeInOutQuint"
                duration={2000}
                className="p-lets-talk"
              >
                Lets Talk
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col xs={12} md={12} lg={4}>
          <Card className="portfolio-card-container p-card-1">
            <div className="p-holder">
              <span className="p-card-type">Website</span>
              <span className="p-card-type">2015</span>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
        <a href="https://faadu.in/" target="_blank">
          <Card className="portfolio-card-container p-card-2">
            <div className="p-holder">
              <span className="p-card-type">Website</span>
              <span className="p-card-type">2016</span>
            </div>
          </Card>
          </a>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className="portfolio-card-container p-card-3 ">
            <div className="p-holder">
              <span className="p-card-type">Website</span>
              <span className="p-card-type">2015</span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
