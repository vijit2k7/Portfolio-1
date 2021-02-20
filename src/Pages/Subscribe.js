import React from "react";

import "../styles/Subscribe.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <Container fluid="md" className="no-gutters">
        <Row>
          <Col xs={12} md={4}>
            <h5>
              Never miss my <br /> latest updates
            </h5>
          </Col>
          <Col xs={12} md={4}>
            <input disabled />
            <p className="text-white">
              <small className="small">I will start newsletter soon!</small>
            </p>
          </Col>
          <Col className="sub-btn-holder " md={4} xs={12}>
            <Button variant="primary">Subscribe</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subscribe;
