import React, { useEffect } from "react";
import styles from "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Exp from "./Exp";
import Work from "./Work";
import Contact from "./Contact";
import ParticlesComponent from './particles';
import "@fontsource/poppins";
import Conbar from "./Conbar";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={styles.App}>
      <div className="custom-cursor" id="custom-cursor"></div>
      <ParticlesComponent id="particles" />
      <NavBar />
      <Conbar />
      <div className={styles.content}>
        <Hero />
        <About />
        <Exp />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
