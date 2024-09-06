import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MultiPages from "./Pages/MultiPages";
import DataShow from "./Pages/DataShow";
import View from "./Pages/View";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MultiPages MainHeading="Home" />} />
          <Route path="/data" element={<DataShow />} />
          <Route path="/data/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
