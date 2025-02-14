import React from "react";
import "./Header.css"
import Img from "../../assets/Laptop code.jpeg";


function Header() {
  
  return (
    <div className="header-grid">
      <div className="header-user">
        <img src={Img} alt="Asmah's Image" />
        <p>ASMAH</p>
      </div>
      <div className="header-icon">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Skills</h4>
      <h4>Projects</h4>
      <h4>Contact</h4>
      
        
      </div>
    </div>
  );
}
export default Header;
