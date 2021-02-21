import "../styles/Testimonial.css";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Testimonial() {
  return (
    <Container className="testimonial">
      <Row>
        <Col>
          <div>
            <h2 className="testimonial-heading">TESTIMONIALS</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="test-section-intro">
            <strong className="tx-primary">What</strong> clients said
          </p>
          <p className="test-reviews">
            "It has been excellent work from your side, and I must say you have
            exceeded my expectations in terms of the support and response we
            have received from you."
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="test-client-count">
          <div className="test-client-text">
            <b className="tx-primary">~ Steve </b> + <b> 30 more clients</b>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonial;
