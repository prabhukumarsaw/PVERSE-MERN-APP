import React from 'react'
import testimonial from "../img/header1.png";




const Testimonial = () => {
  return (
    <>
            <div className="container-fluid py-5 bgimg2">
        <div className="container py-5">
            <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item position-relative text-center rounded p-4">
                    <img className="img-fluid rounded mx-auto my-4" src={testimonial} alt=""/>
                    <h5 className="text-uppercase">Client Name</h5>
                    <p className="text-uppercase">Profession</p>
                    <p className="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                </div>
                <div className="testimonial-item position-relative text-center rounded p-4">
                    <img className="img-fluid rounded mx-auto my-4" src={testimonial} alt=""/>
                    <h5 className="text-uppercase">Client Name</h5>
                    <p className="text-uppercase">Profession</p>
                    <p className="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                </div>
                <div className="testimonial-item position-relative text-center rounded p-4">
                    <img className="img-fluid rounded mx-auto my-4" src={testimonial} alt=""/>
                    <h5 className="text-uppercase">Client Name</h5>
                    <p className="text-uppercase">Profession</p>
                    <p className="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                </div>
                <div className="testimonial-item position-relative text-center rounded p-4">
                    <img className="img-fluid rounded mx-auto my-4" src={testimonial} alt=""/>
                    <h5 className="text-uppercase">Client Name</h5>
                    <p className="text-uppercase">Profession</p>
                    <p className="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Testimonial