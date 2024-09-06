import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MultiPages from "./Pages/MultiPages";
import DataFetch from "./Components/DataFetch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MultiPages MainHeading="Home" />} />
          <Route path="/data" element={<DataFetch MainHeading="Home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
