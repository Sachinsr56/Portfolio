import React from "react";
import ChatApp from "../Asssets/ChatApp.gif";
import CryptoHunter from "../Asssets/CryptoHunter.gif";
import MovieApp from "../Asssets/MovieApp.gif";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-section">
      <div className="container">
        <div className="heading">Project</div>
        <div className="row">
          <div className="card col-md-3 col-sm-12">
            <img src={CryptoHunter} alt="CryptoHunter" />
          </div>
          <div className="card col-md-3 col-sm-12">
            <img src={MovieApp} alt="MovieApp" />
          </div>
          <div className="card col-md-3 col-sm-12">
            <img src={ChatApp} alt="ChatApp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
