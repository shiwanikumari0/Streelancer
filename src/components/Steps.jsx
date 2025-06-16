
import React from 'react';
import '../Steps.css';

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Complete your profile and take our career assessment quiz',
    icon: '➕',
  },
  {
    number: '02',
    title: 'Smart Routing',
    description: 'Get personalized recommendations based on your skills and goals',
    icon: '🎧',
  },
  {
    number: '03',
    title: 'Learn & Build Profile',
    description: 'Enhance your skills and create a standout professional profile',
    icon: '📘',
  },
  {
    number: '04',
    title: 'Get Hired',
    description: 'Connect with employers and secure opportunities that match your profile',
    icon: '📂',
  },
];

function ProcessSteps() {
  return (
    <section className="steps-section">
      <div className="steps-header">
        <h2>Find Your Fit, Your Way</h2>
        <p>
          Explore curated freelance and job-ready roles by category—designed for every stage,
          story, and strength.
        </p>
      </div>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">
              <span className="circle"></span>
              {step.number}
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            <div className="step-icon">{step.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSteps;
