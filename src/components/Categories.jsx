import React from 'react';
import '../Categories.css';
import career from '../assets/career.jpg';
import silver from '../assets/silver.jpg';
import lgbtq from '../assets/lgbtq.jpg';
import freshFree from '../assets/fresh.jpg';
import pwd from '../assets/pwd.jpg';

const Categories = () => {
  const categories = [
    {
      title: 'Career Returnees',
      description: 'Restart. Rebuild. Bounce back into the workforce with ease, guided by our dedicated programs and support systems.',
      image: career,
      buttonText: 'Register Now'
    },
    {
      title: 'Silver Generation',
      description: 'Continue your professional journey with tailored opportunities for seasoned experts and senior talent.',
      image: silver,
      buttonText: 'Register Now'
    },
    {
      title: 'LGBTQIA+ Talent',
      description: 'Find safe, inclusive spaces and job roles that respect and value your identity and contributions.',
      image: lgbtq,
      buttonText: 'Register Now'
    },
    {
      title: 'Fresh Freelancers & Students',
      description: 'Start smart. Earn early. Discover gigs and projects best suited for emerging freelancers and young talent.',
      image: freshFree,
      buttonText: 'Register Now'
    },
    {
      title: 'Persons with Disabilities (PwD)',
      description: 'Skillfully enabled. Discover work landscapes tailored to your needs, strengths, and preferences with support.',
      image: pwd,
      buttonText: 'Register Now'
    },
  ];

  return (
    <div className="category-section">
      <h2>Find Your Fit, Your Way</h2>
      <p>Explore curated freelance and job roles by category—designed for every stage, story, and strength.</p>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-info">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button>{category.buttonText}</button>
            </div>
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
