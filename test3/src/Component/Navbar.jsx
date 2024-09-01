// Navbar.js
import React from "react";

export default function Navbar({ mystyle }) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ ...mystyle, padding: "1rem", borderRadius: "8px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: mystyle.color }}>
          MyWebsite
        </a>
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
              <a
                className="nav-link active"
                style={{ color: mystyle.color }}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: mystyle.color }} href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                style={{ color: mystyle.color }}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  backgroundColor: mystyle.background,
                  boxShadow: mystyle.boxShadow,
                }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: mystyle.color }}
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: mystyle.color }}
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    style={{ color: mystyle.color }}
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                style={{ color: mystyle.color }}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{
                backgroundColor: mystyle.background,
                color: mystyle.color,
                borderColor: mystyle.color,
                boxShadow: mystyle.boxShadow,
                borderRadius: "5px",
                padding: "0.5rem",
              }}
            />
            <button
              className="btn btn-outline-success"
              style={{
                color: mystyle.color,
                borderColor: mystyle.color,
                boxShadow: mystyle.boxShadow,
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
