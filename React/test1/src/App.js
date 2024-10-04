import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImagesData from "./Pages/ImagesData/ImagesData";
import Navbar from "./Components/Navigation/Navbar";
import ViewImageData from "./Pages/ViewImageData/ViewImageData";
import AlbumPage from "./Pages/Album/AlbumPage";
import AlbumList from "./Pages/Album/AlbumList/AlbumList";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-images" element={<ImagesData search={search} />} />
          <Route path="/image/view/:id" element={<ViewImageData />} />
          <Route path="/album" element={<AlbumPage search={search} />} />
          <Route
            path="/album/list/:id"
            element={<AlbumList search={search} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}