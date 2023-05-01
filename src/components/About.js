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
                        I Build Websites Designed For Sales</h1>
                   <p className="text mb-2">Hi there! My name is Prabhu Kumar and I specialize in creating professional websites & Mobile Application since 2018. </p>
                    <p className="text mb-2">
                        I have finished 480+ overall orders and have racked up 300+ reviews. With my background in web design and digital marketing,
                         I have the skills and knowledge to help businesses of all sizes establish and grow their online presence.</p>
                        
                         
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
