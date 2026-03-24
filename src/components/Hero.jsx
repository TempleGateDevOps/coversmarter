import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Build Faster. <br />
          <span className="hero-highlight">Scale Smarter.</span>
        </h1>
        <p className="hero-subtitle">
          Experience the next generation of web development with Nova. 
          Unleash your creativity with our powerful and intuitive platform.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary hero-btn">Start Free Trial</button>
          <button className="btn-secondary hero-btn">View Documentation</button>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-glow"></div>
        <div className="hero-dashboard-mockup">
          <div className="mockup-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="mockup-body">
            <div className="mockup-line w-3/4"></div>
            <div className="mockup-line w-full"></div>
            <div className="mockup-line w-5/6"></div>
            <div className="mockup-block"></div>
            <div className="mockup-line w-1/2"></div>
            <div className="mockup-line w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
