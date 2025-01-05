import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact us</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="block w-full px-6 py-3 mb-4 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
