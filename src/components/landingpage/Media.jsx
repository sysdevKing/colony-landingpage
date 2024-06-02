// src/components/landingpage/MediaCarousel.jsx
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './style.css'

const mediaItems = [
  {
    type: 'video',
    id: 'dQw4w9WgXcQ', 
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/800x450?text=Image+1',
  },
  {
    type: 'image',
    src: 'https://via.placeholder.com/800x450?text=Image+2',
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

  const renderMediaItem = (item) => {
    if (item.type === 'video') {
      return (
        <YouTube
          videoId={item.id}
          opts={{
            width: '100%',
            height: '500px',
            playerVars: { autoplay: 0 },
          }}
        />
      );
    } else if (item.type === 'image') {
      return <img src={item.src} alt="Media" className="w-full h-[500px] rounded-lg" />;
    }
  };

  return (
    <div className="relative w-full h-screen max-w-5xl mx-auto pt-36">
      <div className="relative overflow-hidden border-4 border-blue-500 rounded-lg neon-border">
        {renderMediaItem(mediaItems[currentIndex])}
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
