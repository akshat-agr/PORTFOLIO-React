import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navbar() {
  return (
    <div>
      <div className="top-container">
        <h1>AKSHAT AGRAWAL</h1>
        <h2 className="sub-title">An AI ML ENTHUSIAST</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
