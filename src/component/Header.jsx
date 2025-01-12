import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Header() {
  
  return (
    <div className="header-grid">
      <div className="header-user">
        <img src={""} alt="User Image" />
        <p>ASMAH</p>
      </div>
      <div className="header-icon">
      <FaInstagram  />
      <FaSquareXTwitter />
      <FaWhatsapp />
      <CiLinkedin />
        
      </div>
    </div>
  );
}
export default Header;
