import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddUser from "./Pages/AddUser/AddUser";
import ManageUser from "./Pages/ManageUser/ManageUser";
import SignIn from "./Pages/Forms/SignIn/SignIn";
import SignUp from "./Pages/Forms/SignUp/SignUp";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import View from "./Pages/View/View";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProfile from "./Pages/View/AdminProfile/AdminProfile";

function App() {
  const token = localStorage.getItem("token");
  const [openClass, setOpenClass] = useState("");
  const toggleOpenClass = () => {
    if (openClass === "") {
      setOpenClass("open");
    } else if (openClass === "open") {
      setOpenClass("");
    }
  };

  const randomTheme = Math.floor(Math.random() * 2);

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

  const [theme, setTheme] = useState(randomTheme === 1 ? "sun" : "moon");

  const handleTheme = () => {
    theme === "sun" ? setTheme("moon") : setTheme("sun");
  };

  const [fullIcon, setFullIcon] = useState("expand");

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

  return (
    <>
      <div style={theme === "sun" ? light : dark}>
        <BrowserRouter>
          <ToastContainer
            theme={theme === "sun" ? "light" : "dark"}
            position="top-center"
          />
          <Routes>
            {token !== null ? (
              <>
                <Route
                  path="/"
                  element={
                    <Dashboard
                      toggleOpenClass={toggleOpenClass}
                      openClass={openClass}
                      handleTheme={handleTheme}
                      theme={theme}
                      toggleFullScreen={toggleFullScreen}
                      fullIcon={fullIcon}
                    />
                  }
                />
                <Route
                  path="/add-user"
                  element={
                    <AddUser
                      toggleOpenClass={toggleOpenClass}
                      openClass={openClass}
                      handleTheme={handleTheme}
                      theme={theme}
                      toggleFullScreen={toggleFullScreen}
                      fullIcon={fullIcon}
                    />
                  }
                />
                <Route
                  path="/manage-user"
                  element={
                    <ManageUser
                      toggleOpenClass={toggleOpenClass}
                      openClass={openClass}
                      handleTheme={handleTheme}
                      theme={theme}
                      toggleFullScreen={toggleFullScreen}
                      fullIcon={fullIcon}
                    />
                  }
                />
                <Route
                  path="/view/:id"
                  element={
                    <View
                      toggleOpenClass={toggleOpenClass}
                      openClass={openClass}
                      handleTheme={handleTheme}
                      theme={theme}
                      toggleFullScreen={toggleFullScreen}
                      fullIcon={fullIcon}
                    />
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <AdminProfile
                      toggleOpenClass={toggleOpenClass}
                      openClass={openClass}
                      handleTheme={handleTheme}
                      theme={theme}
                      toggleFullScreen={toggleFullScreen}
                      fullIcon={fullIcon}
                    />
                  }
                />
              </>
            ) : (
              <>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="*" element={<SignIn theme={theme} />} />
                <Route path="/sign-in" element={<SignIn theme={theme} />} />
                <Route path="/sign-up" element={<SignUp theme={theme} />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
