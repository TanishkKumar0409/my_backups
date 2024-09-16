import React from "react";

import Hero from "../../SectionComponents/Hero";
import About from "../../SectionComponents/About";
import Projects from "../../SectionComponents/Project";
import Skills from "../../SectionComponents/Skills";
import Education from "../../SectionComponents/Education";
import Testimonials from "../../SectionComponents/Testimonials";
import Gallery from "../../SectionComponents/Gallery";
import Contact from "../../SectionComponents/Contact";
import Footer from "../../SectionComponents/Footer";

export default function Home(props) {
  return (
    <>
      <Hero darkTheme={props.darkTheme} SecondaryTheme={props.SecondaryTheme} />
      <About
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Projects
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Skills
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Education
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Gallery
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Testimonials
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Contact
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
      <Footer
        darkTheme={props.darkTheme}
        SecondaryTheme={props.SecondaryTheme}
      />
    </>
  );
}
