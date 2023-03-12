import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div id="Skills" className="skills-section">
      <div className="heading">Skills</div>
      <p className="xyz">I love to work on real world application projects where I use my Web Development,<br /> Data Cleaning and structured coding skills.</p>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div
                className="percent"
                style={{ "--clr": "#fee800", "--num": 95 }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    95<span>%</span>
                  </h2>
                  <p>C/C++</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div
                className="percent"
                style={{ "--clr": "#04f4c3", "--num": 75 }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75<span>%</span>
                  </h2>
                  <p className="data-class">
                    Full Stack
                    <br />
                    Developer
                  </p>                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div
                className="percent"
                style={{ "--clr": "#06ccff", "--num": 85 }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    85<span>%</span>
                  </h2>
                  <p className="data-class">
                    Data Structure
                    <br /> and
                    <br /> Algorithm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div
                className="percent"
                style={{ "--clr": "Tomato", "--num": 85 }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    85<span>%</span>
                  </h2>
                  <p className="data-class">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div
                className="percent"
                style={{ "--clr": "#ff00be", "--num": 80 }}
              >
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    80<span>%</span>
                  </h2>
                  <p>Html</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card">
              <div className="percent" style={{ "--clr": "peru", "--num": 75 }}>
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75<span>%</span>
                  </h2>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
