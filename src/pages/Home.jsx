import React from "react";
import { FaUser } from "react-icons/fa";

function Home() {
  return (
    <div className="home-grid">
      <div className="home-content">
        <div className="home-info">
          <div className="home-user">
            <FaUser style={{ fontSize: "15px" }} />
            <h3>HI I'M ASMAH</h3>
            <p>
              {" "}
              Full stack developer Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="home-list">
            <span className="home-span">
              <FaUser style={{ fontSize: "15px" }} />
              <p>Full stack developer</p>
            </span>
            <span className="home-span">
              <FaUser style={{ fontSize: "15px" }} />
              <p>Full stack developer consectetur adipisicing elit. </p>
            </span>
            <span className="home-span">
              <FaUser style={{ fontSize: "15px" }} />
              <p>Full stack developer</p>
            </span>
          </div>
        </div>
        <div className="home-contact">
          <button className="home-btn">DOWNLOAD CV</button>
          <button className="home-btn">CONTACT ME</button>
        </div>
      </div>
      <div className="home-img">
        <img src={""} className="home-img" alt="Asmah's Image" />
      </div>
    </div>
  );
}
export default Home;
