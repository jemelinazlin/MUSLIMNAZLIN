import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'
import Services from './assets/Pages/Services'
import Portfolio from './assets/Pages/Portfolio'
import Contact from './assets/Pages/Contact'
import ContactFooter from './assets/Components/Footer';


function App() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <ContactFooter/>
    </div>
  )
}

export default App