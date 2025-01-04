import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center text-grey h-screen flex items-center justify-start text-left px-12 relative"
        style={{
          backgroundImage: "url('https://thumbs.dreamstime.com/z/male-using-computer-laptop-white-desk-table-background-business-technology-communication-networking-concepts-ideas-top-view-105684554.jpg')",
        }}
      >
        <div className="max-w-lg">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-8 tracking-wide leading-tight text-shadow-lg">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-2xl sm:text-3xl mb-10 opacity-90">
            I build amazing websites and apps. Let's bring your ideas to life with design and code.
          </p>
          <a
            href="#services"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white py-4 px-10 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Work With Me
          </a>
        </div>
      </section>
      <section
  id="why-us"
  className="bg-cover bg-center text-white py-16 sm:py-20 relative"
  style={{
    backgroundImage: "url('https://media.licdn.com/dms/image/D4D12AQFAEA4kuPV1lg/article-cover_image-shrink_600_2000/0/1721197464294?e=2147483647&v=beta&t=UQYzM73v2T5y8ciNgDVtvg4nOlgFgVVEdokt41o97og')", // Replace with your GIF URL
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0" /> 
  <div className="container mx-auto text-center px-6 relative z-10">
    <h2 className="text-5xl sm:text-6xl font-extrabold mb-12 text-yellow-300 tracking-wide">Why Choose Us?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Unmatched Creativity
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          <span className="text-teal-500">We don't just follow trends; we create them.</span> Our unique blend of artistic vision and innovative ideas allows us to build projects that leave a lasting impression. Creativity flows through every pixel of what we design.
        </p>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Passion-Fueled Projects
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          Our <span className="text-teal-500">passion</span> for technology and design drives every project forward. We go above and beyond to deliver solutions that not only meet but exceed your expectations. Your vision becomes our mission.
        </p>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Tailored Experience
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          We believe in a <span className="text-teal-500">customized</span> approach to every project. From design to functionality, we tailor every aspect to your specific needs and preferences, ensuring a perfect fit for your business.
        </p>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Cutting-Edge Technology
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          We use the latest, <span className="text-teal-500">most advanced technologies</span> to bring your ideas to life. Our expertise ensures your website or app is optimized for the best performance and security in today's fast-paced digital world.
        </p>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Seamless User Experience
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          We design with the <span className="text-teal-500">user</span> in mind, ensuring that every interaction with your site or app is intuitive and enjoyable. Our focus is on creating smooth, seamless experiences that your users will love.
        </p>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-4 text-indigo-600 hover:text-indigo-800 transition-all duration-300">
          Dedicated Support
        </h3>
        <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-indigo-700 hover:text-indigo-900 transition-all duration-300">
          <span className="text-teal-500">We are here for you</span> every step of the way. Our team offers dedicated support, from the first consultation to post-launch, ensuring your project always runs smoothly.
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
            <motion.div
              className="client-logo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Client 1"
                className="client-logo w-32 h-32 md:w-40 md:h-40 object-contain mx-auto shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
