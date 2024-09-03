import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Data from "./pages/Data";
import MultiPage from "./pages/MultiPage";
import Accordion from "./Component/Accordion";

function App() {
  const [theme, setTheme] = useState("light");

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [txtColor, setTxtColor] = useState("#1e1e1e");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setBtnText("Enable Dark Mode");
      setTxtColor("#1e1e1e");
      document.body.style.background = "white";
    } else if (theme === "light") {
      setTheme("dark");
      setBtnText("Enable Light Mode");
      document.body.style.background = "#1e1e1e";
      setTxtColor("white");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} theme={theme} btnText={btnText} />
        <Routes>
          <Route
            path="/"
            element={<MultiPage head="Home" txtColor={txtColor} />}
          />
          <Route
            path="/about"
            element={<MultiPage head="About" txtColor={txtColor} />}
          />
          <Route
            path="/blog"
            element={<MultiPage head="Blog" txtColor={txtColor} />}
          />
          <Route path="/contact" element={<Accordion txtColor={txtColor} />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
