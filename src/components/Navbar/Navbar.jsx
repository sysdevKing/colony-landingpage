import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveItem(id);
    setIsOpen(false);
  };

  const menuItems = ['HOME', 'BUILD', 'CONQUER', 'REWARDS', 'LEADERBOARD'];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 bg-[#2563EB] bg-opacity-65 md:rounded-full">
        <div className="flex justify-between items-center py-2 md:py-4 md:mt-5 md:justify-center">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:bg-blue-800 rounded">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-12 font-extrabold">
            {menuItems.map((item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={index}
                className={`py-2 px-3 text-white font-extrabold hover:bg-white hover:text-black hover:rounded-lg ${activeItem === item.toLowerCase() ? 'bg-[#6698FF] text-black rounded-lg' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
          </div>
          {/* Placeholder for Centering Desktop Links */}
          <div className="hidden md:flex items-center">
            <div className="w-6"></div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-blue-900 bg-opacity-95 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col md:hidden`}>
        <div className="w-full flex justify-start p-4">
          <button onClick={toggleMenu} className="text-white hover:bg-blue-800 p-2 rounded">
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-6">
          {menuItems.map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={index}
              className={`block py-3 px-6 text-center text-white font-extrabold hover:bg-blue-800 w-full ${activeItem === item.toLowerCase() ? 'bg-[#6698FF] text-black' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.toLowerCase());
              }}
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-6 mt-6">
            {[faTwitter].map((icon, index) => (
              <a key={index} href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FontAwesomeIcon icon={icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
