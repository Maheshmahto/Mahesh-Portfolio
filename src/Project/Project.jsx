import React, { useState } from 'react';
import './Project.css'




  
  const Project = () => {

    const slides = [
      {
        title: "Sorting Visualizer",
        description:
          "You can Visualized popular sorting algorithms using customizable input options to see real changes in the algorithm’s execution",
        image: "/sort-removebg-preview.png",
        link: "https://sorting-visualizer-liart-ten.vercel.app/",
      },
      {
        title: "Resume Builder",
        description:
          "The Resume Builder includes functionalities such as add, edit, and remove sections, ensuring flexibility in tailoring resumes to individual needs. ",
        image: "/resume-removebg-preview.png",
        link: "https://resume-builder-for-developers.vercel.app/",
      },
      {
        title: "Edtech  Front-end  Website",
        description:
          "Developed a dynamic front-end application for an educational technology platform",
        image: "/edtech-removebg-preview.png",
        link: "https://edtech-ecommerce.vercel.app/",
      },
      {
        title: "Notes",
        description:
          "I built a notes app  in React that stores data in local storage, allowing users to customize the background of their notes for a personalized experience.",
        image: "/notes-removebg-preview.png",
        link: "https://notes-app-olive-zeta.vercel.app/",
      },
    ];



    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-item ${index === activeIndex ? 'active' : ''}`} >
              <div className="content">
                <h1 className="heading-text">{slide.title}</h1>
                <p className="desc">{slide.description}</p>
                <br />
                  <a href={slide.link} className="demo" >Demo</a>
              </div>             
              <div className="image">
                <img src={slide.image} 
                 

                />
              </div>
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i> Prev
          </button>
          <button onClick={handleNext}>
            Next <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  };
  
  export default Project;