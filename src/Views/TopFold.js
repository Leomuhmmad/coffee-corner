import React, { useState } from "react";
import "./TopFold.css";
import { FaPlay, FaShoppingCart, FaBars } from "react-icons/fa";

const TopFold = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWatchVideo = () => {
    setIsPlaying(true);
    // Add your video logic here
    console.log("Playing video...");
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
          <a href="#">Shop</a>
          <a href="#">Pages ▾</a>
          <a href="#">Reservation</a>
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

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Enjoy Your <span>Coffee</span> Time
          </h1>

          <p className="hero-subtitle">
            Discover the best coffee experience with premium beans and cozy atmosphere.
          </p>

          <div className="cta-buttons">
            <button className="watch-btn" onClick={handleWatchVideo}>
              <FaPlay />
              <div>
                <span>Watch Video</span>
                <small>1 minute</small>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Optional: Video Modal */}
      {isPlaying && (
        <div className="video-modal" onClick={() => setIsPlaying(false)}>
          <div className="video-modal-content">
            <button className="close-btn" onClick={() => setIsPlaying(false)}>×</button>
            <video controls autoPlay>
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default TopFold;