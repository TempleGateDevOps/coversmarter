import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Nova - 5</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#features" className="navbar-link">Features</a></li>
          <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
