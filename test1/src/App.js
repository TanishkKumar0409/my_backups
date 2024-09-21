import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImagesData from "./Pages/ImagesData/ImagesData";
import Navbar from "./Components/Navigation/Navbar";
import Loader from "./Components/Loader/Loader";
import ViewImageData from "./Pages/ImagesData/ViewImageData/ViewImageData";
import Album from "./Pages/Album/Album";
// import Album from "./Pages/Album/Album";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ImagesData />} />
          <Route path="/image/view/:id" element={<ViewImageData />} />
          <Route path="/album" element={<Album />} />
          <Route path="*" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
