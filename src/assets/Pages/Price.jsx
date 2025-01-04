import React from 'react';

function PricingPage() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-500">
      <div className="container mx-auto px-6 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 leading-tight">
          Affordable Pricing Plans for Everyone
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 rounded-lg shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Basic Plan</h2>
            <p className="text-lg mb-4">Perfect for individuals just starting their journey.</p>
            <div className="text-4xl font-bold text-blue-600 mb-4">$19 <span className="text-lg">/mo</span></div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                5 Projects
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                24/7 Support
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                1 GB Storage
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-teal-600 hover:bg-teal-700 py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Choose Plan
            </a>
          </div>
          <div className="bg-white text-gray-900 rounded-lg shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Standard Plan</h2>
            <p className="text-lg mb-4">Ideal for small businesses and startups.</p>
            <div className="text-4xl font-bold text-blue-600 mb-4">$49 <span className="text-lg">/mo</span></div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                50 Projects
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                48/7 Support
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                5 GB Storage
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-teal-600 hover:bg-teal-700 py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Choose Plan
            </a>
          </div>
          <div className="bg-white text-gray-900 rounded-lg shadow-xl p-6 hover:scale-105 transform transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Premium Plan</h2>
            <p className="text-lg mb-4">For businesses and large-scale projects.</p>
            <div className="text-4xl font-bold text-blue-600 mb-4">$99 <span className="text-lg">/mo</span></div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                Unlimited Projects
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                Priority Support
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12ZM5 9a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z" />
                </svg>
                20 GB Storage
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-teal-600 hover:bg-teal-700 py-2 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Choose Plan
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingPage;
