import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Forms from "./Pages/Forms/Forms";
import History from "./Pages/History/History";
import Home from "./Pages/Home/Home";
import LoginNavbar from "./Components/Navbar/LoginNavbar/LoginNavbar";

function App() {
  return (
    <BrowserRouter>
      <AppWithNavbar />
    </BrowserRouter>
  );
}

function AppWithNavbar() {
  const location = useLocation();
  const loginToken = localStorage.getItem("loginToken");

  return (
    <>
      <ToastContainer position="top-center" />
      {location.pathname !== "/form" && (
        loginToken ? <Navbar /> : <LoginNavbar />
      )}
      <Routes>
        {loginToken ? (
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/user/history" element={<History />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Forms />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
