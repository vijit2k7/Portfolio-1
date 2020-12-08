import React from "react";
import Hero from "../Pages/Hero";
import Passion from "../Pages/Passion";
import Summary from "../Pages/Summary";
import Expertise from "../Pages/Expertise";
import Portfolio from "../Pages/Portfolio";
import OpenSource from "../Pages/OpenSource";
import Subscribe from "../Pages/Subscribe";
//styles
import "../globalStyles.css";
import Testimonial from "../Pages/Testimonial";
import Contact from "../Pages/Contact";

function Homepage() {
  return (
    <div className="global">
      <Hero />
      <Summary />
      <Passion />
      <Expertise />
      <Portfolio />
      <OpenSource />
      <Subscribe />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Homepage;
