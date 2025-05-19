import React from "react";
import "./NavBar.css";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id = "navbar" className="navbar">
            <div className="logo">🦄<span>AC</span></div>
            <ul className="nav-links"> 
                <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('exp')}>Experience</a></li>
                <li><a onClick={() => scrollToSection('work')}>Projects</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;