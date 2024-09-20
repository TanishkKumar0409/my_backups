import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Counter from "./Pages/Counter/Counter";
import TextTransform from "./Pages/TextTransform/TextTransform";
import UserDataFetch from "./Pages/UserData/UserDataFetch";
import ViewData from "./Pages/UserData/ViewData/ViewData";
import ViewDataImage from "./Pages/ImageData/ViewData/ViewDataImage";
import ImageData from "./Pages/ImageData/ImageData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/text" element={<TextTransform />} />
          <Route path="/userData" element={<UserDataFetch />} />
          <Route path="/userData/view/:id" element={<ViewData />} />
          <Route path="/imageData" element={<ImageData />} />
          <Route path="/imageData/view/:id" element={<ViewDataImage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
