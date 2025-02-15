import React from 'react'
import "./Footer.css"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <span className='footer-span'>
        <h4>Asmah Lukman-Bello</h4>
        <div className='flex gap-5 '>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaWhatsapp/></a>
            <a href='#'><AiOutlineLinkedin /></a>
        </div>
      </span>
    </div>
  )
}

export default Footer
