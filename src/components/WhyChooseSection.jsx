import React from 'react';
import '../WhyChooseSection.css';
import whyChooseImage from '../assets/why-choose.jpg';

const WhyChooseSection = () => {
  return (
    <div className="why-choose-section">
      <h2>Find The Right Person For The Job</h2>
      <p>Pre-vetted, DEI-aligned remote talent</p>

      <div className="why-choose-content">
        <div className="why-choose-text">
          <h3>Why Employers Choose Streelancer?</h3>
          <ul>
            <li>
              <strong>Diverse Talent Pool:</strong> Access CXOs, Virtual Assistants, SDRs, Designers, and more from diverse backgrounds.
            </li>
            <li>
              <strong>Verified Profiles with DEI Tags:</strong> All candidates are pre-vetted with verified skills and inclusion goals, with special tags to support your DEI efforts.
            </li>
            <li>
              <strong>DEI Hiring Dashboard:</strong> Track and report on your talent pipeline through our comprehensive analytics dashboard.
            </li>
          </ul>
        </div>

        <div className="why-choose-image">
          <img src={whyChooseImage} alt="Why Choose Streelancer" />
          <div className="image-overlay">
            <h3>Be a part of Streelancer.</h3>
            <p>24x7 Support</p>
            <p>Verified Talent</p>
            <button>Hire Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;