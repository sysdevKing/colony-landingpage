import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDiscord } from 'react-icons/fa';
import logo from '/public/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black border-b-4 border-[#344afb]' : 'bg-transparent'} text-white flex items-center justify-between px-4 py-5`}>
        <div className="flex items-center">
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer hover:text-blue-500" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer hover:text-blue-500" onClick={toggleMenu} />
          )}
          <img src={logo} alt="Logo" className="ml-4 w-8 h-8" />
          <span className="ml-2 text-xl font-bold">
            <span className="text-[#344afb]">BASE</span> <span className="text-white">COLONY</span>
          </span>
        </div>
        <div className="flex items-center">
          {/* button */}
        </div>
      </nav>
      <div className={`fixed top-0 inset-y-0 left-0 bg-black text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-start px-4 py-20 space-y-2 mt-4">
            <ul className="mt-4">
              <li className="mb-2 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded" onClick={() => handleScrollTo('home')}>HOME</li>
              <li className="mb-2 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded" onClick={() => handleScrollTo('build')}>BUILD</li>
              <li className="mb-2 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded" onClick={() => handleScrollTo('conquer')}>CONQUER</li>
              <li className="mb-2 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded" onClick={() => handleScrollTo('rewards')}>REWARDS</li>
              <li className="mb-2 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded" onClick={() => handleScrollTo('leaderboard')}>LEADERBOARD</li>
            </ul>
            <div className="flex space-x-4 mt-auto mb-4 align-center">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaDiscord size="24" />
              </a>
              <a href="http://x.com/basecolony" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <svg
                  fill="white"
                  className="svgIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 564 564"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
