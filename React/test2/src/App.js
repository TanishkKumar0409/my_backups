import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Navbar from "./Components/Navigations/Navbar";
import Error from "./Pages/Error/Error";
import RecipeList from "./Pages/RecipeList/RecipeList";
import Footer from "./Components/Footer/Footer";
import ViewRecipe from "./Pages/ViewRecipe/ViewRecipe";
import AuthNavbar from "./Components/Navigations/AuthNavbar";

function App() {
  const token = localStorage.getItem("Token");
  return (
    <>
      <BrowserRouter>
        <>{token !== null ? <AuthNavbar /> : <Navbar />}</>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          {token !== null ? (
            <>
              <Route path="/RecipeList" element={<RecipeList />} />
              <Route path="/RecipeList/view/:id" element={<ViewRecipe />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
