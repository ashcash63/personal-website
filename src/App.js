import React from "react";
import styles from "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";

import "@fontsource/poppins";
function App(){
  return (
    <div className = {styles.App}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;