import React from "react";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";

function About() {
  return (
    <div className="about">
      <hr />

      <div className="about-grid">
        <div className="about-card">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="about-card">
          <FaCss3 />
          <p>CSS</p>
        </div>
        <div className="about-card">
          <IoLogoJavascript />
          <p>JAVA SCRIPT</p>
        </div>
        <div className="about-card">
          <FaReact />
          <p>REACT</p>
        </div>
        <div className="about-card">
          <FaNodeJs />
          <p>NODE JS</p>
        </div>
      </div>
    </div>
  );
}
export default About;
