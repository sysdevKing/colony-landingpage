import React from 'react';
import './style.css'

const Hero = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        src="/public/video/video_lps.mp4"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Colony</h1>
        <p className="text-lg md:text-2xl mb-8">Build, Conquer, Get Rewarded</p>
        <button className="bg-[#184099] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
      <svg className="scroll-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 21c-.512 0-1.023-.195-1.414-.586l-9-9c-.781-.781-.781-2.047 0-2.828s2.047-.781 2.828 0L12 16.172l7.586-7.586c.781-.781 2.047-.781 2.828 0s.781 2.047 0 2.828l-9 9C13.023 20.805 12.512 21 12 21z"/>
      </svg>
    </div>
  );
}

export default Hero;
