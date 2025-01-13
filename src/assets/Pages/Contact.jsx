import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/YHlk56g.jpg')",
      }}
    >
      <div className="container mx-auto flex items-center justify-start px-6">
        {/* Left Side: Form Section */}
        <div
          className="max-w-lg w-full text-left bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
            <textarea
              placeholder="Your Message"
              className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Animated Text */}
        <div
          className="hidden lg:block ml-16 text-white"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="text-3xl font-semibold mb-4 text-shadow-lg text-black animate-pulse">
            Get in touch with us today!
          </h3>
          <p className="text-lg opacity-90 text-black animate-fade-slide">
            We would love to hear from you and discuss how we can collaborate on your project. Our team is ready to help!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
