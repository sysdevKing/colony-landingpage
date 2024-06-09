import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Rightbar from '../components/Rightbar/Rightbar';
import Hero from '../components/landingpage/Hero';
import Media from '../components/landingpage/Media';
import Gameplay from '../components/landingpage/Gameplay';
import Build from '../components/landingpage/Build'
import Conquare from '../components/landingpage/Conquare'
import Rewarded from '../components/landingpage/Rewarded'
import Leaderboard from '../components/landingpage/Leaderboard'
import './style.css'; 

const Homepage = () => {
  return (
    <div id="home">
      <video autoPlay muted loop className="video-bg">
        <source src="/public/video/video_bg.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <Rightbar />
        </div>
        <Hero />
        {/* <Media /> */}
        {/* <Gameplay /> */}
        <Build />
        <Conquare />
        <Rewarded />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Homepage;
