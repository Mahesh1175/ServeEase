import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 mt-2 py-24 flex flex-col lg:flex-row items-center justify-between">
      {/* description section */}
      <div className="max-w-7xl text-center lg:text-left lg:w-1/2 px-6">
        <h2 className="text-sky-700 text-4xl font-bold mb-4">Reliable Services at Your Doorstep</h2>
        <p className="text-lg text-gray-600 mb-8">Find the best service professionals for all your needs, anytime, anywhere.</p>
        <button className="bg-sky-700 text-white py-3 px-6 rounded-lg hover:bg-sky-800 transition duration-300">Explore Services</button>
      </div>

      {/* Image section */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center rounded-md ">
        <img src='./images/img.png'
          className='w-full max-w-md lg:max-w-full object-cover rounded-md mix-blend-multiply'
          alt="Service Image" />
      </div>

    </section>
  );
};

export default HeroSection;
