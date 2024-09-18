import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ search, setSearch, toggleTheme }) {
  const [Icon, setIcon] = useState("sun");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const ToggleIcon = () => {
    if (Icon === "sun") {
      setIcon("moon");
    } else if (Icon === "moon") {
      setIcon("sun");
    }
    toggleTheme();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-custom position-fixed w-100"
        style={{ zIndex: "9999" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user-data" className="nav-link">
                  User Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/image-data" className="nav-link">
                  Image Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/count" className="nav-link">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/text" className="nav-link">
                  Text Transformer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/todo" className="nav-link">
                  To Do List
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <label htmlFor="Search" className="d-none">
                Search Label (Hidden)
              </label>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                id="Search"
                onChange={handleSearchChange}
              />
            </form>
            <Link to="/login">
              <button className="btn-outline-light btn ms-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn-outline-light btn ms-2 shadow">Register</button>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <button
          className="btn btn-primary position-fixed Theme-Btn shadow"
          onClick={ToggleIcon}
          style={{ zIndex: "9999" }}
        >
          <i className={`fa-solid fa-${Icon}`}></i>
        </button>
      </div>
    </>
  );
}
