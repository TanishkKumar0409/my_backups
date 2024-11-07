import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow position-fixed w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
          </ul>
          {token ? (
            <button
              className="btn btn-outline-light ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline-light ms-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
