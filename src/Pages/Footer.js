import React from "react";
import nl2br from "react-newline-to-break";
import "../styles/Footer.css";

function Footer() {
  let footer =
    "Let's talk & turn your great ideas \n into something even greater!";
  return (
    <div className="footer">
      {/* <h3>{nl2br(footer)}</h3> */}
      <div>
        <h3>
          Let's talk & turn your great ideas <br />
          into something even greater!
        </h3>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <h3 className="footer-text-2">into something even greater!</h3>; */
}
