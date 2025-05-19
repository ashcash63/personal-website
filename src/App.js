import React from "react";
import styles from "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Exp from "./Exp";
import Work from "./Work";
import Contact from "./Contact"
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
        <Exp />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
export default App;

