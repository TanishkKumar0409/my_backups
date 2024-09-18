import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <header className="shadow w-100 position-fixed z-3">
        <div>
          <nav
            id="Main-Nav"
            className={`navbar navbar-expand-lg bg-${props.darkTheme} navbar-${props.darkTheme}`}
          >
            <div className="container-fluid">
              <Link className="navbar-brand ms-5" to="/">
                Tanishk Kumar
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
                <ul className="navbar-nav me-5 mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#education">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#qualities">
                      Qualities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <button
        className={`btn btn-${
          props.darkTheme === "dark" ? "light" : "dark"
        } shadow-lg position-fixed z-3`}
        style={{ bottom: "20px", right: "20px" }}
        onClick={props.toggleTheme}
      >
        <i className={`fa fa-${props.ThemeText}`}></i>
      </button>
    </>
  );
}
