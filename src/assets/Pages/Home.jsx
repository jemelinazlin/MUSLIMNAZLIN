import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center text-grey h-screen flex items-center justify-center text-center px-12 relative pt-40 sm:pt-32" // Adjusted padding for mobile and desktop
        style={{
          backgroundImage: "url('https://media.licdn.com/dms/image/D4D12AQFAEA4kuPV1lg/article-cover_image-shrink_600_2000/0/1721197464294?e=2147483647&v=beta&t=UQYzM73v2T5y8ciNgDVtvg4nOlgFgVVEdokt41o97og')",
        }}
      >
        <div className="max-w-7xl flex flex-col sm:flex-row items-center justify-center w-full relative z-10 px-6 sm:px-12">
          <div className="text-center sm:text-left">
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-8 tracking-wide leading-tight text-shadow-lg">
              Stream Solutions
            </h1>
            <p className="text-2xl sm:text-3xl mb-10 opacity-90">
              <b>The Premier Software Development Agency in Kenya!</b>
            </p>
            <p className="text-xl sm:text-2xl mb-10 opacity-80">
              We provide tailored software solutions, including Mpesa payment integration, chat functionality, and other services specific to the Kenyan market.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 px-10 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-xl"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
      
      <section
        id="why-us"
        className="bg-cover bg-center text-white py-16 sm:py-20 relative"
       
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="container mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-12 text-yellow-300 tracking-wide">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Custom Solutions for Kenya
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                Our solutions are designed with the Kenyan market in mind. From integrating <span className="text-teal-500">Mpesa payments</span> to customizing software for local businesses, we ensure your digital presence is both effective and secure.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Mpesa Payment Integration
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                <span className="text-teal-500">Seamless Mpesa</span> integration allows you to process payments easily within your website or app, ensuring your business transactions are efficient and secure.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Chat Integration
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                We integrate <span className="text-teal-500">live chat</span> functionality to your platform, allowing real-time communication with your customers, enhancing their experience and boosting customer satisfaction.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Cutting-Edge Technologies
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                We use the latest technologies and development frameworks to create websites and apps that not only perform well but also scale as your business grows in the Kenyan market.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Seamless User Experience
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                We prioritize <span className="text-teal-500">user experience</span>, ensuring your digital platform is intuitive, fast, and accessible for all users, making every interaction smooth and efficient.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
                Local Expertise & Support
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
                Our team provides expert guidance and continuous support, ensuring your project stays on track and delivers results. We understand the unique challenges faced by Kenyan businesses in the digital space.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="clients"
        className="bg-gradient-to-r from-teal-50 to-blue-50 text-gray-800 py-16 sm:py-20 relative"
      >
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold mb-12 text-indigo-600 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Our Esteemed Clients
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16 sm:gap-20">
            {/* Client logos here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
