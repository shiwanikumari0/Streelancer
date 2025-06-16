import React from 'react';
import '../Community.css';
import communityImage from '../assets/community.png';

function Community() {
  return (
    <section className="join-community">
      <div className="join-container">
        <div className="join-content">
          <h2>Join Streelancer Community !</h2>
          <p>
            A safe space to learn, share, and grow — built for women, queer talent,
            and second-career professionals.
          </p>
          <button className="join-btn">Join Community</button>
        </div>
        <div className="join-image">
          <img src={communityImage} alt="Community" />
        </div>
      </div>
    </section>
  );
}

export default Community;
