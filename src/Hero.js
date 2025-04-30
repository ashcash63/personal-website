import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi! I'm <span className="gradient-text">Aashi</span> </h1>
        <p>I'm a aspiring <strong>software developer</strong> passionate about <strong>autonomous systems </strong>and <strong>AI/ML</strong></p>
        {/* <div className ="hero-buttons">
            <a href="#projects" className ="button">See My Projects</a>
            <a href="#contact" className = "button secondart">Contact Me</a>
        </div> */}
        <button className="cta">My work ↓</button>
      </div>
    </section>
  );
}

export default Hero;
