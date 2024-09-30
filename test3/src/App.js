import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import Form from "./Auth/Form";
import AuthNav from "./Components/Navigation/AuthNav";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        {token !== null ? <AuthNav /> : <Navbar />}
        <Routes>
          <Route path="/Form" element={<Form />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
