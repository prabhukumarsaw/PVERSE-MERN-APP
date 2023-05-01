import React from 'react';
import { NavLink } from 'react-router-dom';




const Portfolio = ({menuItem}) => {
  return (
    <>
    
    <div className="container-fluid py-5 bgimg3" >
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Completed Projects</h1>
           
            <div className="row portfolio-container">
            {menuItem.map((item =>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item " key={item.id}>
                    <div className="position-relative rounded overflow-hidden mb-2">
                        <img className="img-fluid w-100" src={item.image} alt=""/>
                        <div className="portfolio-btn d-flex align-items-center justify-content-center">
                            
                        <div class="team-overlay">
                        <p>{item.title}</p>
                            <br/>
                            <div class="d-flex align-items-center justify-content-start">
                            
                                <NavLink className="btn btn-lg btn-primary btn-lg-square mx-1" to={item.link}><i className="fab fa-twitter"></i></NavLink>
                                <NavLink className="btn btn-lg btn-primary btn-lg-square mx-1" to={item.link1}><i className="fab fa-facebook-f"></i></NavLink>
                                
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            ))}
               
                
               
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Portfolio