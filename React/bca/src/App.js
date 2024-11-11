import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddUser from "./Pages/AddUser/AddUser";
import ManageUser from "./Pages/ManageUser/ManageUser";
import SignIn from "./Pages/Forms/SignIn/SignIn";
import SignUp from "./Pages/Forms/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import View from "./Pages/View/View";
import AdminProfile from "./Pages/View/AdminProfile/AdminProfile";
import AllProducts from "./Pages/Products/AllProducts";
import DashboardLayout from "./Layouts/DashboardLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const [openClass, setOpenClass] = useState("");
  const [theme, setTheme] = useState("moon");
  const [fullIcon, setFullIcon] = useState("expand");

  const toggleOpenClass = () => {
    setOpenClass(openClass === "" ? "open" : "");
  };

  const handleTheme = () => {
    setTheme(theme === "sun" ? "moon" : "sun");
  };

  const toggleFullScreen = () => {
    const element = document.getElementById("root");
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
      document.exitFullscreen();
      setFullIcon("expand");
    } else {
      element.requestFullscreen();
      setFullIcon("compress");
    }
  };

  const light = {
    "--primary": "#007bff",
    "--primary-hover": "#0056b3",
    "--secondary": "#ebedef",
    "--light": "#000000",
    "--dark": "#ffffff",
  };

  const dark = {
    "--primary": "#ed1616",
    "--primary-hover": "#bc1212",
    "--secondary": "#191c24",
    "--light": "#6c7293",
    "--dark": "#000000",
  };

  return (
    <div style={theme === "sun" ? light : dark}>
      <BrowserRouter>
        <ToastContainer
          theme={theme === "sun" ? "light" : "dark"}
          position="top-center"
        />
        <Routes>
          {token ? (
            <Route
              element={
                <DashboardLayout
                  toggleOpenClass={toggleOpenClass}
                  openClass={openClass}
                  handleTheme={handleTheme}
                  theme={theme}
                  toggleFullScreen={toggleFullScreen}
                  fullIcon={fullIcon}
                />
              }
            >
              <Route path="/" element={<Dashboard theme={theme} />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/manage-user" element={<ManageUser />} />
              <Route path="/view/:id" element={<View />} />
              <Route path="/admin" element={<AdminProfile />} />
              <Route path="/products" element={<AllProducts />} />
            </Route>
          ) : (
            <>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/sign-in" element={<SignIn theme={theme} />} />
              <Route path="/sign-up" element={<SignUp theme={theme} />} />
              <Route path="*" element={<SignIn theme={theme} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
