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
        <h1>Hi! I'm <span className="gradient-text">Aashi</span> </h1>
        <p>I'm a aspiring <strong>software developer</strong> passionate about <strong>autonomous systems </strong>and <strong>AI/ML</strong></p>
        <button className="cta" onClick={() => scrollToSection('work')}>My work ↓</button>
      </div>
    </section>
  );
}

export default Hero;
