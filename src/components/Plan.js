import React from 'react';
import human from '../img/humandriven.svg';
import code from '../img/build-better-code.svg';
import valid from '../img/whitepaper-validation.svg';

const Plan = () => {
  return (
    <>
        <div className="container-fluid bgimg2 py-5">
        <div className="container  pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Why Choose Me</h1>
            <div className="row">
                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mt-lg-5 mb-4">
                        <img decoding="async" width="185" height="249" src={human} alt=""  data-lazy-src={human} data-ll-status="loaded"/>
                        <h3 className="text-uppercase">5+ Years of experience</h3>
                        
                        <div className="text-center text-secondary p-4">
                            <p>
                                With so much of experience in creating and redesigning websites for 
                                businesses of all sizes and industries. I know how to make your website 
                                stand out from the crowd.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mb-4">
                        <img decoding="async" width="185" height="249" src={code} alt=""  data-lazy-src={code} data-ll-status="loaded"/>
                        <h3 className="text-uppercase">honest communication</h3>
                        
                        <div className="text-center text-secondary p-4">
                            <p>
                                I understand the importance of clear and transparent communication and make it a priority to keep clients in the loop throughout the entire process.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mt-lg-5 mb-4">
                        <img decoding="async" width="185" height="249" src={valid} alt=""  data-lazy-src={valid} data-ll-status="loaded"/>
                        <h3 className="text-uppercase">Result oriented approach</h3>
                        
                        <div className="text-center text-secondary p-4">
                            <p>
                                From understanding your goals and using data-driven insights, to prioritizing user experience and continuous improvement, I will help you achieve success with your website.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Plan