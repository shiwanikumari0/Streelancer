import React from 'react';
import heroImage from '../assets/hero-image.png';
import '../HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Restart. Rise. Thrive.</h1>
        <p>India’s largest women-first platform for career building.</p>
        <div className="hero-buttons">
          <button className="register-btn">Register Now</button>
          <button className="academy-btn">Join Academy</button>
        </div>
        <ul className="features-list">
          <li>✔ Smart onboarding that routes you to the right path</li>
          <li>✔ Access verified, DEI-aligned professionals instantly</li>
          <li>✔ Industry-vetted programs with mentorship</li>
        </ul>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
