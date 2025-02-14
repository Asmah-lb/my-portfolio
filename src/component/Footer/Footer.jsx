import React from 'react'
import "./Footer.css"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer m-4 min-w-[100%] h-[15vh]'>
      <hr/>
      <span className='footer-span  flex justify-between text-3xl'>
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
