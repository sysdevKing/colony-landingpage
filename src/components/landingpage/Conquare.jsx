import React from 'react';
import './Build.css';

const Build = () => {
  return (
    <div className="container mx-auto pt-16 md:pt-28 p-4 max-w-5xl" id="conquer">
      <div className="bg-[#2563EB] bg-opacity-65 text-white rounded-lg shadow-lg overflow-hidden neon-outline">
        <div className="md:flex items-center justify-center text-center">
          <div className="md:w-1/2 p-6">
          <div className="neon-glow"></div>
            <img
              src="public/images/Conquer.png"
              alt="Gaming Colony"
              className="w-full h-auto relative z-10"
            />
          </div>
          <div className="md:w-1/2 relative">
          <h1 className="text-4xl font-bold mb-4 neon-text">CONQUER Other Colonies</h1>
            <p className="mb-4">
            Participate in resources and information warfare
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
