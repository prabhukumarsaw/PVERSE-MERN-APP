import React from 'react'
import blog_1 from "../img/blog-1.jpg"
import blog_3 from "../img/blog-2.jpg"
import blog_2 from "../img/blog-3.jpg"

const Blog = () => {
  return (
    <>
    <div className="container-fluid ftimg py-5">
        <div className="container py-5">
            <h1 className="display-4 text-uppercase text-center mb-5">BLOG</h1>
            <div className="owl-carousel team-carousel position-relative">
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={blog_1} alt=""/>
                      
                    </div>
                    <div className="bg-blog text-center p-4">
                        <p className="text-justify">How To Write Good And Urgent Essays</p>
                     
                    </div>
                </div>
                <div className="team-item  rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={blog_2} alt=""/>
                        
                    </div>
                    <div className="bg-blog text-center p-4">
                        <p className="text-justify">How To Write Good And Urgent Essays</p>
                     
                    </div>
                </div>
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={blog_3} alt=""/>
                       
                    </div>
                    <div className="bg-blog text-center p-4">
                        <p className="text-justify">How To Write Good And Urgent Essays</p>
                     
                    </div>
                </div>
                <div className="team-item rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={blog_1} alt=""/>
                        
                    </div>
                    <div className="bg-blog text-center p-4">
                        <p className="text-justify">How To Write Good And Urgent Essays</p>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog