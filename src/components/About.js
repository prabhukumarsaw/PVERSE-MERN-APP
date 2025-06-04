import React from 'react'
import about from "../img/about.png"
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
          
    <div className="container-fluid py-5 bgimg">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img className="img-fluid mb-4 mb-lg-0" src={about} alt=""/>
                </div>
                <div className="col-lg-6 ">
                    <h1 className="display-4 text-uppercase mb-2">
                    Hire me solo or with my expert team</h1>
                   <p className="text mb-2">Hi there! My name is Prabhu Kumar and I specialize in creating professional websites & Mobile Application since 2018. </p>
                    <p className="text mb-2">
                    Hi, I’m Prabhu Kumar, a Full-Stack Product Developer with over 7 years of experience delivering 480+ projects, from hospital websites to AI-powered apps. Whether you need a robust e-commerce platform, a scalable POS system, a custom mobile app, or end-to-end software development, I’ve got you covered—from Figma design to cloud deployment.</p>
                        
                         
                         <p className="text mb-2">
                        If you're in need of a reliable and experienced Full Stack Developer and marketer, don't hesitate to get in touch!</p>
                    <NavLink  to="" className="button-green" style={{ textDecoration: 'none' }}>GET A QUOTE</NavLink>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default About
