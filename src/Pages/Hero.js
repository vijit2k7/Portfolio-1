import React from "react";
import "../styles/Hero.css";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Hero() {
  return (
    <Container className="hero">
      <div className="hero-message">
        <h2 className="hero-primarytx">
          <b className="tx-primary">Engineer </b>
          by Degree,
          <br />
          <b className="hero-tx-primary">Designer </b> by Passion.
        </h2>
      </div>
    </Container>
  );
}

export default Hero;
