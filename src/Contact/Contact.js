import React from "react";
import Footer from '../Footer/Footer'
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="contact-section">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. We will come back to you within a matter of hours to help
          you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control md-textarea"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a
                className="btn btn-primary w-100"
                style={{"backgroundColor":"rgb(32, 49, 91)","border":"none"}}
                href="/"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-phone mt-4 fa-1x"></i>
                <p>+91 8534906885</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>sachinsmr56@gmail.com</p>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/sachinsr56/">
                <i className="fab fa-linkedin-in fa-2x"></i>
                <p>Sachinsr56</p>
                </a>
              </li>
              <li>
              <a href="https://github.com/Sachinsr56">
                <i className="fab fa-github fa-2x"></i>
                <p>Sachinsr56</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
