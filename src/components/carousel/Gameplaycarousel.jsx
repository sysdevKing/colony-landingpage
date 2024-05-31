// src/components/Carousel.jsx
import React, { useState } from 'react';
import GlobeComponent from '../globe/Globecomponent';

const slides = [
  {
    title: 'Slide 1',
    description: 'Description for slide 1.'
  },
  {
    title: 'Slide 2',
    description: 'Description for slide 2.'
  },
  {
    title: 'Slide 3',
    description: 'Description for slide 3.'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-screen">
      <GlobeComponent />
      <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8 z-10">
        <div className="bg-white bg-opacity-75 p-8 rounded-md max-w-lg">
          <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
          <p className="mt-4">{slides[currentSlide].description}</p>
          <div className="mt-8 flex justify-between">
            <button onClick={prevSlide} className="p-2 bg-blue-500 text-white rounded">Previous</button>
            <button onClick={nextSlide} className="p-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
