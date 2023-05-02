import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import header from "../img/header.png"
import About from '../components/About';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import portfolios from '../data/portfolios';
import Testimonial from '../components/Testimonial';
import Plan from '../components/Plan';
import Workflow from '../components/Workflow';
import Pricing  from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Why from '../components/Why';

const Home = () => {
  const [menuItem] = useState(portfolios);
  return (
    <>
       
    <div className="container-fluid bgimg1 py-5 px-0" >
        <div className="row mx-0  align-items-center">
            <div className="col-lg-6 px-md-5 text-center text-lg-left">
                <h3 className="display-2 text-uppercase mb-3">GET BEST QUALITY WEBSITE IN 12 HOURS</h3>
                <h5 className="text-justify mb-4">I welcome you to share your thoughts with me, as well. Let the overthinking begin!.</h5>
                <NavLink  to="#" className="button-green" style={{ textDecoration: 'none' }}>Get in Touch Now</NavLink>
            </div>
            <div className="col-lg-6 px-0 text-right">
                <img className="img-fluid mt-5 mt-lg-0" src={header} alt=""/>
            </div>
        </div>
    </div>

    <About/>
    <Service/>
    <Portfolio menuItem={menuItem}/>
    <Testimonial/>
    <Plan/>
    <Workflow/>
    <Pricing/>
    <Why/>
    <Blog/>
    <Contact/>
    <Footer/>
    
    
    
    </>
  )
}

export default Home