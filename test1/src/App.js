import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextTransformer from "./Pages/TextTransformer";
import CountLetters from "./Pages/Counter";
import TodoList from "./Pages/ToDoLisk";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/text_transformer" element={<TextTransformer />} />
          <Route path="/counter" element={<CountLetters />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
