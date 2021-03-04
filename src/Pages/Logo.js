import React from "react";
import vijit from "../images/vijit_final.jpg";
import "../styles/Logo.css";
import { Link } from "react-scroll";
const Logo = () => {
  return (
    <div>
      <div className="logo-holder">
        <a href="/">
          <img src={vijit} alt="myimg" />
        </a>
      </div>
      <div className="social-icon-fixed ">
        <div className="social-icon-container">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/vijit.mishra.7/"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/vijit-mishra-b01355188/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vijit2k7"
              >
                <i class="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <Link
              to="contact"
              smooth="easeInOutQuint"
              duration={2000}
              className="menu-icons"
            >
              <span className="fixed-icon-seprator">|</span>
              <span className="tx-primary social-fixed-discuss">
                Discuss a Project
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
