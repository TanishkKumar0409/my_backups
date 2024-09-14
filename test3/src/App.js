import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Projects from "./Component/Project";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Testimonials from "./Component/Testimonials";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import About from "./Component/About";

function App() {
  return <>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Education />
  <Testimonials />
  <Gallery />
  <Contact />
  <Footer />
  </>;
}

export default App;
