import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import About from "../About/About";

import Project from "../Project/Project";
import "./Home.css";
import BackGroud from "./BackGroud";


const Home = () => {
  const [home,setHome]=useState(true);
  const [project,setProject]=useState(false);
  const [about,setAbout]=useState(false);
 
  const handleHome=()=>{
   console.log('home');
   setHome(true);
   setProject(false);
   setAbout(false);
  }
  const handleProject=()=>{
   setHome(false);
   setProject(true);
   setAbout(false);
   console.log('project');

  }
  const handleAbout=()=>{
   setHome(false);
   setProject(false);
   setAbout(true);
   console.log('about');

  }
  return (
   

    <div className="home-container">
      <div className="star1"></div>
      <div className="star2"></div>
      <div className="star3"></div>
      <div className="star4"></div>

      <nav className="navbar">      
       <span onClick={handleHome}> <IoHome /></span>
       <span onClick={handleProject} ><FaCode /></span>
       <span onClick={handleAbout}><FaUser /></span>
     </nav>
      
       {
         about &&  <About></About>
       }
       
       {
        project &&  <Project />

       }

       {

        home && <BackGroud></BackGroud>

       }
       


    </div>
  );
};

export default Home;
