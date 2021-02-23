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
        <Col>
          <Card className="contact-grid">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Phone/Whatsapp</div>
                  <p>
                    <a href="#"> +1(438)927-9098</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Col>
        <Col>
          <Card raised className="contact-grid contact-email">
            <a href="#">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-at"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Email</div>
                  <p>
                    <a href="#"> sharma.sidhant@outlook.com</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Col>
        <Col>
          <Card raised className="contact-grid">
            <a href="">
              <ul>
                <li>
                  <div className="contact-card-icon">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <div className="contact-card-title">Skype</div>
                  <p>
                    <a href="#"> Sid_Agnihotri</a>
                  </p>
                </li>
              </ul>
            </a>
          </Card>
        </Col>
        <Col>
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
            <b className="tx-primary">OR</b>
          </span>
        </Col>
        <Col xs={11}>
          <div className="seprator"></div>
        </Col>
      </Row>
      {/* Form from here */}
      <Row container xs={12}>
        <Col item container xs={8}>
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
              SEND MESSAGE ->
            </Button>
          </Form>
        </Col>
        <Col className="live-chat-container">
          <Card className="live-chat-card">
            <span>
              <i className="fas fa-comments fa-3x"></i>
            </span>
            <p className="live-chat">Live Chat</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
