import React from "react";
import ChatApp from "../Asssets/ChatApp.gif";
import CryptoHunter from "../Asssets/CryptoHunter.gif";
import MovieApp from "../Asssets/MovieApp.gif";
import NewsApp from "../Asssets/NewApp.gif";
import BlogApp from "../Asssets/BlogApp.gif";
import "./Project.css";

const Project = () => {
  return (
    <div id="Projects">
      <div className="project-section">
        <div className="container">
          <div className="heading">Projects</div>
          <div className="row">
            <div className="card col-md-4 col-sm-12">
              <a
                href="https://github.com/Sachinsr56/crypto-tracker"
                target="_blank"
              >
                <img src={CryptoHunter} alt="CryptoHunter" />
              </a>
              <div className="title">CryptoHunter</div>
              <p></p>
              <hr className="first" />
            </div>
            <div className="card col-md-4 col-sm-12">
              <a href="https://github.com/Sachinsr56/Movie-App" target="_blank">
                <img src={MovieApp} alt="MovieApp" />
              </a>
              <div className="title">MovieApp</div>
              <p></p>
              <hr className="second" />
            </div>
            <div className="card col-md-4 col-sm-12">
              <a href="https://github.com/Sachinsr56/Ichat" target="_blank">
                <img src={ChatApp} alt="ChatApp" />
              </a>
              <div className="title">ChatApp</div>
              <p></p>
              <hr className="third" />
            </div>
            <div className="card col-md-4 col-sm-12">
              <a href="https://github.com/Sachinsr56/News-App" target="_blank">
                <img src={NewsApp} alt="NewsApp" />
              </a>
              <div className="title">NewsApp</div>
              <p></p>
              <hr className="third" />
            </div>
            <div className="card col-md-4 col-sm-12">
              <a href="https://github.com/Sachinsr56/BlogApp" target="_blank">
                <img src={BlogApp} alt="BlogApp" />
              </a>
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
