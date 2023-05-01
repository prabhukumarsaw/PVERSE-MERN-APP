import React from 'react'
import { NavLink } from 'react-router-dom';

const demos = {

  plotly:
    ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.90003173047!2d77.24107752598775!3d23.199323870164864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1682943137485!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Contact = () => {
  return (
    <>
      


            <div className="container-fluid py-5 px-0">
        
        <div className="row mx-0 justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 px-0">
                <div className="contact-form bg-contact rounded p-5">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" >
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="control-group ">
                                    <input type="text" className="form-control bg-contact border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="control-group">
                                    <input type="email" className="form-control bg-contact border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control bg-contact border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control bg-contact border-0 py-3 px-4" rows="5" id="message" placeholder="How Can Help You?" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="text-center">
                            <NavLink className="button-green" type="submit" style={{ textDecoration: 'none' }}>Send Message</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="row mt-5 mx-0">
            <div className="col-12 px-0" >
                <div className="position-relative h-100">
                <Iframe iframe={demos["plotly"]} />,
    
                </div>
            </div>
        </div>
     </>
  )
}




export default Contact