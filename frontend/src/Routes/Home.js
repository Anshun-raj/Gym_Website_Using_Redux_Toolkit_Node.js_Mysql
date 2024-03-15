import React, { useState } from "react";
import "../Style/Home.css";
function Home() {
  const [val, setVal] = useState(false);
  function confirm()
  {
    alert("button clicked")
  }
  return (
    <div className="home">
      <div className="homeInfo">
        <h4>START YOUR TRAINING AT FITLIFE</h4>
        <h2>FIT BODY NEEDS MORE TRAINING</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>
        <button className="btn" onClick={() => setVal(!val)} onDoubleClick={confirm}>
          {val ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default Home;
