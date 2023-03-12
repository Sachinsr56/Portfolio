import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="Home">
      <div className="dummy"></div>
      <div className="Home">
        <div className="header-text">
          <h1>
            Hi I,m <span>Sachin</span>
          </h1>
          <h2>Web Developer</h2>
          <p className="content">
            In some ways, programming is like painting. You start with a blank
            canvas and <br />
            certain basic raw materials. You use a combination of science, art,{" "}
            <br />
            and craft to determine what to do with them.
          </p>
          <a href="#Contact">
            <button className="btn btn-primary">Connect</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
