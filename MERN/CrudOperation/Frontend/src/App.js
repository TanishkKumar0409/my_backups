import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import RegisterPage from "./Pages/Register/RegisterPage";
import UserTable from "./Pages/UserTable/UserTable";
import EditForm from "./Pages/EditForm/EditForm";
import ViewData from "./Pages/ViewData/ViewData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students/register" element={<RegisterPage />} />
          <Route path="/students" element={<UserTable />} />
          <Route path="/students/edit/:id" element={<EditForm />} />
          <Route path="/students/view/:id" element={<ViewData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
