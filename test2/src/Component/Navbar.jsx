import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header>
      <div>
        <nav className={`navbar navbar-expand-lg bg-${props.theme} shadow-lg`}>
          <div className="container">
            <Link
              className={`navbar-brand text-${
                props.theme == "dark" ? "light" : "dark"
              }`}
              to="/"
            >
              Navbar
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.theme == "dark" ? "light" : "dark"
                    } active`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.theme == "dark" ? "light" : "dark"
                    } active`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.theme == "dark" ? "light" : "dark"
                    } active`}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.theme == "dark" ? "light" : "dark"
                    } active`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleTheme}
                />
                <label
                  className={`form-check-label text-${
                    props.theme == "dark" ? "light" : "dark"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.btnText}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
