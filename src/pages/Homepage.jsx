import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Rightbar from '../components/Rightbar/Rightbar';
import Hero from '../components/landingpage/Hero';
import Media from '../components/landingpage/Media';
import Gameplay from '../components/landingpage/Gameplay';
import './style.css'; 

const Homepage = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-bg">
        <source src="/public/video/video_background.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <Rightbar />
        </div>
        <Hero />
        <Media />
        <Gameplay />
      </div>
    </div>
  );
};

export default Homepage;
