import React from "react";
import Img from "../assets/Laptop code.jpeg";
import Img1 from "../assets/laptop coding.jpeg"
import Img2 from "../assets/coding-on-laptop.jpg"
import Img3 from "../assets/Laptop img.jpeg"
function Project() {
  return (
    <div div className="project-grid">
      <div className="project-card">

        <div className="project-image-card">
          <img className="project-image" src={Img2} alt="Project Image" />
        </div>  

        <div className="project-details">
          <h4 className="project-header">Featured Project</h4>
          <p className="project-info">Language</p>

          <span className="project-link-span">
            <a href="#" className="project-link live"> Language </a>
          <a href="#" className="project-link code"> Language </a>
          </span>

        </div>

      </div>

      <div className="project-card">

        <div className="project-image-card">
          <img className="project-image" src={Img2} alt="Project Image" />
        </div>  

        <div className="project-details">
          <h4 className="project-header">Featured Project</h4>
          <p className="project-info">Language</p>

          <span className="project-link-span">
            <a href="#" className="project-link live"> Language </a>
          <a href="#" className="project-link code"> Language </a>
          </span>

        </div>
        
      </div>

      <div className="project-card">

        <div className="project-image-card">
          <img className="project-image" src={Img2} alt="Project Image" />
        </div>  

        <div className="project-details">
          <h4 className="project-header">Featured Project</h4>
          <p className="project-info">Language</p>

          <span className="project-link-span">
            <a href="#" className="project-link live"> Language </a>
          <a href="#" className="project-link code"> Language </a>
          </span>

        </div>
        
      </div>

      <div className="project-card">

        <div className="project-image-card">
          <img className="project-image" src={Img2} alt="Project Image" />
        </div>  

        <div className="project-details">
          <h4 className="project-header">Featured Project</h4>
          <p className="project-info">Language</p>

          <span className="project-link-span">
            <a href="#" className="project-link live"> Language </a>
          <a href="#" className="project-link code"> Language </a>
          </span>

        </div>
        
      </div>
    </div>
  );
}
export default Project;
