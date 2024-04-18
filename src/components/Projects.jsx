import React from 'react';
import './Projects.css'; // Import the CSS file for styling

function Projects() {
  return (
    <div className='main'>

      <h2 className="title">PROJECTS</h2>

      <div className="projects">
        <div className="project">
          <img src="src\assets\home_back.jpg" alt="Project 1" />
          <h3 className='os'>OVERSIGHTCHESSMATE</h3>
          <a href="https://github.com/akshat-agr/OversightChessMate---Chess-Prediction-App.git">View Project</a>
        </div>
        <div className="project">
          <img src="src\assets\aqi.png" alt="Project 2" />
          <h3>AQI PREDICTOR</h3>
          <a href="https://colab.research.google.com/drive/1Yrc70kDyC5rnbDAZlbfR62TJLL6RXq8a?usp=sharing">View Project</a>
        </div>
        <div className="project">
          <img src="src\assets\mail.png" alt="Project 3" />
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
