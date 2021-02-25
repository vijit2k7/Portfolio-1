import React from "react";
import sidimg from "../images/sidimg.jpg";
import "../styles/Logo.css";
const Logo = () => {
  return (
    <div>
      <div className="logo-holder">
        <a href="/">
          <img src={sidimg} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Logo;
