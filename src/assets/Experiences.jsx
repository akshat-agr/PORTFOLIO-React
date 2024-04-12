import React from 'react';
import { Link } from 'react-router-dom';
import './Experiences.css'; 

function Experiences() {
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

      <h2 className="title">Experiences</h2>

      <section id="experience1">
        <div className="experience">
          <img src="tam.jpeg" alt="TAM Club Logo" />
          <div className="experience-details">
            <h2>Co-Secretary at TAM VIT</h2>
            <p>As the Co-Secretary of TAM (Technology, Artificial Intelligence, and Machine Learning) Club, I have been entrusted with the responsibility of ensuring smooth communication and organization within the club. My role involves collaborating closely with the club's leadership team to plan and execute various activities, including workshops, seminars, and competitions focused on cutting-edge technologies like artificial intelligence and machine learning. I am dedicated to fostering an inclusive and engaging environment where members can explore their interests, enhance their skills, and stay updated with the latest advancements in the field. Through effective communication channels and meticulous planning, I strive to contribute to the club's mission of promoting technological innovation and empowering aspiring AI and ML enthusiasts within the college community.</p>
          </div>
        </div>
      </section>

      <section id="experience2">
        <div className="experience">
          <img src="genpact.jpeg" alt="Internship Logo" />
          <div className="experience-details">
            <h2>Data Science Internship at Genpact Corporation</h2>
            <p>During my summer internship at Genpact Corporation, I had the opportunity to work on various projects related to data science and machine learning. My responsibilities included collecting, cleaning, and analyzing data from multiple sources to derive actionable insights. I also collaborated with the data science team to develop predictive models and algorithms to optimize business processes and improve decision-making. This internship provided me with valuable hands-on experience in applying data science techniques to real-world problems and enhanced my skills in programming, statistical analysis, and data visualization.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Akshat Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Experiences;
