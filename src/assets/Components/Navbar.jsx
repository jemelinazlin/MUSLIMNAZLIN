import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-4 px-6 fixed w-full top-0 left-0 z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-extrabold text-3xl text-white hover:text-indigo-200 transition duration-500 transform hover:scale-110"
        >
          [Your Name]
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/about"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/blog"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/portfolio"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/price"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            Price
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="relative group text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-5 px-6 transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/about"
              className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
