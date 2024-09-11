import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  search,
  setSearch,
  RootColors,
  toggleTheme,
  ThemeText,
}) {
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
    toggleTheme(); // Call the theme toggle function when the icon is toggled
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom" style={RootColors}>
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
                <Link to="/data" className="nav-link">
                  Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link">
                  Form
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>
      </nav>
      <div>
        <button
          className="btn btn-primary position-fixed Theme-Btn"
          onClick={ToggleIcon}
        >
          <i className={`fa-solid fa-${Icon}`}></i>
        </button>
      </div>
    </>
  );
}
