import React from "react";
import "./Project.css";
import { projectData } from "./ProjectData";

function Project() {
  return (
    <div className="project-grid">
      {projectData.map((item, index) => (
        <div key={index} className="project-card">
          <div className="project-image-card">
            <img className="project-image" src={item.img} alt="Project Image" />
          </div>

          <h4 className="project-header">{item.title}</h4>

          <span className="project-span">
            <a href="#" className="project-link live">
              {item.live}
            </a>
            <a href="#" className="project-link code">
              {item.code}
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Project;
