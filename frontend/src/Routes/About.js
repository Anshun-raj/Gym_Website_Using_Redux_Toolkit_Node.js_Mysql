import React, { useState } from "react";
import "../Style/About.css";
import aboutImg from "../Assets/aboutImg.jpg";
function About() {
  const [details,setDetails]=useState(false);
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="aboutInfo">
        <div className="aboutLeft">
        <img src={aboutImg} alt="" className="aboutImg" />
        </div>
        <div className="aboutRight">
          <h3>Best Facilities and Experienced Trainers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>{details?"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptate Inventore Explicabo Recusandae Cumque Dolor Voluptas Nihil.":""}</p>
          <div className="aboutState">
            <div class="aboutStateLeft">
              <i class="fa-solid fa-person"></i>
              <h4>Best Trainers</h4>
            </div>
            <div class="aboutStateRight">
              <i class="fa-solid fa-medal"></i>
              <h4>Award Winning</h4>
            </div>
          </div>
          <button className="btn" onClick={() => setDetails(!details)}>
          {details ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
