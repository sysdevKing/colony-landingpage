import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faDiscord, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Rightbar = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 hidden md:flex">
      <div className="bg-blue-700 bg-opacity-80 text-white shadow-lg rounded-l-lg p-4 flex flex-col items-center space-y-4">
        <a href="#" className="hover:text-blue-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-blue-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-red-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-purple-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
        </a>
        <a href="#" className="hover:text-blue-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faTelegramPlane} className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Rightbar;
