import React from "react";
import "./Skills.css"
import { skillsData } from "./SkillsData";

function Skills() {
  return (
      <div className="skills-grid">
        {skillsData.map((item, index) =>(
            <div key={index} className="skills-card">
              <h4 className="text-3xl">{item.name}</h4>
              <p className="text-sm">{item.years}</p>
            </div>
          )
        )}
      </div>
    
  );
}

export default Skills;
