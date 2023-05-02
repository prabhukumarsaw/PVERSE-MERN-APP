import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/LOGO/logo.png';
const Footer = () => {
  return (
    <>
  
          <div className="container-fluid ftimg text-white-50 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <NavLink href="index.html" className="navbar-brand ">
                    <img src={logo} alt="" width="150" height="auto"/>
                </NavLink>
            
                <div className="d-flex justify-content-start">
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square" href="#"><i className="fab fa-instagram"></i></NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Get In Touch</h4>
                <p><i className="fa fa-map-marker-alt text-white mr-2"></i>Bhopal, M.P., INDIA</p>
                <p><i className="fa fa-phone-alt text-white mr-2"></i>+91 9102041348</p>
                <p><i className="fa fa-envelope text-white mr-2"></i>verse.official@outlook.com</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <NavLink className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right text-white mr-2"></i>Home</NavLink>
                    <NavLink className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right text-white mr-2"></i>About Us</NavLink>
                    <NavLink className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right text-white mr-2"></i>Our Services</NavLink>
                    <NavLink className="text-white-50 mb-2" to="/"><i className="fa fa-angle-right text-white mr-2"></i>Pricing Plan</NavLink>
                    <NavLink className="text-white-50" to="/"><i className="fa fa-angle-right text-white mr-2"></i>Contact Us</NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
                <p className="mb-4">Connect to get Update</p>
                <div className="w-100 mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-4 px-sm-3 px-md-5" >
        <p className="mb-2 text-center text-white-50">&copy;  Copyright © 2023 PrabhuVerse - All Rights Reserved</p>
    </div>

    
    
    
     </>
  )
}




export default Footer