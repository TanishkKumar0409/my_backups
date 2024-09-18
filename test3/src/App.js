import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./SectionComponents/Navbar";
import Error from "./Pages/error/Error";
import Home from "./Pages/Home/Home";

export default function App() {
  const themeModeValue = Math.round(Math.random());
  const [darkTheme, setDarkTheme] = useState(
    themeModeValue === 1 ? "dark" : "light"
  );
  const [SecondaryTheme, setSecondaryTheme] = useState(
    themeModeValue === 1 ? "secondary" : "secondary-subtle"
  );
  const [ThemeText, setThemeText] = useState(
    themeModeValue === 1 ? "sun" : "moon"
  );

  console.log(themeModeValue);
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
