import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-center mb-6">
          Welcome to our store! We provide high-quality products at affordable prices.
        </p>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* Mission */}
          <div className="bg-gray-100 p-5 rounded-xl hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm">
              Our mission is to deliver the best products with great quality and fast service to our customers.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-100 p-5 rounded-xl hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm">
              We aim to become one of the most trusted online shopping platforms worldwide.
            </p>
          </div>

        </div>

        {/* Footer / Extra */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Made with ❤️ by You
          </p>
        </div>

      </div>

    </div>
  );
};