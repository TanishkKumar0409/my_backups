import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MultiPages from "./Pages/MultiPages";
import DataShow from "./Pages/DataShow";
import View from "./Pages/View";

function App() {
  const [Theme, setTheme] = useState({
    "--primary-color": "#003366",
    "--secondary-color": "#000000",
    "--background-light": "#1a1a1a",
    "--highlight-color": "#3399ff",
    "--info-color": "#66ccff",
    "--button-hover-bg": "#002244",
    "--button-text-color": "#ffffff",
    "--box-shadow-dark": " rgba(0, 0, 0, 0.6)",
    "--box-shadow-light": "rgba(0, 0, 0, 0.3)",
    "--border-color": "#333",
    "--text-shadow-light": "1px 1px 3px rgba(0, 0, 0, 0.2)",
    "--text-shadow-dark": "2px 2px 5px rgba(0, 0, 0, 0.4)",
  });

  const toggleTheme = () => {
    if (Theme["--secondary-color"] === "#000000") {
      setTheme({
        "--primary-color": "#336699",
        "--secondary-color": "#ffffff",
        "--background-light": "#f2f2f2",
        "--highlight-color": "#0055cc",
        "--info-color": "#003366",
        "--button-hover-bg": "#6699cc",
        "--button-text-color": "#ffffff",
        "--box-shadow-dark": " rgba(0, 0, 0, 0.6)",
        "--box-shadow-light": "rgba(0, 0, 0, 0.3)",
        "--border-color": "#cccccc",
        "--text-shadow-light": "1px 1px 3px rgba(0, 0, 0, 0.2)",
        "--text-shadow-dark": "2px 2px 5px rgba(0, 0, 0, 0.4)",
      });
    } else {
      setTheme({
        "--primary-color": "#003366",
        "--secondary-color": "#000000",
        "--background-light": "#1a1a1a",
        "--highlight-color": "#3399ff",
        "--info-color": "#66ccff",
        "--button-hover-bg": "#002244",
        "--button-text-color": "#ffffff",
        "--box-shadow-dark": " rgba(0, 0, 0, 0.6)",
        "--box-shadow-light": "rgba(0, 0, 0, 0.3)",
        "--border-color": "#333",
        "--text-shadow-light": "1px 1px 3px rgba(0, 0, 0, 0.2)",
        "--text-shadow-dark": "2px 2px 5px rgba(0, 0, 0, 0.4)",
      });
    }
  };

  return (
    <div style={Theme}>
      <BrowserRouter>
        <Navbar RootColors={Theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={<MultiPages MainHeading="Home" RootColors={Theme} />}
          />
          <Route path="/data" element={<DataShow RootColors={Theme} />} />
          <Route path="/data/view/:id" element={<View RootColors={Theme} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
