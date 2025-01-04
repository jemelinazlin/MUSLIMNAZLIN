import React from 'react';

function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-200">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-10">My Services</h2>
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
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-200">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-indigo-700 mb-12">What Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">"Amazing work! The website exceeded my expectations and was delivered on time."</p>
              <p className="font-semibold text-indigo-600">Client 1</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">"The app is fantastic! It works flawlessly and the design is beautiful."</p>
              <p className="font-semibold text-indigo-600">Client 2</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">"Great experience working with [Your Name]. Highly recommend!"</p>
              <p className="font-semibold text-indigo-600">Client 3</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Services;
