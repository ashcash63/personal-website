import React from "react";
import styles from "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import ParticlesComponent from './particles';
import "@fontsource/poppins";

function App(){
  return (
    <div className={styles.App}>
      <ParticlesComponent id="particles" />
      <div className={styles.content}>
        <NavBar />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;