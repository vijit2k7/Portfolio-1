import React from "react";
import "../styles/Footer.css";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <div>
            <h3>
              Let's talk & turn your great ideas <br />
              into something even greater!
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

{
  /* <h3 className="footer-text-2">into something even greater!</h3>; */
}
