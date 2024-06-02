import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faDiscord, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 bg-[#2563EB] bg-opacity-65 md:rounded-full">
        <div className="flex justify-between items-center py-4 md:py-4 md:mt-5 md:justify-center">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-12 font-extrabold">
            {['HOME', 'MEDIA', 'GAMEPLAY', 'LEADERBOARD', 'SHOP'].map((item, index) => (
              <a href="#" key={index} className="py-2 px-3 text-white font-extrabold hover:bg-white hover:text-black hover:rounded-lg active:bg-white active:text-black">
                {item}
              </a>
            ))}
          </div>
          {/* Hamburger/Close Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:bg-blue-800">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
            {[faTwitter, faFacebookF, faYoutube, faDiscord, faTelegramPlane].map((icon, index) => (
              <span key={index} className='ml-10'>
                <a href="#" className={`hover:text-${icon.color}-500 text-white transition-colors duration-300`}>
                  <FontAwesomeIcon icon={icon} className="w-6 h-6" />
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-blue-900 bg-opacity-95 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col justify-start md:hidden`}>
        <div className="w-full flex p-3">
          <button onClick={toggleMenu} className="text-white hover:bg-blue-800">
            <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
          </button>
        </div>
        {['MAIN', 'MEDIA', 'CHARACTERS', 'GAMEPLAY', 'FLERO TOKEN', 'WEBSHOP', 'STAKING'].map((item, index) => (
          <a href="#" key={index} className="block py-3 px-6 text-left text-white font-extrabold hover:bg-blue-800">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
