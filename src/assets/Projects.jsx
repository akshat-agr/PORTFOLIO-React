import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  return (
    <div>
      <header className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>

      <h2 className="title">PROJECTS</h2>

      <div className="projects">
        <div className="project">
          <img src="home_back.jpg" alt="Project 1" />
          <h3>OVERSIGHTCHESSMATE</h3>
          <a href="https://github.com/akshat-agr/OversightChessMate---Chess-Prediction-App.git">View Project</a>
        </div>
        <div className="project">
          <img src="aqi.png" alt="Project 2" />
          <h3>AQI PREDICTOR</h3>
          <a href="https://colab.research.google.com/drive/1Yrc70kDyC5rnbDAZlbfR62TJLL6RXq8a?usp=sharing">View Project</a>
        </div>
        <div className="project">
          <img src="mail.png" alt="Project 3" />
          <h3>MAIL AUTOMATION</h3>
          <a href="https://akshatagrawal.hashnode.dev/effortless-email-sending-on-linux-a-step-by-step-project-guide">View Project</a>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Akshat Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
