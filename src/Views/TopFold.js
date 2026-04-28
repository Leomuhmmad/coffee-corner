import React, { useState } from "react";
import "./TopFold.css";
import { FaPlay, FaShoppingCart, FaBars } from "react-icons/fa";
import VideoModal from "../components/VideoModal";

const TopFold = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Changed from true to false

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="topfold">
        <div className="topfold-left">
          <h2 className="logo">
            CaffeCorner<span>.</span>
          </h2>
        </div>

        <nav className={`topfold-center ${isMenuOpen ? 'active' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
        </nav>

        <div className="topfold-right">
          <div className="cart">
            <FaShoppingCart />
            <span className="dot"></span>
          </div>
          <div className="menu-btn" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-title">
          {`{ automate everything. }`}
        </div>        
        <p className="hero-subtitle">
          Based in San Francisco, Webcafe AI creates and invests in AI and SaaS solutions.
        </p>
        <div className="cta-buttons">
          <button className="watchdemo-btn" onClick={openVideo}>
            <FaPlay className="play-icon" />
            <div className="demo-text">
              <span className="investment-text">Open Demo</span>
              <span className="demo-duration"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        show={showVideo}
        onClose={closeVideo}
        videoId="XQg009mDWag"
        title="First Maneuver Shakes Ring Rust"
        description="Watch Seth Rollins' recovery as he lands his first high-impact move."
      />
    </>
  );
};

export default TopFold;