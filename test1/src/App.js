import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImagesData from "./Pages/ImagesData/ImagesData";
import Navbar from "./Components/Navigation/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ImagesData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
