import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Form from "./Auth/Form";

function App() {
  return (
    <>
    <Navbar />
    <Form />
    </>
  );
}

export default App;
