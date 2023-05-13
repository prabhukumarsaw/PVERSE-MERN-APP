import React from 'react'
import "../App.css";
import WhatsAppWidget from './whatsapp';
import { NavLink } from 'react-router-dom';
import Logo from "../img/LOGO/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
      

  return (
    <>

    <div className="container-fluid bg-black position-relative">
        <nav className="navbar navbar-expand-lg  navbar-light py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand ">
                <img src={Logo} alt="" width="150px" height="100px"/>
            </NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ml-auto py-0 pr-3 border-right">
                    <NavLink to="/" className="nav-item nav-link ">Home<span className="sr-only">(current)</span></NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                    <NavLink to="/portfolio" className="nav-item nav-link">Projects</NavLink>
                    <NavLink to="/testimonial" className="nav-item nav-link">Testimonial</NavLink>
                    <NavLink to="/pricing" className="nav-item nav-link">Prices</NavLink>
                    <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
                <div className="d-none d-lg-flex align-items-center pl-4">
                { isAuthenticated && <div>  <h6 className="text-body text-uppercase mb-1"><small>{user.name}</small></h6> </div>}

                    { isAuthenticated ? (
                    <button  className="nav-item nav-link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>)

                    : (<button  className="nav-item nav-link" onClick={() =>loginWithRedirect()}>Login</button>)}
                    
                    
                </div>
            </div>
        </nav>
    </div>
    
    <WhatsAppWidget/>
    </>
  )
}

export default Navbar