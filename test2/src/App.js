import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Data from "./pages/Data";
import MultiPage from "./pages/MultiPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MultiPage head="Home" />} />
        <Route path="/about" element={<MultiPage head="About" />} />
        <Route path="/blog" element={<MultiPage head="Blog" />} />
        <Route path="/contact" element={<MultiPage head="Contact" />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
