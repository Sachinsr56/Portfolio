import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="shadow-effect p-5">
      <h2 className="mb-4" style={{ textAlign: "center" }}>
        Experience
      </h2><hr
        style={{
          borderTop: "5px solid grey",
          borderRadius: "20%",
          width: "50px",
          margin: "0 auto",
          marginBottom: "100px",
        }}
      />
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-md-3" >
          <div
            className="card p-4"
            style={{
              background: "#006883",
              color: "white",
              textAlign: "center",
            }}
          >
            <p className="mt-3">JAN 2023 - MAY 2023</p>
            <h3 className="mt-3 mb-4">SIMULAS</h3>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card" style={{ color: "grey", fontSize: "17px" }}>
            <p>
              <span style={{ fontWeight: "600" }}>Tested backend APIs</span>,
              promptly identifying and resolving issues for optimal system
              performance.
              <br />
              Contributed to{" "}
              <span style={{ fontWeight: "600" }}>API development</span> and
              optimization for improved system efficiency and user experience.
              <br />
              Implemented{" "}
              <span style={{ fontWeight: "600" }}>
                MongoDB aggregation{" "}
              </span>{" "}
              techniques, ensuring precise validation and a 90% reduction in
              data errors.
              <br />
              Fostered collaboration with the{" "}
              <span style={{ fontWeight: "600" }}>QA team,</span> actively
              contributing to high-quality software delivery.
              <br />
              Collaborated with the development team for effective issue
              resolution and timely outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3" style={{ justifyContent: "center" }}>
        <div className="col-md-3">
          <div
            className="card p-4"
            style={{
              background: "#006883",
              color: "white",
              textAlign: "center",
            }}
          >
            <p className="mt-3">JULY 2023 - SEP 2023</p>
            <h3 className="mt-3 mb-4">TOUCHSTONE AI</h3>
          </div>
        </div>
        <div className="col-md-8 mt-3">
          <div className="card" style={{ color: "grey", fontSize: "18px" }}>
            <p>
              Actively contributed to developing a web application from
              inception.
              <br />
              Responsively adjusted the
              <span style={{ fontWeight: "600" }}> UI </span> based on user
              feedback, incorporating regular updates.
              <br />
              Used version control systems like
              <span style={{ fontWeight: "600" }}> Git</span> for seamless
              teamwork and organized modifications.
              <br />
              Collaborated with team members for cross-platform user{" "}
              <span style={{ fontWeight: "600" }}>data management</span> ,
              enhancing functionality.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
