import React from 'react';
import './About.css'; 
import profile_pic from "../assets/akshat.jpeg"

function About() {
  return (
    <div className='about-container'>
      <div id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img className="profile-img" src={profile_pic} alt="Akshat Agrawal" />
          <p>👋 Hello! I'm Akshat Agrawal, a passionate 2nd-year BTech student with a keen interest in Machine
            Learning and DevOps. 💡 I'm on a journey to explore the exciting realms of data science, AI, and cloud
            infrastructure.</p>
          <p>🔍 Currently, I'm honing my skills in both Machine Learning and DevOps domains, constantly seeking
            opportunities to learn, grow, and apply my knowledge to real-world challenges. 🚀</p>
          <p>📚 As a lifelong learner, I believe that the intersection of technology and innovation holds endless
            possibilities, and I'm excited to be part of the ever-evolving tech landscape.</p>
          <p>🎲 In addition to technology, I also have a strong interest in chess and swimming, both of which I enjoy
            as hobbies outside of my academic pursuits.</p>
        </div>
      </div>

      <div className="arrow">
        <a href="#photo-gallery"><img src="src\assets\arrow.png" alt="Down Arrow" /></a>
      </div>

      <div id="photo-gallery" className="photo-gallery">
        <img src="src\assets\pic.jpg" alt="Photo 1" />
        <img src="src\assets\chessh.jpg" alt="Photo 2" />
        <img src="src\assets\akshat_tam.jpeg" alt="Photo 3" />
      </div>

      <footer>
        <p>&copy; 2024 Akshat Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
