import React from "react";
import sid from "../images/sid.JPG";
import "../styles/Logo.css";
const Logo = () => {
  return (
    <div>
      <div className="logo-holder">
        <a href="/">
          <img src={sid} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Logo;
