import React, { useEffect, useRef} from "react";
import "./About.css";
import aashiImg from './assets/aashisea.png';


const About = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
        },
        {
            threshold: 0.1 // Trigger when 10% of the elemnt is visible
        }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
        if (textRef.current) observer.unobserve(textRef.current);
        if (imageRef.current) observer.unobserve(imageRef.current);

    };
}, []);

    return (
        <section id = "about" className = "about-section">
            <div className = "about-content">
                <div ref= {textRef} className = "about-text">
                <h2><span className = "gradient-text">About Me</span></h2>
                <p>I'm Aashi Chaubey, a <strong>Computer Engineering</strong> student at the 
                University of Waterloo with a passion for autonomous systems and AI/ML. 
                I'm a software developer on WATonomous Design Team and have interned as a 
                innovation developer at Interac corp, implementing NLP algorithms using Python
                and Tensorflow. On my weekends, I love participating in hackathons and catching up on rom-coms. I am looking 
                for <strong>Winter 2026</strong> internships and would love to get in touch!</p>
                </div>
                <div ref= {imageRef} className = "about-image">
                    <img src= {aashiImg} alt="Aashi" />
                </div>
            </div>
            
            
        </section>


    )
}

export default About;

