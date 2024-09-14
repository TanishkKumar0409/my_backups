import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Projects from "./Component/Project";
import Skills from "./Component/Skills";
import Education from "./Component/Education";

function App() {
  return <>
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <Education />
  </>;
}

export default App;
