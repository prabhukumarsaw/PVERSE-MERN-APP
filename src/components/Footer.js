import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
  
          <div className="container-fluid ftimg text-white-50 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <NavLink href="index.html" className="navbar-brand ">
                    <img src="./img/LOGO/logo.png" alt="" width="150" height="auto"/>
                </NavLink>
                <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <h6 className="text-uppercase text-white py-2">Follow Us</h6>
                <div className="d-flex justify-content-start">
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></NavLink>
                    <NavLink className="btn btn-lg btn-primary btn-lg-square" href="#"><i className="fab fa-instagram"></i></NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Get In Touch</h4>
                <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <p><i className="fa fa-map-marker-alt text-white mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt text-white mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope text-white mr-2"></i>info@example.com</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <NavLink className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right text-white mr-2"></i>Home</NavLink>
                    <NavLink className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right text-white mr-2"></i>About Us</NavLink>
                    <NavLink className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right text-white mr-2"></i>Our Services</NavLink>
                    <NavLink className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right text-white mr-2"></i>Pricing Plan</NavLink>
                    <NavLink className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right text-white mr-2"></i>Meet The Team</NavLink>
                    <NavLink className="text-white-50" href="#"><i className="fa fa-angle-right text-white mr-2"></i>Contact Us</NavLink>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
                <p className="mb-4">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <div className="w-100 mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
                <i>Lorem sit sed elitr sed kasd et</i>
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