import React from "react";
import "./Home.css"
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import Img from "../../assets/coding-on-laptop.jpg"


function Home() {
  return (
    <div className="home-grid">
      <div className="home-content">
        <div className="home-info">
          <div className="home-user">
            <FaUser style={{ fontSize: "35px", color:"white", background:"black", borderRadius:"50px"}} />
            <h3>HI I'M ASMAH</h3>
            <p>"A Junior Full-Stack Developer passionate about building scalable web applications with modern JavaScript technologies like React and Node.js."</p>
          </div>
          <div className="home-list">
            <span className="home-span">
              <FaFile style={{ fontSize: "20px" }} />
              <p>Junior Full-Stack Developer</p>
            </span>
            <span className="home-span">
              <MdEmail style={{ fontSize: "20px" }} />
              <p>asmaholawunmibello@gmail.com</p>
            </span>
            <span className="home-span">
              <FaLocationDot style={{ fontSize: "20px" }} />
              <p>Nigeria</p>
            </span>
          </div>
        </div>
        <div className="home-contact">
          <button className="btn">DOWNLOAD CV</button>
          <button className="btn">CONTACT ME</button>
        </div>
      </div>
      <div className="home-img">
        <img src={Img} className="home-img" alt="Asmah's Image" />
      </div>
    </div>
  );
}
export default Home;
