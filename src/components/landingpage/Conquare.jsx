import React from 'react';
import gridImage from '/public/images/grid.png';
import buildImage from '/public/images/Conquer.png';
import './Build.css'; // Ensure this CSS file is imported

const Build = () => {
  return (
    <div className="flex items-center justify-center min-h-full text-white p-4" id="conquer">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl border border-gray-500 rounded-lg relative neon-outline">
        <div className="flex justify-center items-center bg-[#344afb] bg-opacity-65 p-4 order-last md:order-first">
          <img src={buildImage} alt="Build" className="w-full h-auto max-w-md"/>
        </div>
        <div className="relative flex flex-col justify-center items-center p-6 bg-cover bg-center grid-background" style={{ backgroundImage: `url(${gridImage})` }}>
          <div className="bg-[#A7C4FE] bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">CONQUER others Colony</h2>
            <p className="text-xs md:text-sm mb-6 drop-shadow-lg">
              Achieve victory and reap the rewards. Conquer your challenges, outsmart your rivals, and claim your well-deserved prizes. Glory and riches await the victorious!
            </p>
            <p className="text-xs md:text-sm">- Base Colony, 2115 -</p>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#A7C4FE] neon-outline hidden md:block"></div>
      </div>
    </div>
  );
};

export default Build;
