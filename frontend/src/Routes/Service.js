import React, { useState } from "react";
import "../Style/Service.css";
import serviceImg1 from "../Assets/serviceImg1.jpeg";
import serviceImg2 from "../Assets/serviceImg2.jpeg";
import serviceImg3 from "../Assets/serviceImg3.jpeg";

function Service() {
  return (
    <div className="service">
      <h2>Our Services</h2>
      <div className="serviceInfo">
        <HocCard1 cmp={Counter} />
        <HocCard2 cmp={Counter} />
        <HocCard3 cmp={Counter} />
      </div>
    </div>
  );
}

function HocCard1(props)
{
  return(
    <div className="serviceCard">
      <img src={serviceImg1} alt=""  className="serviceImg"/>
      <h3>Physiotherapy</h3>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h4>
        <props.cmp />
      </h4>
    </div>
  )
}

function HocCard2(props)
{
  return(
    <div className="serviceCard">
      <img src={serviceImg2} alt="" className="serviceImg"/>
      <h3>Swimming pool</h3>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h4>
        <props.cmp />
      </h4>
    </div>
  )
}

function HocCard3(props)
{
  return(
    <div className="serviceCard">
      <img src={serviceImg3} alt="" className="serviceImg"/>
      <h3>Trainers</h3>
      <p>
        Lorem Ipsum Dolor,Sit Amet Consectetur Adipisicing Elit.Omnis In
        Excepturi.
      </p>
      <h4>
        <props.cmp />
      </h4>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>
        {count >= 1 ? "Booked for" : "Book Now for"}:{count}
      </h4>
      <button onClick={() => setCount(count + 1)} className="btn2">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="btn2">
        -
      </button>
    </div>
  );
}

export default Service;
