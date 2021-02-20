import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import "../styles/Testimonial.css";
function Testimonial() {
  return (
    <div className="testimonial">
      <div>
        <h2 className="testimonial-heading">TESTIMONIALS</h2>
      </div>
      <div>
        <p className="test-section-intro">
          <strong className="tx-primary">What</strong> clients said
        </p>
      </div>
      <div>
        <p className="test-reviews">
          "It has been excellent work from your side, and I must say you have
          exceeded my expectations in terms of the support and response we have
          received from you."
        </p>
      </div>
      <div className="test-client-count">
        <span className="test-client-text">
          {/* <b className="tx-primary">Steve</b> + <b> 30 more clients</b> */}
        </span>
      </div>
    </div>
  );
}

export default Testimonial;
