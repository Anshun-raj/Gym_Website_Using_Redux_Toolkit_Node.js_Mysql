import React, { useState } from "react";
import trainerImg1 from "../Assets/trainerImg2.jpeg";
import trainerImg2 from "../Assets/trainerImg3.jpeg";
import trainerImg3 from "../Assets/trainerImg4.jpeg";
import "../Style/Trainer.css";
function Trainer() {
  const [isCall1, setCall1] = useState(false);
  const [isCall2, setCall2] = useState(false);
  const [isCall3, setCall3] = useState(false);
  function Calling1() {
    setCall1(!isCall1);
    alert("Calling John..");
  }
  function Calling2() {
    setCall2(!isCall2);
    alert("Calling Roman..");
  }
  function Calling3() {
    setCall3(!isCall3);
    alert("Calling Triple..");
  }
  return (
    <div className="trainer">
      <h2>Our Trainers</h2>
      <div className="trainerInfo">
        <div className="trainerCard">
          <img src={trainerImg1} alt="" className="trainerImg" />
          <h3>Name:John Cena</h3>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <button className="btn" onClick={Calling1}>
            {isCall1 ? "Calling..." : "Contact Now"}
          </button>
        </div>
        <div className="trainerCard">
          <img src={trainerImg2} alt="" className="trainerImg" />
          <h3>Name:Roman Reign</h3>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <button className="btn" onClick={Calling2}>
          {isCall2 ? "Calling..." : "Contact Now"}
          </button>
        </div>
        <div className="trainerCard">
          <img src={trainerImg3} alt="" className="trainerImg" />
          <h3>Name:Triple H</h3>
          <div className="socialIcon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
          <button className="btn" onClick={Calling3}>
          {isCall3 ? "Calling..." : "Contact Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
