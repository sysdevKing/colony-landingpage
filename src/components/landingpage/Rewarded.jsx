import React from 'react';
import './Build.css';

const Rewarded = () => {
  return (
    <div className="container mx-auto pt-16 md:pt-28 p-4 max-w-5xl" id="rewards">
      <div className="bg-[#2563EB] bg-opacity-65 text-white rounded-lg shadow-lg overflow-hidden neon-outline">
        <div className="flex flex-col md:flex-row items-center justify-center text-center p-4 md:p-6">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 neon-text">Emerge Victorious, EARN REWARDS</h1>
            <p className="mb-4">
            Expand your network and defeat all other colonies
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="neon-glow"></div>
            <img
              src="/public/images/Rewarded.png"
              alt="Gaming Colony"
              className="w-full h-auto relative z-10 max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewarded;
