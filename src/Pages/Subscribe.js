import React from "react";

import "../styles/Subscribe.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Subscribe() {
  return (
    <Container className="subscribe">
      <Row className="no-gutters">
        <Col>
          <h5>
            Never miss my <br /> latest updates
          </h5>
        </Col>
        <Col md={5}>
          <input disabled />
          <p className="text-white">
            <small className="small">I will start a newsletter soon!</small>
          </p>
        </Col>
        <Col md={3}>
          <Button className="sub-btn-holder " variant="primary">
            Subscribe
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Subscribe;
