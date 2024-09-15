import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./SectionComponents/Navbar";
import Error from "./Pages/error/Error";
import Home from "./Pages/Home/Home";

function App() {
  const [darkTheme, setDarkTheme] = useState("dark");
  const [SecondaryTheme, setSecondaryTheme] = useState("secondary");
  const [ThemeText, setThemeText] = useState("sun");
  const toggleTheme = () => {
    if (darkTheme === "light") {
      setDarkTheme("dark");
      setSecondaryTheme("secondary");
      setThemeText("sun");
    } else if (darkTheme === "dark") {
      setDarkTheme("light");
      setSecondaryTheme("secondary-subtle");
      setThemeText("moon");
    }
    console.log(darkTheme);
    console.log(SecondaryTheme);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          toggleTheme={toggleTheme}
          darkTheme={darkTheme}
          ThemeText={ThemeText}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home darkTheme={darkTheme} SecondaryTheme={SecondaryTheme} />
            }
          />
          <Route path="*" element={<Error darkTheme={darkTheme} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
