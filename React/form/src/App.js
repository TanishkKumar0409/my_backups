import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navigations/Navbar";
import Home from "./Pages/Home/Home";
import Insert from "./Components/Forms/Insert/Insert";
import UserTable from "./Components/UserTabel/UserTable";
import EditForm from "./Components/Forms/Edit/EditForm";
import ViewData from "./Components/ViewData/ViewData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<UserTable />} />
          <Route path="/students/add" element={<Insert />} />
          <Route path="/students/edit/:id" element={<EditForm />} />
          <Route path="/students/view/:id" element={<ViewData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
