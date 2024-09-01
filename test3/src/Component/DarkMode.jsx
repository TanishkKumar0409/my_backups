// DarkModeToggle.js
import React from "react";

export default function DarkMode({ mystyle, toggleDarkMode, theme }) {
  return (
    <div className="container my-4">
      <button
        className="btn"
        style={{
          ...mystyle,
          padding: "0.5rem 1.5rem",
          borderRadius: "5px",
          boxShadow: mystyle.boxShadow,
          backgroundColor: theme === "dark" ? "#4c4f52" : "#e0e0e0",
          color: theme === "dark" ? "#ffffff" : "#333333",
        }}
        onClick={toggleDarkMode}
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
