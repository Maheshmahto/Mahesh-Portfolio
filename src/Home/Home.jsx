import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import About from '../About/About';


import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
    

       <div className='star1'></div>
       <div className='star2'></div>
       <div className='star3'></div>
       <div className='star4'></div>
    
       <nav className='navbar'>
        <span href=""><IoHome /></span>
        <span href=""><FaCode />  </span>
        <span href=""><FaUser /> </span>
        <span href=""><MdContacts /></span>
      </nav>
     <About></About>
      
      {/* <img className='earth-img' src="src/Home/earthPlanet.png" alt="" />
      <img className='rocket-img' src="src/Home/indian-flag-rocket.png " alt="" />
      <h1 className='heading'>hello i'm</h1>
       <h2 className="home-heading">
        <span>M</span>
        <span>a</span>
        <span>h</span>
        <span>e</span>
        <span>s</span>
        <span>h</span>
       </h2> */}

    </div>
  )
}

export default Home
