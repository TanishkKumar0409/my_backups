import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LoginForm from "./Pages/LoginForm/LoginForm";
import RegisterForm from "./Pages/RegisterForm/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProtectedRoutes from "./Helper/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" theme="dark" />
      <Routes>
        {/* {public Routes} */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* {Protected Routes} */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
