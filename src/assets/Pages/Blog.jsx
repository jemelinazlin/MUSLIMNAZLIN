import React, { useState } from 'react';

function BlogPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://png.pngtree.com/png-vector/20230728/ourlarge/pngtree-programming-clipart-professional-software-developer-cartoon-vector-png-image_6812501.png",
    "https://media.gettyimages.com/id/1202517270/vector/laptop-user.jpg?s=612x612&w=gi&k=20&c=vrW20t1maxtrIR79ifmknnbar2ku3a1ABadE2Sg41Pw=",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://img.freepik.com/premium-vector/realistic-concept-man-working-front-laptop-vector-3d_601238-39.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-blue-100 via-teal-100 to-blue-200"
    >
      <div className="container mx-auto px-6 text-gray-800">

        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-12 text-blue-900 leading-tight tracking-wide">
          My Coding Journey: A Deep Dive Into Web Development
        </h1>

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">
            My Visual Journey
          </h2>
          <div className="relative mb-8 mx-auto max-w-4xl">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-400 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 mb-6 max-w-3xl mx-auto">
            Web development is a journey that merges creativity and technical expertise. Through the years, I've gained insights into the intricate design and functionality of websites. In this post, I'll be sharing my learnings, insights, and experiences as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
