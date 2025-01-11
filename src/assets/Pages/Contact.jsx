import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="block w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

