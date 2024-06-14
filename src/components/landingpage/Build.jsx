import React from 'react';
import gridImage from '/public/images/grid.png';
import buildImage from '/public/images/Build.png';
import './Build.css'; 

const Build = () => {
  return (
    <div className="flex items-center justify-center min-h-full text-white p-4" id="build">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl border border-gray-500 rounded-lg relative neon-outline">
        <div className="relative flex flex-col justify-center items-center p-6 bg-cover bg-center grid-background" style={{ backgroundImage: `url(${gridImage})` }}>
          <div className="bg-[#A7C4FE] bg-opacity-70 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 drop-shadow-lg">BUILD Your Colony</h2>
            <p className="text-xs md:text-sm mb-6 drop-shadow-lg">
              Embark on an epic journey to build and expand your colony. Gather resources, strengthen your defenses, and lead your people to glory in the vastness of the galaxy.
            </p>
            <blockquote className="italic text-xs md:text-sm border-l-4 border-blue-500 pl-4 mb-4 drop-shadow-lg">
              "With strategic planning and tactical prowess, dominate the stars and become the ultimate commander of your colony."
            </blockquote>
            <p className="text-xs md:text-sm drop-shadow-lg">- Base Colony, 2115 -</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#344afb] bg-opacity-65 p-4">
          <img src={buildImage} alt="Build" className="w-full h-auto max-w-md"/>
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#A7C4FE] neon-outline hidden md:block"></div>
      </div>
    </div>
  );
};

export default Build;
