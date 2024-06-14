import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Rightbar from '../components/Rightbar/Rightbar';
import Hero from '../components/landingpage/Hero';
import Media from '../components/landingpage/Media';
import Build from '../components/landingpage/Build';
import Conquare from '../components/landingpage/Conquare';
import Rewarded from '../components/landingpage/Rewarded';
import Leaderboard from '../components/landingpage/Leaderboard';
import Footer from '../components/landingpage/Footer';
import './style.css'; 

const Homepage = () => {
  return (
    <div id="home">
      <video autoPlay muted loop className="video-bg">
        <source src="/public/video/video_background.webm" type="video/mp4" />
      </video>
      <Navbar />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <Rightbar />
        </div>
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          <Hero />
          {/* <Media /> */}
          <Build />
          <Conquare />
          <Rewarded />
          <Leaderboard />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
