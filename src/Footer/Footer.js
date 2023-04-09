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
              style={{ "backgroundColor": "#ac2bac" }}
              href="https://www.instagram.com/ksachin___/"
              target='_blank'
              rel="noreferrer"
              role="button"
            >
              <i className="fab fa-instagram "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "backgroundColor": "#0082ca" }}
              href="https://www.linkedin.com/in/sachinsr56/"
              role="button"
              target='_blank'
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "backgroundColor": "#333333" }}
              href="https://github.com/Sachinsr56"
              role="button"
              target='_blank'
              rel="noreferrer"
            >
              <i className="fab fa-github "></i>
            </a>
            <a
              className="btn text-white btn-floating m-1"
              style={{ "backgroundColor": "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "backgroundColor": "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter "></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ "backgroundColor": "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google "></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)", color: "black" }}
        >
          © 2023 Copyright:
          <a className="text-black" href="#!">
            sachinsmr56@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
