import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../assets/Laptop code.jpeg";


function Header() {
  
  return (
    <div className="header-grid">
      <div className="header-user">
        <img src={Img} alt="User Image" />
        <p>ASMAH</p>
      </div>
      <div className="header-icon">
      {/* <NavLink to='/' >Home</NavLink>
      <NavLink to='/about' >About</NavLink>
      <NavLink to='/skills' >Skills</NavLink>
      <NavLink to='/project' >Project</NavLink>
      <NavLink to='/contact' >Contact</NavLink> */}
        
      </div>
    </div>
  );
}
export default Header;
