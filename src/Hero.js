import React from "react";
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Hi! I'm </h2> 
        <h1><span className="gradient-text">Aashi Chaubey.</span> </h1>
        <h3>Software Engineer & FullStack Developer</h3>
        
        <button className="cta" onClick={() => scrollToSection('work')}>My work ↓</button>
      </div>
    </section>
  );
}

export default Hero;
