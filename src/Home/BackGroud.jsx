import React from "react";
import "./Home.css";
const BackGroud = () => {
  return (
    <div className="home-name">
      <img
        className="blackhole"
        src="/black-holes-removebg-preview.png"
        alt=""
      />
      <img className="earth-img" src="/earthPlanet.png" alt="" />
      <div className="introduction">
        <p className="hello">Hi 👋, I'm Mahesh</p>
        <p className="myname">i am a frontend-developer </p>
      </div>
    </div>

  )
}

export default BackGroud
