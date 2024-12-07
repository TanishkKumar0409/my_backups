import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Forms/Login/Login";
import Register from "./Pages/Forms/Register/Register";
import Main from "./Pages/Main/Main";
import UserHistory from "./Pages/UserHistory/UserHistory";
import UserStorage from "./Pages/UserStorage/UserStorage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/main" element={<Main />} />
          <Route path="/main/history" element={<UserHistory />} />
          <Route path="main/storage" element={<UserStorage />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
