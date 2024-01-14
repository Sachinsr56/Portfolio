import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-5 mt-5">
      <div className="row">
        <div className="col-md-9">
          <h4 className="mb-4" style={{ fontWeight: "600" }}>
            Sachin Kumar
          </h4>
          <p>
            Passionate web developer dedicated to creating seamless digital
            solutions with a focus
            <br /> on clean design and user-centric experiences.
          </p>
        </div>
        <div className="col-md-3">
          <h3>Social</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/ksachin___/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-instagram "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/sachinsr56/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Sachinsr56"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github "></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter "></i>
            </a>
          </div>
        </div>
      </div>
      <hr style={{ borderBottom: "2px solid white" }} />
      <div
          className="text-center p-3"
        >
          © 2024 Copyright:
          <a className="text-white m-2" href="#!">
            sachinkumarhaas@gmail.com
          </a>
        </div>

    </div>
  );
};

export default Footer;
