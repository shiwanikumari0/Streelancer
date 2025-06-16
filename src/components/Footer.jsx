import React from 'react';
import '../Footer.css';

import linkedinIcon from '../assets/linkedin.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterXIcon from '../assets/x.png'; // for Twitter/X

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-bottom">
        <div className="footer-column logo-col">
          <div className="logo">
            
            <span className="logo-text">Streelancer</span>
          </div>
          <p>
            India’s largest women-first platform<br />
            for inclusive career building.
          </p>
          <div className="social-icons">
            <img src={linkedinIcon} alt="LinkedIn" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterXIcon} alt="Twitter/X" />
          </div>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li>Academy</li>
            <li>Marketplace</li>
            <li>CXO On Demand</li>
            <li>Community</li>
            <li>DEI Benchmark</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Subscribe</h4>
          <p className="subscribe-text">Get the latest updates and offers.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          <p className="privacy-note">
            By subscribing, you agree to our <span>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

