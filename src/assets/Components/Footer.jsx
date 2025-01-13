import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function ContactFooter() {
  const typewriterText = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <footer id="contact" className="bg-gradient-to-r from-teal-500 to-gray-800 text-white py-16 sm:py-20 relative">
      <div className="container mx-auto text-center px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typewriterText('Get In Touch')}
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {typewriterText(
            'Have questions or want to start your next project? Connect with us and let’s collaborate.'
          )}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <motion.a
            href="https://www.instagram.com/_.kigen_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 10 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </motion.a>
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: -10 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 15 }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: -15 }}
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </motion.a>
          <motion.a
            href="mailto:your-email@example.com"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </motion.a>
        </div>

        <motion.a
          href="mailto:your-email@example.com"
          className="mt-10 inline-block bg-gradient-to-r from-teal-700 to-blue-800 text-white py-3 px-6 rounded-full text-base sm:text-xl font-semibold transform hover:scale-105 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Send an Email
        </motion.a>
      </div>

      <div className="container mx-auto mt-12 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
        <ul className="flex flex-wrap justify-center gap-4 text-base sm:text-lg">
          <li><a href="#home" className="hover:text-teal-300 transition-colors duration-300">Home</a></li>
          <li><a href="#services" className="hover:text-teal-300 transition-colors duration-300">Services</a></li>
          <li><a href="#about" className="hover:text-teal-300 transition-colors duration-300">About Us</a></li>
          <li><a href="#portfolio" className="hover:text-teal-300 transition-colors duration-300">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-teal-300 transition-colors duration-300">Contact</a></li>
        </ul>
      </div>

      <div className="container mx-auto mt-8 px-4 sm:px-6 text-center border-t border-gray-700 pt-4">
        <p className="text-xs sm:text-sm opacity-75">&copy; 2025 Stream Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default ContactFooter;
