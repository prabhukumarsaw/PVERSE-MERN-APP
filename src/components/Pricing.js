import React from 'react'
import { NavLink } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
       <div className="container-fluid bgimg2 py-5">
        <div className="container  pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">Competitive Pricing</h1>
            <div className="row">
                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mt-lg-5 mb-4">
                    <h3 className=" text-uppercase" style={{color:'red'}}>$49/-</h3><i>(Starting Price)</i><br/>
                        <h2 className="text-uppercase">DIGITAL  MARKETING</h2>
                        <small className="text-uppercase text-body mb-5">(Price Subject to change depending on the scope of work)</small>
                        <br/><br/>
                        <div className="text-center py-4">
                            <p>Search Engine Friendly</p>
                            <p>Competitor Analysis</p>
                            <p>Audits & Reporting</p>
                            <p>Google Analytics Integration</p>
                            <p>Potential to rank on Google</p>
                            <p>Clean UI/UX and Design Formating</p>
                            <p>SEO-optimized content</p>
                            <p>Social Media Strategy</p>
                            <NavLink  to="" className="button-green"style={{ textDecoration: 'none' }}>Contact Now</NavLink>
                        </div>
                    </div>
                </div>

            

                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mb-4">
                    <h3 className=" text-uppercase" style={{color:'red'}}>$59/-</h3><i>(Starting Price)</i>
                    <br/>
                        <h3 className="text-uppercase text-white">CUSTOM WEBSITE  DESIGN</h3>
                        <small className="text-uppercase text-secondary mb-5">(Price Subject to change depending on the scope of work)</small>
                        <br/><br/>
                        <div className="text-center text-secondary py-4">
                            <p>UL (6-20) Pages* (Dynamic Website)</p>
                            <p>Latest Technology Used</p>
                            <p>Responsive Layout</p>
                            <p>Web Analytics And Pixel Integration</p>
                            <p> Live Chat Integration</p>
                            <p>Payment Gateway Integration</p>
                            <p>Social Media Integration</p>
                            <p>WhatsApp Integration</p>
                            <p>SSL Certificate</p>
                            <p>Basic SEO</p>
                            <NavLink to="" className="button-green" style={{ textDecoration: 'none' }}>Contact Now</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="bg-why rounded text-center pt-5 mt-lg-5 mb-4">
                        <h3 className=" text-uppercase" style={{color:'red'}}>$69/-</h3><i>(Starting Price)</i><br/>
                        <h3 className=" text-uppercase">MOBILE APPLICATION</h3>
                        <small className="text-uppercase text-body mb-5">(Price Subject to change depending on the scope of work)</small>
                        <br/><br/>
                        <div className="text-center py-4">
                            <p>Custom Mobile App Design</p>
                            <p>Used Latest Technology</p>
                            <p>Highly responsive one-touch controls</p>
                            <p>Live Chat Integration</p>
                            <p>Social Media Integration</p>
                            <p>WhatsApp Integration</p>
                            <p>Payment Gateway Integration</p>
                            <p>Compatible With All IOS or ANDROID & BOTH</p>
                            <NavLink to="" className="button-green" style={{ textDecoration: 'none' }}>Contact Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Pricing