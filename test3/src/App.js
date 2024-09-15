import React, { useState } from "react";
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
  const [darkTheme,setDarkTheme]=useState("light");
  const [SecondaryTheme,setSecondaryTheme]=useState("secondary-subtle");
  const [ThemeText,setThemeText]=useState("Dark Theme")
  const toggleTheme=()=>{
    if(darkTheme==="light"){
      setDarkTheme("dark");
      setSecondaryTheme("secondary");
      setThemeText("Light Theme")
    }else if(darkTheme==="dark"){
      setDarkTheme("light");
      setSecondaryTheme("secondary-subtle");
      setThemeText("Dark Theme")
    }
    console.log(darkTheme)
    console.log(SecondaryTheme)
  }
  return <>
  <Navbar toggleTheme={toggleTheme} darkTheme={darkTheme} ThemeText={ThemeText} />
  <Hero darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <About darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Projects darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Skills darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Education darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Testimonials darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Gallery darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Contact darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  <Footer darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
  </>;
}

export default App;
