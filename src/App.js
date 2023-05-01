import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";



const App = () => {
  return (
    <>
      <Navbar/>
    
    <Routes>
      <Route path ="/" element={<Home />}>
        
      </Route>

      <Route path ="/about" element={<About />}>
        
      </Route>

      <Route path ="/service" element={<Service />}>
        
      </Route>

      <Route path ="/portfolio" element={<Portfolio />}> 
        
      </Route>

      <Route path ="/pricing" element={<Pricing />}>
        
      </Route>
      <Route path ="/testimonial" element={<Testimonial />}>
        
      </Route>
      <Route path ="/blog" element={<Blog />}>
        
      </Route>
      <Route path ="/contact" element={<Contact />}>
        
      </Route>
      </Routes> 
      
    
    
    </>
  )
}

export default App