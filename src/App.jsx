import Home from './Home/Home'
import './App.css'
import About from './About/About'
import Project from './Project/Project'
// import Navbar from './Home/Navbar'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './Preloader/Loader'
import { useEffect, useState } from 'react'



const App = () => {
  const [isLoading ,setisLoading] =useState(true);

  useEffect( ()=>{
    const fakeDatafetch=()=>{
      setTimeout( ()=>{
        setisLoading(false);
      },3000);
    }
    fakeDatafetch();
  },[]);


  return  isLoading ?( <Loader/>
  ) :(
    <div>
    <Home></Home>
  
    </div>


  )
}

export default App