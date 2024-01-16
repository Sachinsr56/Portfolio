import Blog from "../Assest/Blog.png";
import Chat from "../Assest/chat.png";
import Calendar from "../Assest/Calendar.png";
import Movie from "../Assest/Movie.png";
import React from "react";
const Project = () => {
  return (
    <div
      id="projects"
      className="p-5"
      style={{
        background:
          "linear-gradient(to bottom, rgba(204, 229, 229, 0.1) 0%, #F5F5F5 10%, #F5F5F5 90%, rgba(204, 229, 229, 0.1) 100%)",
      }}
    >
      <h1 className="mb-5" style={{ textAlign: "center" }}>
        PROJECTS
      </h1>
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
        className="row mt-5 mb-5"
        style={{ justifyContent: "center", marginBottom: "5%" }}
      >
        <div className="image-container col-md-5">
          <a href="https://github.com/Sachinsr56/BlogApp" target="_blank">
            <img className="image col-md-12" src={Blog} alt="BlogApp" />
            <div className="image-name">
              <h2 style={{ textAlign: "center" }}>BlogApp</h2>
              <p>
                Explore my Blog App—a platform weaving insights and experiences
                into captivating narratives and valuable content.
              </p>
            </div>
          </a>
        </div>
        <div className="image-container col-md-5">
          <a href="https://github.com/Sachinsr56/Ichat" target="_blank">
            <img className="image col-md-12" src={Chat} alt="ChatApp" />
            <div className="image-name">
              <h2 style={{ textAlign: "center" }}>ChatApp</h2>
              <p>Connect through seamless conversations in my Chat App.</p>
            </div>
          </a>
        </div>
      </div>
      <div
        className="row mt-5"
        style={{ justifyContent: "center", marginBottom: "5%" }}
      >
        <div className="image-container col-md-5">
          <a href="https://mycale.vercel.app/" target="_blank">
            <img className="image col-md-12" src={Calendar} alt="Calendar" />
            <div className="image-name">
              <h2 style={{ textAlign: "center" }}>Calendar</h2>
              <p>
                Easily manage events and schedules with our intuitive Calendar
                application.
              </p>
            </div>
          </a>
        </div>
        <div className="image-container col-md-5">
          <a href="https://github.com/Sachinsr56/Movie-App" target="_blank">
            <img className="image col-md-12" src={Movie} alt="ChatApp" />
            <div className="image-name">
              <h2 style={{ textAlign: "center" }}>MovieApp</h2>
              <p>Explore films effortlessly with my Movie App.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
