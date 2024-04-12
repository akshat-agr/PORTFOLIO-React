import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Contact.css'; // Import the CSS file for styling

function Contact() {
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

      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/akshat-agrawal-016200278/" target="_blank" rel="noopener noreferrer"><img src="linkdin.png" alt="LinkedIn" /></a>
            <a href="https://github.com/akshat-agr" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="GitHub" /></a>
            <a href="mailto:agrawalakshat1204@gmail.com"><img src="gmail.png" alt="Email" /></a>
            <a href="tel:+91 9413205537"><img src="phone.png" alt="Phone" /></a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact-form">
        <div className="max-width">
          <div className="contact-content">
            <div className="column right">
              <div className="text">Message me</div>
              <form>
                <div className="fields">
                  <div className="field name">
                    <input type="text" className="text-area" id="name" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" className="text-area" id="mail" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" className="text-area" id="topic" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols="30" rows="10" id="message" placeholder="Message.." required></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Akshat Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
