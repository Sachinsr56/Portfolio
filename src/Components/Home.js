import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="home pb-5"
      style={{
        textAlign: "center",
        background:
          "linear-gradient(to bottom, rgba(204, 229, 229, 0.1) 0%, #F5F5F5 10%, #F5F5F5 90%, rgba(204, 229, 229, 0.1) 100%)",
      }}
    >
      <h2
        style={{
          fontWeight: "700",
          fontSize: "3.75rem",
          marginBottom: "1rem",
          marginTop: "7rem",
          textAlign: "center",
        }}
      >
        Hey, I'm Sachin Kumar
      </h2>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#555",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Passionate web developer dedicated to creating
        <br />
        seamless digital solutions with a focus on clean design and user-centric
        experiences.
      </p>
      <button
        className="btn btn-primary"
        style={{
          paddingTop: "0.625rem",
          paddingBottom: "0.625rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          fontSize: "1.25rem",
          letterSpacing: "0.0625rem",
        }}
      >
        Download CV
      </button>
    </div>
  );
};

export default Home;
