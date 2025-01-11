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
    <section
      id="contact"
      className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white py-16 sm:py-20 relative"
    >
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {typewriterText('Get In Touch')}
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {typewriterText(
            'Have questions or want to start your next project? Connect with us and let’s collaborate.'
          )}
        </motion.p>
        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 10 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </motion.a>
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: -10 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 15 }}
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: -15 }}
          >
            <FontAwesomeIcon icon={faTiktok} size="3x" />
          </motion.a>
          <motion.a
            href="mailto:your-email@example.com"
            className="text-white transform hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </motion.a>
        </div>
        <motion.a
          href="mailto:your-email@example.com"
          className="mt-10 inline-block bg-gradient-to-r from-teal-700 to-blue-800 text-white py-3 px-8 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-105 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Send an Email
        </motion.a>
      </div>
    </section>
  );
}

export default ContactFooter;