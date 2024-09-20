import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MultiPages from "./Pages/MultiPages";
import UserDataShow from "./Pages/UserDataShow";
import View from "./Pages/UserView";
import Counter from "./Pages/Counter";
import Error from "./Pages/Error";
import TextTransformer from "./Pages/TextTransformer";
import TodoList from "./Pages/TodoList";
import LoginForm from "./Pages/LoginForm";
import RegistrationForm from "./Pages/RegistrationForm";
import ImageData from "./Pages/ImageDataShow";
import ImageShow from "./Pages/ImageShow";

export default function App() {
  const [search, setSearch] = useState("");
  const themeValue = Math.round(Math.random());
  const darkTheme = {
    "--secondary-color": "#000000",
    "--background-light": "#1a1a1a",
    "--highlight-color": "#3399ff",
    "--info-color": "#66ccff",
    "--button-hover-bg": "#002244",
    "--border-color": "#333",
  };
  const lightTheme = {
    "--secondary-color": "#ffffff",
    "--background-light": "#f2f2f2",
    "--highlight-color": "#0055cc",
    "--info-color": "#003366",
    "--button-hover-bg": "#6699cc",
    "--border-color": "#cccccc",
    "--text-shadow": "0 0 3px rgba(255, 255, 255, 0.1)",
  };
  const [Theme, setTheme] = useState(themeValue === 1 ? darkTheme : lightTheme);

  const [ThemeText, setThemeText] = useState(themeValue === 1 ? "sun" : "moon");

  const toggleTheme = () => {
    if (Theme["--secondary-color"] === "#000000") {
      setThemeText("moon");
      setTheme(lightTheme);
    } else {
      setThemeText("sun");
      setTheme(darkTheme);
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
          {/* Navbar Routes */}
          <Route path="/" element={<MultiPages MainHeading="Home" />} />
          <Route path="/user-data" element={<UserDataShow search={search} />} />
          <Route path="/image-data" element={<ImageData search={search} />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/Text" element={<TextTransformer />} />
          <Route path="/todo" element={<TodoList />} />

          {/* Extra Routes */}
          <Route path="*" element={<Error />} />
          <Route path="/user-data/user-view/:id" element={<View />} />
          <Route path="/image-data/image-view/:id" element={<ImageShow />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
