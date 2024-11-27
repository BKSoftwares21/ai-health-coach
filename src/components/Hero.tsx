import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to AI Health Coach</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your personalized guide to a healthier lifestyle. Take control of your health today!
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
