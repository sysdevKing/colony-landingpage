import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../landingpage/style.css';

const mediaItems = [
  {
    type: 'image',
    src: 'https://via.placeholder.com/800x450?text=Image+1',
    title: 'BUILD your colony',
    description: 'Collect resources and strengthen your stats.'
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/800x450?text=Image+2',
    title: 'CONQUER other colonies',
    description: 'Participate in resources and information warfare.'
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/800x450?text=Image+3',
    title: 'EMERGE Victories, EARN REWARDS',
    description: 'Expand your network and defeat all other colonies.'
  },
];

const MediaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen max-w-5xl mx-auto pt-36">
      <div className="relative w-full h-[500px] overflow-hidden border-4 border-blue-500 rounded-lg flex items-center">
        <div className="w-1/2 h-full p-8 flex flex-col text-white justify-center items-center text-center">
          <h2 className="text-2xl font-bold">{mediaItems[currentIndex].title}</h2>
          <p className="mt-4">{mediaItems[currentIndex].description}</p>
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <img src={mediaItems[currentIndex].src} alt="Media" className="w-full h-full object-cover " />
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center">
          <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition">
            <FaArrowLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center">
          <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
      <svg className="scroll-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 21c-.512 0-1.023-.195-1.414-.586l-9-9c-.781-.781-.781-2.047 0-2.828s2.047-.781 2.828 0L12 16.172l7.586-7.586c.781-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-9 9C13.023 20.805 12.512 21 12 21z"/>
      </svg>
    </div>
  );
};

export default MediaCarousel;
