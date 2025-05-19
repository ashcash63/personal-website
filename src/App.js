import React from "react";
import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Exp from "./Exp";
import Work from "./Work";
import Contact from "./Contact"
import ParticlesComponent from './particles';
import "@fontsource/poppins";

export default App;
function App(){
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className="content">
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

