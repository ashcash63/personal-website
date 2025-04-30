import React from "react";
import "./NavBar.css";


const Navbar = () => {
    return (
        <nav className ="navbar">
            <div className = "logo">🦄<span>AC</span>
            </div>
         <ul className="nav-links"> 
            <li><a href= "#Home">Home</a></li>
            <li><a href= "#About">About</a></li>
            <li><a href = "#Experience">Experience</a></li>
            <li><a href = "#Projects">Projects</a></li>
            <li><a href = "#Contact">Contact</a></li>
         </ul>
        </nav>
    );
}
export default Navbar;