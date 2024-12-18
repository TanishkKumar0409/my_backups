import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Forms from "./Pages/Forms/Forms";
import History from "./Pages/History/History";

function App() {
  return (
    <BrowserRouter>
      <AppWithNavbar />
    </BrowserRouter>
  );
}

function AppWithNavbar() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="top-center" />
      {location.pathname !== "/form" && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/history" element={<History />} />
        <Route path="/form" element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;
