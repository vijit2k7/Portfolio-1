import React from "react";
//Router
import { Link } from "react-scroll";

////
import "../styles/Passion.css";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Passion() {
  return (
    <Container className="passion">
      <Row>
        <Col>
          <div>
            <h2 className="passion-heading">PASSION</h2>
          </div>
          <Row>
            <Col md={6} xs={12}>
              <p className="passion-section-heading">
                <strong className="tx-primary">My </strong> Passion
              </p>
              <p className="passion-intro">
                <small className="pas-intro-small">
                  I love to develop websites & web apps.
                </small>
              </p>
            </Col>
            <Col>
              <ul>
                <li>
                  <Link
                    className="passion-hireme"
                    to="contact"
                    smooth="easeInOutQuint"
                    duration={2000}
                  >
                    Hire me
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="passion-container">
        <Row className="passion-card-container">
          <Col lg={4} className="card-1">
            <Card raised className="passion-card-1">
              <div className="pas-card-text">
                <h4 className="passion-card-heading">Product Design</h4>
                <p className="passion-card-text">
                  In today’s customer-centric world, user experience is
                  Everything.
                </p>
                <p className="passion-card-text">
                  You should be targeting to deliver stellar UI/UX if you wish
                  to tap more leads & keep your customers happy.
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={4} className="card-2">
            <Card raised className="passion-card-2">
              <div className="pas-card-text">
                <h4 className="passion-card-heading">Product Development</h4>
                <p className="passion-card-text">
                  With the Internet becoming the platform of choice for people,
                  you need to have a strong online presence.
                </p>
                <p className="passion-card-text">
                  Get a website that makes sure you’re seen and heard in the
                  right circles.
                </p>
              </div>
            </Card>
          </Col>
          <Col lg={4} className="card-3">
            <Card raised className="passion-card-3">
              <div className="pas-card-text">
                <h4 className="passion-card-heading">Landing Page & Email</h4>
                <p className="passion-card-text">
                  Merely building products is not enough.
                </p>
                <p className="passion-card-text">
                  Getting out in the market & popularizing it to the extent that
                  people want to use it, is a major chunk of the overall growth
                  mantra.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Passion;
