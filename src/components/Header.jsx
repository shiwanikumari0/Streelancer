import React from 'react';
import '../Header.css';
import logo from '../assets/logo.png'; 


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Streelancer Logo" />
        <span>Streelancer</span>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Find Work ▼</a>
        <a href="#">Find Talent ▼</a>
        <a href="#">Why Us</a>
        <a href="#">Community</a>
      </nav>
      <div className="auth-buttons">
        <button className="signup">Sign up</button>
        <button className="login">Log in</button>
      </div>
    </header>
  );
};

export default Header;

