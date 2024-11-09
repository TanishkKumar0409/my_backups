import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import SignIn from "./Pages/Forms/SignIn/SignIn";
import SignUp from "./Pages/Forms/SignUp/SignUp";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
