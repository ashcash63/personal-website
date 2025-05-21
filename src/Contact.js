import React from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    return (
        <section id = "contact" className = "contact-section">
            <h2><span className = "gradient-text">Contact</span></h2>
            <h3>Feel free to get in touch!</h3>
            <div className = "icons">
                <a href ="https://github.com/ashcash63" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-4x"></i>
                </a>
                
                <a href = "https://medium.com/@aashic6" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-medium fa-4x"></i>
                </a>
                
                <a href= "mailto:aashic63@gmail.com">
                    <i className="fa-solid fa-envelope fa-4x"></i>
                </a>
                <a href = "https://www.linkedin.com/in/aashi-c-1b4165222/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-4x"></i>
                </a> 
            </div>
            <div className = "footer">
                <p>Built & Designed by Aashi Chaubey &copy;2025;</p>
            </div>
        </section>
    )
}

export default Contact