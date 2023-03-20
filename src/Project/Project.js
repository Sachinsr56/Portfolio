import React from "react";
import ChatApp from "../Asssets/ChatApp.gif";
import CryptoHunter from "../Asssets/CryptoHunter.gif";
import MovieApp from "../Asssets/MovieApp.gif";
import NewsApp from '../Asssets/NewApp.gif';
import BlogApp from '../Asssets/BlogApp.gif'
import "./Project.css";

const Project = () => {
  return (
    <div id="Projects">
      <div className="project-section">
        <div className="container">
          <div className="heading">Projects</div>
          <div className="row">
            <div className="card col-md-3 col-sm-12">
              <img src={CryptoHunter} alt="CryptoHunter" />
              <div className="title">CryptoHunter</div>
              <p></p>
              <hr className="first" />
            </div>
            <div className="card col-md-3 col-sm-12">
              <img src={MovieApp} alt="MovieApp" />
              <div className="title">MovieApp</div>
              <p></p>
              <hr className="second" />
            </div>
            <div className="card col-md-3 col-sm-12">
              <img src={ChatApp} alt="ChatApp" />
              <div className="title">ChatApp</div>
              <p></p>
              <hr className="third" />
            </div>
          </div>
          <div className="row"
          >
          <div className="col-md-2"></div>
            <div className="card col-md-3 col-sm-12">
              <img src={NewsApp} alt="NewsApp" />
              <div className="title">NewsApp</div>
              <p></p>
              <hr className="third" />
            </div>
            <div className="card col-md-3 col-sm-12">
              <img src={BlogApp} alt="BlogApp" />
              <div className="title">BlogApp</div>
              <p></p>
              <hr className="third" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
