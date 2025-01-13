import React from 'react';

function Services() {
  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-200 relative pt-32">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-indigo-700 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
            <div className="service-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Web Development</h3>
              <p className="text-lg text-gray-600">Building modern, responsive, and high-performance websites tailored to your business needs.</p>
            </div>
            <div className="service-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Mobile Apps</h3>
              <p className="text-lg text-gray-600">Creating intuitive mobile applications that offer seamless experiences across iOS and Android platforms.</p>
            </div>
            <div className="service-card bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4 text-indigo-600">Consulting</h3>
              <p className="text-lg text-gray-600">Providing expert advice on software architecture, development strategies, and digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New "Who Do We Work For" Section */}
      <section id="who-do-we-work-for" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-200">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-indigo-700 mb-12">Who Do We Work For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">E-Commerce Websites</h3>
              <p className="text-lg text-gray-600">We help businesses build scalable and secure e-commerce platforms that drive sales and customer engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Sports (Gyms & Fitness)</h3>
              <p className="text-lg text-gray-600">We develop user-friendly systems for gyms and fitness centers, improving client management and online booking experiences.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Institutional Systems</h3>
              <p className="text-lg text-gray-600">From student management systems to worker management in factories, we design solutions that streamline operations in institutions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Real Estate Management Systems</h3>
              <p className="text-lg text-gray-600">We offer comprehensive real estate management platforms that enhance property listings, client interactions, and payment processing.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-200">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-indigo-700 mb-12">Our Clients</h2>
          <div className="flex justify-center gap-12">
            <img src="https://via.placeholder.com/150" alt="Client 1" className="w-24 h-24 object-cover rounded-full shadow-xl transform hover:scale-110 transition-all duration-300" />
            <img src="https://via.placeholder.com/150" alt="Client 2" className="w-24 h-24 object-cover rounded-full shadow-xl transform hover:scale-110 transition-all duration-300" />
            <img src="https://via.placeholder.com/150" alt="Client 3" className="w-24 h-24 object-cover rounded-full shadow-xl transform hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
