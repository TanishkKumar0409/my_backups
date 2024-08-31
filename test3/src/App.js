import React, { useState } from "react";
import "./App.css";
import Accordion from "./Component/Accordion";
import Navbar from "./Component/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section
        className={`${darkMode ? "bg-dark text-white" : "bg-light text-dark"} main-section`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Accordion darkMode={darkMode} />
      </section>
    </>
  );
}

export default App;
