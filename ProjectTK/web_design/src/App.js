import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { pdfjs } from 'react-pdf';

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
import Storage from "./Pages/StoragePages/Storage/Storage";
import FileView from "./Pages/FileView/FileView";
import ContactUs from "./Pages/CotactUs/ContactUs";
import Dashboard from "./Backend/BackendPages/Dashboard/Dashboard";
import Admin from "./Backend/BackendPages/Admin/Admin";
import ViewUser from "./Backend/BackendComponents/ViewUsers/ViewUser";

function App() {
  const loginToken = localStorage.getItem("loginToken");

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <AutoScroller />
      {loginToken ? <Navbar /> : <LoginNavbar />}
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/form" element={<ProtectedRoutes><Forms /></ProtectedRoutes>} />

        <Route path="/main" element={<ProtectedRoutes><Main /></ProtectedRoutes>} />
        <Route path="/main/history" element={<ProtectedRoutes><History /></ProtectedRoutes>} />
        <Route path="/main/file/view/:id" element={<ProtectedRoutes><FileView /></ProtectedRoutes>} />
        <Route path="/main/storage" element={<ProtectedRoutes><Storage /></ProtectedRoutes>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />

        <Route path="/admin/dashboard" element={<ProtectedRoutes ><Dashboard /></ProtectedRoutes>} />
        <Route path="/admin/dashboard/:type" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
        <Route path="/admin/dashboard/user/:username" element={<ProtectedRoutes><ViewUser /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
