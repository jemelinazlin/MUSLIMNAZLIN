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
        transition={{ delay: index * 0.1 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-teal-500 to-grey text-white py-16 sm:py-20 relative">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {typewriterText('Get In Touch')}
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {typewriterText(
            'Interested in working together or have a question? Reach out to us, and let\'s discuss your project.'
          )}
        </motion.p>
        <div className="flex justify-center gap-8 mt-6">
          <motion.a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-125 transition-all duration-300"
            whileHover={{ rotate: 15, scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </motion.a>
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-125 transition-all duration-300"
            whileHover={{ rotate: -15, scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-125 transition-all duration-300"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transform hover:scale-125 transition-all duration-300"
            whileHover={{ rotate: -10, scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faTiktok} size="4x" />
          </motion.a>
          <motion.a
            href="mailto:your-email@example.com"
            className="text-white transform hover:scale-125 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </motion.a>
        </div>
        <motion.a
          href="mailto:your-email@example.com"
          className="mt-10 inline-block bg-gradient-to-r from-teal-700 to-blue-800 text-white py-4 px-10 rounded-full text-lg sm:text-xl font-semibold transform hover:scale-110 transition-all duration-300 shadow-xl"
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
