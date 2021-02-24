import React from "react";

import "../styles/Summary.css";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Summary() {
  return (
    <Container className="summary">
      <Row>
        <Col lg={12}>
          <h2 className="summary-heading">SUMMARY</h2>
          <p>
            From the beginning of my journey as a designer & developer. I've
            always been drawn to the overlap between design and development. My
            skills are broad: from <b> UX </b> to <b> UI </b>, <b>Front end</b>{" "}
            to <b> Back end </b>development. I enjoy each aspect, & love
            building products from start to finish, for clients all over the
            world.
          </p>
          <p>
            I've done remote work for business owners, consulted for startups,
            and produced digital products for both business and consumer use.
            I'm quietly confident, naturally curious, & perpetually improving my
            chops.
          </p>
        </Col>
        <Col className="buttons">
          <div container xs={12}>
            <div item>
              <button className="download-cv">
                <i className="fas fa-angle-down"></i>
                Download CV
              </button>
              <button className="summary-linkedin-btn">
                <a
                  href="https://www.linkedin.com/in/sidhant-sharma-21a79325/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in "></i>
                </a>
              </button>
              <button className="summary-skype-btn">
                <a
                  href="skype:sharma.sidhant?call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-skype"></i>
                </a>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
