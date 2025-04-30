

import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className = "about-section">
            <div className = "about-content">
                <div className = "about-text">
                <h2><span className = "gradient-text">About Me</span></h2>
                <p>I'm Aashi Chaubey a first year <strong>Computer Engineering</strong> student at the 
                University of Waterloo with a passion for autonomous systems and AI/ML. 
                I'm a software developer on WATonomous Design Team and have interned as a 
                innovation developer at Interac corp, implementing NLP algorithms using Python
                and Tensorflow. On my weekends, I love participating in hackathons. I am looking 
                for <strong>Winter 2026</strong> internships and would love to get in touch!</p>
                </div>
                <div className = "about-image">
                    <img src = "aashi.png" alt= "Aashi" />
                </div>
            </div>
            
            
        </section>


    )
}

export default About;

