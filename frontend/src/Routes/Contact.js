import React, { useState } from "react";
import Axios from "axios";

import "../Style/Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [rate, setRate] = useState();
  const [msg, setMsg] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [rateErr, setRateErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);

  function getData() {
    Axios.post("http://localhost:3001/api/insert", {
      name: name,
      age: age,
      email: email,
      rate: rate,
      msg: msg,
    }).then(() => alert("successfully inserted"));
  }

  function handleName(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setNameErr(true);
    } else {
      setName(item);
      setNameErr(false);
    }
  }

  function handleEmail(e) {
    let item = e.target.value;
    if (item.length < 7) {
      setEmailErr(true);
    } else {
      setEmail(item);
      setEmailErr(false);
    }
  }

  function handleAge(e) {
    let item = e.target.value;
    if (item.length < 2 && item.length > 3) {
      setAgeErr(true);
    } else {
      setAge(item);
      setAgeErr(false);
    }
  }

  function handleRate(e) {
    let item = e.target.value;
    if (item.length > 1 && item.length < 3) {
      setRateErr(true);
    } else {
      setRate(item);
      setRateErr(false);
    }
  }

  function handleMsg(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setMsgErr(true);
    } else {
      setMsg(item);
      setMsgErr(false);
    }
  }

  const collectData = (e) => {
    e.preventDefault();
    console.log(name, age, email, rate, msg);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contactData">
        <form method="get" onSubmit={collectData}>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={handleName}
          />
          {nameErr ? (
            <p style={{ color: "red" }}>name must be of min 4 character</p>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={handleEmail}
          />
          {emailErr ? (
            <p style={{ color: "red" }}>email must be of min 7 character</p>
          ) : null}

          <input
            type="number"
            name="age"
            placeholder="enter your age"
            min={18}
            max={50}
            onChange={handleAge}
          />
          {ageErr ? (
            <p style={{ color: "red" }}>age must be of min 2 character</p>
          ) : null}

          <select name="rate" onChange={handleRate}>
            <option>select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          {rateErr ? (
            <p style={{ color: "red" }}>rate must be of min 1 character</p>
          ) : null}

          <input
            type="text"
            name="msg"
            placeholder="enter your message"
            max={200}
            onChange={handleMsg}
          />
          {msgErr ? (
            <p style={{ color: "red" }}>rate must be of min 4 character</p>
          ) : null}
          <button className="btn5" onClick={getData}>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
