import React, { useEffect, useRef} from "react"; // react hook runs side effects after component renders, userEf gives direct access to dOM elements.
import "./About.css";
import aashiImg from './assets/aashisea.png';


const About = () => { // functional component
    const textRef = useRef(null); //refereces to DOM nodes
    const imageRef = useRef(null);

    useEffect(() => { //useEffect Hook
        const observer = new IntersectionObserver( // watches eleements and tells you when they scroll into view (browser API)
            (entries) => { //entries = list of all elements being watched
                entries.forEach(entry => {
                    if(entry.isIntersecting) { // is true when element enters the viewport
                        entry.target.classList.add('visible'); // adda a class visible for CSS
                    }
                });
        },
        {
            threshold: 0.1 // Trigger when 10% of the element is visible
        }
    );
//start observing when component appears
    if (textRef.current) observer.observe(textRef.current); // attaches observer to actual DOM elements
    if (imageRef.current) observer.observe(imageRef.current);
//cleanup when component disappears
    return () => { // cleanup function runs if component unmounts (navigating away) - stops observing the elemnts
        if (textRef.current) observer.unobserve(textRef.current);
        if (imageRef.current) observer.unobserve(imageRef.current);

    };
}, []); // no depenedies mean this runs after the component mounts

    return (
        <section id = "about" className = "about-section">
            <div className = "about-content">
                <div ref= {textRef} className = "about-text"> // text ref here 
                <h2><span className = "gradient-text">About Me</span></h2>
                <p>I'm Aashi Chaubey, a <strong>Computer Engineering</strong> student at the 
                University of Waterloo with a passion for autonomous systems and AI/ML. 
                I'm a software developer on WATonomous Design Team and have interned as a 
                innovation developer at Interac corp, implementing NLP algorithms using Python
                and Tensorflow. On my weekends, I love participating in hackathons and catching up on rom-coms. I am looking 
                for <strong>Winter 2026</strong> internships and would love to get in touch!</p>
                </div>
                <div ref= {imageRef} className = "about-image"> // image ref here
                    <img src= {aashiImg} alt="Aashi" />
                </div>
            </div>
            
            
        </section>


    )
}

export default About;

