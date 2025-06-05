import React from "react";
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => { // when u click on button it should scroll to section
    const element = document.getElementById(sectionId); // find elemnt on the page with tha ID
    if (element) { // if element exixts scrolll to it
      element.scrollIntoView({ behavior: 'smooth' }); // transiton
    }
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-heading">
          <div className="name-block">
            <h2>Hi, I'm</h2>
            <h1><span className="gradient-text">Aashi Chaubey</span></h1>
          </div>

    </div>
        {/* <div className = "hero-heading">
          <h2>Hi! I'm </h2> 
          <h1><span className="gradient-text">Aashi Chaubey.</span> </h1>
        </div> */}
        <h3>Software Engineer & FullStack Developer</h3>

        
        <button className="cta" onClick={() => scrollToSection('work')}>My work ↓</button>
      </div>
    </section>
  );
}

export default Hero;
