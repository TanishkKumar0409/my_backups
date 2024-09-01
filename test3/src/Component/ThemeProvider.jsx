// ThemeProvider.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import DarkMode from "./DarkMode";

export default function ThemeProvider() {
  const [theme, setTheme] = useState("dark");

  const darkModeStyle = {
    background: "#2c2f33",
    color: "#ffffff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  };

  const lightModeStyle = {
    background: "#f0f0f0",
    color: "#333333",
    boxShadow: "0px 4px 10px rgba(200, 200, 200, 0.5)",
  };

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const currentStyle = theme === "dark" ? darkModeStyle : lightModeStyle;

  return (
    <div
      style={{
        backgroundColor: currentStyle.background,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar mystyle={currentStyle} />
      <div className="container">
        <h1 style={{ color: currentStyle.color }} className="mt-5">
          Dark Mode And Light Mode
        </h1>
        <Accordion mystyle={currentStyle} />
        <DarkMode
          mystyle={currentStyle}
          toggleDarkMode={toggleDarkMode}
          theme={theme}
        />
      </div>
    </div>
  );
}
