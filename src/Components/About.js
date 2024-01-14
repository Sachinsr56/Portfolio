import React from "react";

const About = () => {
  return (
    <div id="about" className="p-5">
      <h2
        className="mt-5"
        style={{ textAlign: "center", letterSpacing: "1px" }}
      >
        ABOUT ME
      </h2>
      <hr
        style={{
          borderTop: "5px solid grey",
          borderRadius: "20%",
          width: "50px",
          margin: "0 auto",
          marginBottom: "100px",
        }}
      />
      <div
        className="row mb-5"
        style={{ justifyContent: "center", columnGap: "50px" }}
      >
        <div className="col-md-4">
          <div className="card">
            <p
              style={{ fontSize: "15px", color: "grey", letterSpacing: "1px" }}
            >
              As a <span style={{ fontWeight: "600" }}> Web Developer</span>, I
              craft impactful Websites and Web Applications, contributing to the
              success of diverse projects. Explore my{" "}
              <span style={{ fontWeight: "600" }}>portfolio</span> to witness
              the fusion of creativity and functionality. Open to new
              opportuniFties, I seek roles that align with my skills and foster
              continuous learning and growth. If you have an exciting
              opportunity, let's{" "}
              <span style={{ fontWeight: "600" }}> connect</span> and
              collaborate for mutual success.
            </p>
            <a
              href="#contact"
              style={{ width: "60%", letterSpacing: "1px" }}
              className="btn btn-primary p-3"
            >
              CONTACT
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <h2 className="mb-3" style={{ fontWeight: "600" }}>My Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                HTML
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                CSS
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                JavaScript
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                React.js
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                Node.js
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                MongoDB
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                PostMan
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                C/C++
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                Python
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                Responsive Design
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                SQL Basics
              </button>
              <button
                className="btn btn-sm m-2 p-3 pt-2 pb-2"
                style={{ background: "#eee", color: "grey" }}
              >
                Data Structure & Algorithm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
