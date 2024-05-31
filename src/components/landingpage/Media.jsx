// src/components/landingpage/MediaCarousel.jsx
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const mediaItems = [
  {
    type: 'video',
    id: 'dQw4w9WgXcQ', // Example YouTube video ID
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
            height: '450px',
            playerVars: { autoplay: 0 },
          }}
        />
      );
    } else if (item.type === 'image') {
      return <img src={item.src} alt="Media" className="w-full h-auto rounded-lg" />;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        {renderMediaItem(mediaItems[currentIndex])}
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
      <div className="flex justify-center mt-4 space-x-2">
        {mediaItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'} cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;
