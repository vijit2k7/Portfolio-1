import React from "react";
//styles
import "../styles/Hero.css";
import sid from "../images/sid.JPG";

function Hero() {
  return (
    <div className="hero">
      <div className="myImg">
        <img className="myImg-img" src={sid} alt="my-photo" />
      </div>
      <div>
        <h2 className="hero-primarytx">
          <b className="tx-primary">Engineer </b>
          by Degree,
          <br />
          <b className="hero-tx-primary">Designer </b> by Passion.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
