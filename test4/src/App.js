import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MultiPages from "./Pages/MultiPages";
import DataShow from "./Pages/DataShow";
import View from "./Pages/View";
import SimpleForm from "./Pages/SimpleForm";

function App() {
  const [search, setSearch] = useState("");

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
  });

  const [ThemeText, setThemeText] = useState("Enable Light Mode");

  const toggleTheme = () => {
    if (Theme["--secondary-color"] === "#000000") {
      setThemeText("Enable Dark Mode");
      setTheme({
        "--primary-color": "#003366",
        "--secondary-color": "#ffffff",
        "--background-light": "#f2f2f2",
        "--highlight-color": "#0055cc",
        "--info-color": "#003366",
        "--button-hover-bg": "#6699cc",
        "--button-text-color": "#ffffff",
        "--box-shadow-dark": " rgba(0, 0, 0, 0.6)",
        "--box-shadow-light": "rgba(0, 0, 0, 0.3)",
        "--border-color": "#cccccc",
        "--text-shadow": "0 0 3px rgba(255, 255, 255, 0.1)",
      });
    } else {
      setThemeText("Enable Light Mode");
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
        "--text-shadow": "1px 1px 3px rgba(0, 0, 0, 0.8)",
      });
    }
  };

  return (
    <div style={Theme}>
      <BrowserRouter>
        <Navbar
          toggleTheme={toggleTheme}
          ThemeText={ThemeText}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<MultiPages MainHeading="Home" />} />
          <Route path="/data" element={<DataShow search={search} />} />
          <Route path="/data/view/:id" element={<View />} />
          <Route path="/form" element={<SimpleForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
