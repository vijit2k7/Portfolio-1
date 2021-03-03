import React from "react";
import "../styles/Contact.css";
import {
  Col,
  Row,
  Container,
  Button,
  Card,
  Form,
  FormGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  return (
    <Container className="contact" id="contact">
      <Row>
        <Col>
          <h2 className="contact-heading">CONTACT</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="contact-section-intro">
            <strong className="tx-primary">Let's</strong> get in touch
          </p>
        </Col>
      </Row>
      <Row className="contact-cards">
        <Col className="contact-card-container">
          <Card className="contact-grid">
            <ul>
              <li>
                <a href="tel:4389279098" className="call-button">
                  Call Me<i class="fas fa-arrow-right"></i>
                </a>
                <div className="contact-card-icon">
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                </div>
                <div className="contact-card-title">Phone/Whatsapp</div>
                <p>
                  <p>(+91)9013523717</p>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card className="contact-grid contact-email">
            <ul>
              <li>
                <a
                  href="mailto:vijit2k7@yahoo.in"
                  className="email-button"
                >
                  Send a Mail<i class="fas fa-arrow-right"></i>
                </a>
                <div className="contact-card-icon">
                  <span>
                    <i className="fas fa-at"></i>
                  </span>
                </div>
                <div className="contact-card-title">Email</div>
                <p>
                  <p>vijit2k7@yahoo.in</p>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card raised className="contact-grid">
            <ul>
              <li>
                <div className="contact-card-icon">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
                <div className="contact-card-title">Skype</div>
                <p>
                  <a href="skype:live:veinstein22?call"> Vijit.Mishra</a>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col className="contact-card-container">
          <Card raised className="contact-grid">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="upwork-icon"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">FreeLancer</div>
                  <p>
                    <a href="#">Upwork</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Col>
      </Row>
      {/* seprator */}
      <Row container xs={12} direction="row" className="contact-seprator">
        <Col>
          <span>
            <b className="tx-primary or-seprator">OR</b>
            <div className="seprator"></div>
          </span>
        </Col>
      </Row>
      {/* Form from here */}
      <Row>
        <Col item container md={7}>
          <Form className="contact-form-grid">
            <Row>
              <Col>
                <FormGroup controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="email-input"
                  />
                </FormGroup>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="password-input"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1"></Form.Group>
              </Col>

              <Form.Control as="textarea" rows={3} className="form-text-area" />
            </Row>

            <Button variant="link" type="submit" className="form-button">
              SEND MESSAGE <i class="fas fa-arrow-right"></i>
            </Button>
          </Form>
        </Col>
        <Col md={3} className="live-chat-container">
          <Card className="live-chat-card">
            <span>
              <i className="fas fa-comments fa-3x"></i>
              <p className="live-chat">Live Chat</p>
            </span>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
