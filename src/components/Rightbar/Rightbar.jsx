import React from 'react';

const Rightbar = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2 hidden md:flex">
      <div className="bg-[#A7C4FE] text-white shadow-lg rounded-l-lg p-4 flex flex-col items-center space-y-4">
        <a href="http://x.com/basecolony" target="_blank" className="hover:text-blue-800 transition-colors duration-300">
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
        {/* <a href="#" className="hover:text-purple-800 transition-colors duration-300">
          <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
        </a> */}
      </div>
    </div>
  );
};

export default Rightbar;
