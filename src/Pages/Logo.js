import React from "react";
import sidimg from "../images/sidimg.jpg";
import "../styles/Logo.css";
import { Link } from "react-scroll";
const Logo = () => {
  return (
    <div>
      <div className="logo-holder">
        <a href="/">
          <img src={sidimg} alt="" />
        </a>
      </div>
      <div className="social-icon-fixed">
        <div className="social-icon-container">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sid.agnihotri"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/sid_agnihotri/"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sidhant-sharma-21a79325/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Sid-Agnihotri"
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
