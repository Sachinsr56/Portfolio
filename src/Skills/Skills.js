import React from "react";
import "./Skills.css";
const Skills = () => {
  let number=document.getElementById('skills-count');
  let counter=0;
  setInterval(()=>{
    if(counter===65){
      clearInterval();
    }
    else{
      counter+=1;
      number.innerHTML=counter+'%';
    }
  },30)
  return (
    <div class="skills-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center mt-5">
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipsicing elit.</p>
          </div>
          <div class="row">
            <div className="col-lg-2"></div>
            <div class="col-lg-3">
              <div className="skill">
                <div className="outer">
                  <div className="inner">
                    <div id="skills-count">65%</div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="160px"
                  height="160px"
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
