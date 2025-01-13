import React, { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
      <section
        id="about-faq"
        className="min-h-screen py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/realistic-concept-man-working-front-laptop-vector-3d_601238-39.jpg?w=360')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center px-6 bg-black bg-opacity-50 relative pt-28">
          <div id="about" className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">About Us</h2>
            <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-80 mb-8">
              We are a team of passionate software developers with experience in web and mobile app development.
              We aim to create all-around solutions for businesses and institutions seeking to digitize their work. Let us help bring your project to life!
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/portfolio"
                className="bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                View our Work
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div
            id="faq"
            className="relative py-20 text-left text-gray-800 bg-black bg-opacity-50"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/cute-cartoon-kid-posing-portrait_23-2151870610.jpg?semt=ais_hybrid')",
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container mx-auto text-left px-6 relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8 max-w-3xl mx-auto">
                {[
                  {
                    question: "What services do you offer?",
                    answer:
                      "We offer web development, mobile app development, and UI/UX design services tailored to your needs.",
                  },
                  {
                    question: "How long will my project take?",
                    answer:
                      "The timeline depends on the complexity of the project, but we always ensure timely delivery. Customer satisfaction is our biggest objective!",
                  },
                  {
                    question: "How can I contact you?",
                    answer:
                      "You can contact us via email or the contact form on this website. Our customer assistants are always ready to help.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-6">
                    <h3
                      className="text-2xl font-semibold text-white cursor-pointer"
                      onClick={() => toggleAnswer(index)}
                    >
                      {faq.question}
                    </h3>
                    {openQuestion === index && (
                      <p className="text-lg text-white mt-2">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
