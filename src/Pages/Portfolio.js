import React from "react";
import { Col, Row, Container, Button, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import kodan from "../images/kodan.jpeg";
import ornaz from "../images/ornaz.png";
import img3 from "../images/img3.jpg";
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
        <Col xs={12} md={6}>
          <p className="portfolio-section-heading">
            <strong className="tx-primary">Work </strong> i did
          </p>
          <p>
            <small>
              I'm proud to have collaborated with some of the awesome minds.
            </small>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <ul>
            <li>
              <a href="#" className="p-lets-talk">
                Lets Talk
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Col xs={12} md={12} lg={4}>
          <Card className="portfolio-card-container">
            <Card.Img
              className="portfolio-card-item"
              fluid={true}
              as={Image}
              src={kodan}
              alt="Norway"
            />
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className="portfolio-card-container">
            <Card.Img
              className="portfolio-card-item"
              fluid={true}
              as={Image}
              src={ornaz}
              alt="Norway"
            />
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className="portfolio-card-container">
            <Card.Img
              className="portfolio-card-item"
              fluid={true}
              as={Image}
              src={img3}
            ></Card.Img>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
