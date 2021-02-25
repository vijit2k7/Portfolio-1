import Homepage from "./Components/Homepage";
import React from "react";
import Hero from "../src/Pages/Hero";
import Passion from "../src/Pages/Passion";
import Summary from "../src/Pages/Summary";
import Expertise from "../src/Pages/Expertise";
import Portfolio from "../src/Pages/Portfolio";
import OpenSource from "../src/Pages/OpenSource";
import Subscribe from "../src/Pages/Subscribe";
import sid from "../src/images/sid.JPG";
import Testimonial from "../src/Pages/Testimonial";
import Contact from "../src/Pages/Contact";
import Footer from "../src/Pages/Footer";
import Logo from "../src/Pages/Logo";

//Router

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
///

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Hero />
        <Summary />
        <Passion />
        <Expertise />
        <Portfolio />
        <OpenSource />
        <Subscribe />
        <Testimonial />
        <Route />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
