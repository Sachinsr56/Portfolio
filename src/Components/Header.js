import React from "react";
import profile from "../Assest/profile.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top p-3"
      style={{ backgroundColor: "rgba(248, 249, 250, 0.8)" }}
    >
      <div className="container">
        <img
          className="p-1"
          src={profile}
          alt="profile"
          style={{ borderRadius: "100%", height: "40px" }}
        />
        <a className="navbar-brand me-auto" href="/" style={{ fontWeight: "600" ,letterSpacing:'1px'}}>
          SACHIN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
