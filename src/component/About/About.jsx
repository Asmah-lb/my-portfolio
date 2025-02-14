import React from "react";
import "./About.css"
import {data} from "./AboutData"


function About() {
  return (
    <div className="about">
    
      <div className="about-details">
        <h4 className="about-header" >About Asmah</h4>
        <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laudantium, placeat consequatur sit reiciendis perspiciatis quod aliquam quo adipisci provident vitae facere velit! Delectus, fuga dolor! Sit a saepe quod?</p>
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
