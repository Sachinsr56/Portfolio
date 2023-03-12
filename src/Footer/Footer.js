import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <footer className="bg-light text-center text-white">
        <div className="container p-1 pb-0">
          <section className="mb-2">
            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#ac2bac" }}
              href="https://www.instagram.com/ksachin___/"
              role="button"
            >
              <i className="fab fa-instagram "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#0082ca" }}
              href="https://www.linkedin.com/in/sachinsr56/"
              role="button"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#333333" }}
              href="https://github.com/Sachinsr56"
              role="button"
            >
              <i className="fab fa-github "></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "background-color": "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google "></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)", color: "black" }}
        >
          © 2023 Copyright:
          <a className="text-black" href="https://mdbootstrap.com/">
            sachinsmr56@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
