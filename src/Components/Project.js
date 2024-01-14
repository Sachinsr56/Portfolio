import Blog from "../Assest/BlogApp.gif";
import Chat from "../Assest/ChatApp.gif";
import NewsApp from "../Assest/NewApp.gif";
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
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        Projects
      </h2>
      <div className="row" style={{ justifyContent: "center",marginBottom:'5%' }}>
        <div className="image-container col-md-5">
          <img className="image col-md-12" src={Blog} alt="BlogApp" />
          <div className="image-name">BlogApp</div>
        </div>
        <div className="image-container col-md-5">
          <img className="image col-md-12" src={Chat} alt="ChatApp" />
          <div className="image-name">ChatApp</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
