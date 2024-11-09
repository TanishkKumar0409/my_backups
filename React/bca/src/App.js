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

function App() {
  const [openClass, setOpenClass] = useState("");
  const toggleOpenClass = () => {
    if (openClass === "") {
      setOpenClass("open");
    } else if (openClass === "open") {
      setOpenClass("");
    }
    console.log(openClass);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                toggleOpenClass={toggleOpenClass}
                openClass={openClass}
              />
            }
          />
          <Route
            path="/add-user"
            element={
              <AddUser
                toggleOpenClass={toggleOpenClass}
                openClass={openClass}
              />
            }
          />
          <Route
            path="/manage-user"
            element={
              <ManageUser
                toggleOpenClass={toggleOpenClass}
                openClass={openClass}
              />
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
