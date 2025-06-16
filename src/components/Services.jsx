import React from 'react';
import academy from '../assets/academy.png';
import marketplace from '../assets/marketplace.png';
import registration from '../assets/registration.png';
import employers from '../assets/employers.png';
import '../Services.css';

const Services = () => {
  const services = [
    { 
      img: academy, 
      title: 'Academy', 
      desc: 'Learn & Upskill', 
      para: [
        "Industry-relevant courses for women, queer professionals, returnees, and the silver generation.", 
        "Hands-on learning, live mentorship, real-world projects, and certifications."
      ] 
    },
    { 
      img: marketplace, 
      title: 'Marketplace', 
      desc: 'Find Freelance & Remote Work', 
      para: [
        "Match with freelance gigs or part-time roles based on your skills and goals.",
        "Writer, Designer, Virtual Assistant (VA), SDR & more."
      ]
    },
    { 
      img: registration, 
      title: 'Smart Registration', 
      desc: 'Guided Onboarding', 
      para: [
        "Personalized journey based on your career goals and experience.",
        "AI-powered skill assessment, custom recommendations, and career path mapping."
      ] 
    },
    { 
      img: employers, 
      title: 'Employers', 
      desc: 'Hire Women Talent', 
      para: [
        "Access pre-vetted, remote-ready women across industries.",
        "Fast closures, flexible formats, zero infra cost."
      ] 
    }
  ];

  return (
    <section className="services">
      <h2>Our Services, Your Growth</h2>
      <p>Get industry-ready with the right courses, gigs, and career tools – all in one place.</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p className="desc">{service.desc}</p>
            <ul>
              {service.para.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
