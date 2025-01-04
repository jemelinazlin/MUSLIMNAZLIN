import React, { useEffect, useState } from 'react';

function Portfolio() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generateRandomPositions = () => {
      const randomPositions = Array.from({ length: 6 }, () => ({
        top: `${Math.random() * 20 - 10}%`,
        left: `${Math.random() * 20 - 10}%`, 
        rotate: `${Math.random() * 20 - 10}deg`,
      }));
      setPositions(randomPositions);
    };

    generateRandomPositions();
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          My Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:translate-y-6 relative">
            <div
              className="absolute w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300"
              style={{
                top: positions[0]?.top,
                left: positions[0]?.left,
                transform: `rotate(${positions[0]?.rotate})`,
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Web Project 1"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-300">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-600 mb-4 transition-all duration-300">
              A responsive portfolio website built using React and Tailwind CSS. Features a smooth user experience and modern design elements.
            </p>
            <a
              href="https://your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block transform hover:scale-110 transition-all duration-300"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:translate-y-6 relative">
            <div
              className="absolute w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300"
              style={{
                top: positions[1]?.top,
                left: positions[1]?.left,
                transform: `rotate(${positions[1]?.rotate})`,
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Mobile App 1"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-300">
              Fitness Tracker App
            </h3>
            <p className="text-gray-600 mb-4 transition-all duration-300">
              A mobile app designed to track fitness progress with real-time data analysis. Built with React Native for both iOS and Android.
            </p>
            <a
              href="https://yourapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block transform hover:scale-110 transition-all duration-300"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:translate-y-6 relative">
            <div
              className="absolute w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300"
              style={{
                top: positions[2]?.top,
                left: positions[2]?.left,
                transform: `rotate(${positions[2]?.rotate})`,
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="E-commerce Site"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-300">
              E-commerce Platform
            </h3>
            <p className="text-gray-600 mb-4 transition-all duration-300">
              An e-commerce website featuring an intuitive product catalog, secure checkout system, and integrated payment gateway.
            </p>
            <a
              href="https://yourecommerce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block transform hover:scale-110 transition-all duration-300"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:translate-y-6 relative">
            <div
              className="absolute w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300"
              style={{
                top: positions[3]?.top,
                left: positions[3]?.left,
                transform: `rotate(${positions[3]?.rotate})`,
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Open-Source Project"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-all duration-300">
              React Data Table Library
            </h3>
            <p className="text-gray-600 mb-4 transition-all duration-300">
              An open-source React library for creating customizable, responsive data tables with sorting, pagination, and filtering.
            </p>
            <a
              href="https://github.com/yourgithub/react-data-table"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block transform hover:scale-110 transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-200 via-green-100 to-teal-100 opacity-20 transform rotate-45 origin-top-right h-full w-full"></div>
    </section>
  );
}

export default Portfolio;
