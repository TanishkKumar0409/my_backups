import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Data from "./Data.json"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Forms from "./Pages/Forms/Forms";
import History from "./Pages/History/History";
import Home from "./Pages/Home/Home";
import LoginNavbar from "./Components/Navbar/LoginNavbar/LoginNavbar";
import AutoScroller from "./Helper/AutoScroller/AutoScroller";
import ProtectedRoutes from "./Helper/ProtectedRoutes/ProtectedRoutes";
import Extra from "./Pages/Extra/Extra";
// import FilePreview from "./Pages/Extra/Pr";
// import PdfPreview from "./Pages/Extra/Pr";
import Storage from "./Pages/StoragePages/Storage/Storage";

function App() {
  const loginToken = localStorage.getItem("loginToken");
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <AutoScroller />
      {loginToken ? <Navbar /> : <LoginNavbar />}
      <Routes>
        <Route path="/main" element={<ProtectedRoutes><Main /></ProtectedRoutes>} />
        <Route path="/main/history" element={<ProtectedRoutes><History /></ProtectedRoutes>} />
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/form" element={<ProtectedRoutes><Forms /></ProtectedRoutes>} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/extra" element={<Extra folderData={Data} />} />
        {/* <Route path="/file-preview" element={<PdfPreview />} /> */}
        <Route path="/main/storage" element={<ProtectedRoutes><Storage folderData={Data} /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
