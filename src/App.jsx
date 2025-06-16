import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Categories from './components/Categories';
import Steps from './components/Steps'; 
import WhyChooseSection from './components/WhyChooseSection';
import Community from './components/community';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Services />
      <Categories />
      <Steps />
      <WhyChooseSection />
      <Community />
      <Footer />
    </div>
  );
};

export default App;
