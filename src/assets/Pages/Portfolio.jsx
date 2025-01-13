import React from 'react';
import zuri from './zuri.png';
import Nyumbani from './nyumbani.png';

function Portfolio() {
  // Portfolio data
  const portfolioProjects = [
    {
      image: zuri,
      title: "Zuri Fashion Trends",
      description: "A responsive Ecommerce website built using React and Tailwind CSS. Features a smooth user experience and modern design elements.",
      link: "https://your-portfolio.com",
    },
    {
      image: Nyumbani,
      title: "Nyumbani Real Estates",
      description: "Nyumbani real estates seeks to revolutionalize real estate management with features designed to ease house listings, searching and tenant management.",
      link: "https://muslimcreates.github.io/rentalsystem2",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "E-commerce Platform",
      description: "An e-commerce website featuring an intuitive product catalog, secure checkout system, and integrated payment gateway.",
      link: "https://yourecommerce.com",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "React Data Table Library",
      description: "An open-source React library for creating customizable, responsive data tables with sorting, pagination, and filtering.",
      link: "https://github.com/yourgithub/react-data-table",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative pt-32 overflow-hidden">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-gray-800">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
                >
                  View Project
                </a>
              </div>

              {/* Title and Description */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
