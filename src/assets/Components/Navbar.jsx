import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-4 px-6 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-white hover:text-indigo-200 transition duration-300 transform hover:scale-105"
        >
          <img
            src="/logo.webp" // Reference the logo directly from the public folder
            alt="Stream Solutions Logo"
            className="h-14 w-auto object-contain" // Increase height to 14 and maintain aspect ratio
          />
          <span><b>STREAM SOLUTIONS</b></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {['About', 'Services', 'Portfolio'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group text-white hover:text-indigo-200 transition duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-200 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact Us Bar */}
        <Link
          to="/contact"
          className="hidden md:block bg-white text-indigo-700 hover:bg-indigo-100 px-6 py-2 rounded-full font-medium text-sm transition shadow-md"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-5 px-6 shadow-lg"
        >
          <div className="flex flex-col items-center space-y-6">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-white hover:text-indigo-200 transition duration-300"
                onClick={closeMobileMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

