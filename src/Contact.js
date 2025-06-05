import React, { useState, useEffect } from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    // displayText is the text that's currently shown (starts as '')
    // setDisplayText updates it letter by letter
    const [displayText, setDisplayText] = useState('');

    const targetText = "Feeel free to get in touch!";
    const typingSpeed = 50; // 50ms per letter

    useEffect(() => {
        let i = 0; // basic loop index
        const typingInterval = setInterval(() => {
            if (i < targetText.length) {
                setDisplayText(prevText => prevText + targetText.charAt(i)); // adds one char at a time
                i++;
            } else {
                clearInterval(typingInterval); // stops interval when complete
            }
        }, typingSpeed);

        return () => {
            clearInterval(typingInterval); // clean up
        };
    }, []);

    return (
        <section id="contact" className="contact-section">
            <h2><span className="gradient-text">Contact</span></h2>
            <h3><span className="typing-effect">{displayText}</span></h3>
            <div className="icons">
                <a href="https://github.com/ashcash63" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-4x"></i>
                </a>

                <a href="https://medium.com/@aashic6" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-medium fa-4x"></i>
                </a>

                <a href="mailto:aashic63@gmail.com">
                    <i className="fa-solid fa-envelope fa-4x"></i>
                </a>

                <a href="https://www.linkedin.com/in/aashi-c-1b4165222/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-4x"></i>
                </a>
            </div>
            <div className="footer">
                <p>Built & Designed by Aashi Chaubey &copy;2025;</p>
            </div>
        </section>
    );
};

export default Contact;
