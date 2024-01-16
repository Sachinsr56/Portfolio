import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2
        className="mt-5"
        style={{
          color: "grey",
          fontWeight: "600",
          textAlign: "center",
          letterSpacing: "4px",
          fontSize: "35px",
        }}
      >
        CONTACT
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
      <p
        className="ms-auto me-auto mb-4 mt-4"
        style={{
          textAlign: "center",
          color: "grey",
          width: "65%",
          fontSize: "20px",
        }}
      >
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div
        className="col-md-8 mt-5 ms-auto me-auto p-5"
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
      >
        <label
          htmlFor="name"
          className="form-label mb-3"
          style={{ color: "grey", fontWeight: "600" }}
        >
          Name
        </label>
        <input
          type="text"
          className="form-control p-3"
          name="name"
          required
          style={{
            background: "#f5f5f5",
            border: "none",
            fontWeight: "600",
            color: "grey",
          }}
        />
        <label
          htmlFor="email"
          className="form-label mt-4 mb-3"
          style={{ color: "grey", fontWeight: "600" }}
        >
          Email
        </label>
        <input
          type="text"
          className="form-control p-3"
          name="email"
          required
          style={{
            background: "#f5f5f5",
            border: "none",
            fontWeight: "600",
            color: "grey",
          }}
        />
        <label
          htmlFor="message"
          className="form-label mt-4 mb-3"
          style={{ color: "grey", fontWeight: "600" }}
        >
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          rows="5"
          style={{
            background: "#f5f5f5",
            border: "none",
            fontWeight: "600",
            color: "grey",
            resize: "both",
          }}
          required
        ></textarea>
        <a
          href="/"
          className="btn btn-secondary mt-4 p-2"
          style={{
            fontWeight: "600",
            letterSpacing: "1px",
            width: "20%",
            justifyContent: "right",
          }}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default Contact;
