import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <section
        id="about-faq"
        className="min-h-screen py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-vector/realistic-concept-man-working-front-laptop-vector-3d_601238-39.jpg?w=360')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }}
      >
        <div className="container mx-auto text-center px-6 bg-black bg-opacity-50">
          <div id="about" className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">About Me</h2>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-80 mb-8">
              I'm a passionate software developer with experience in web and mobile development. I love solving problems
              and creating solutions that make people's lives easier. Let me help bring your project to life!
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/portfolio" className="bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                View My Work
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Get In Touch
              </Link>
            </div>
          </div>

          <div
            id="faq"
            className="relative py-20 text-left text-gray-800 bg-black bg-opacity-50"
            style={{
              backgroundImage: "url('https://pics.craiyon.com/2023-11-13/D1LA5ZNWQi6BZPqr-PlAFg.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'left', 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container mx-auto text-left px-6 relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="border-b pb-6">
                  <h3 className="text-2xl font-semibold text-white">What services do you offer?</h3>
                  <p className="text-lg text-white mt-2">
                    I offer web development, mobile app development, and UI/UX design services tailored to your needs.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <h3 className="text-2xl font-semibold text-white">How long will my project take?</h3>
                  <p className="text-lg text-white mt-2">
                    The timeline depends on the complexity of the project, but I always ensure timely delivery.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <h3 className="text-2xl font-semibold text-white">How can I contact you?</h3>
                  <p className="text-lg text-white mt-2">
                    You can contact me via email or the contact form on this website. I'm always happy to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-800">My Resume</h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-600">You can download my full resume below:</p>
          <a
            href="path/to/resume.pdf"
            className="inline-block bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            download
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
