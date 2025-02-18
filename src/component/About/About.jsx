import React from "react";
import "./About.css"
import {data} from "./AboutData"


function About() {
  return (
    <div className="about">
    
      <div className="about-details">
        <h4 className="about-header" >About Asmah</h4>
        <p className="about-para">I'm a Full Stack Developer with experience in JavaScript, React, Node.js, HTML, and CSS. I enjoy building user-friendly and efficient web applications, focusing on clean code and scalable solutions. </p>
        <p className="about-para">I’m always eager to learn new technologies and improve my skills through hands-on projects. When I’m not coding, I enjoy exploring new ideas, solving challenges, and staying up to date with industry trends. Feel free to check out my projects and connect with me!</p>
      </div>


      <div className="about-qualification" >
        <h3>Education</h3>
        <div className="about-grid">
          {data.map((item, index)=>(
            <div key={index} className="about-card">
          <h4>{item.degree}</h4>
          <p>{item.organizationName}</p>
          <p>{item.dateOfAttendance}</p>
          <p>{item.skillGained}</p>
            </div>
          ))}
        </div>
      </div>


      </div>
  );
}
export default About;
