import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const Location = useLocation();
  const pathLocation = Location.pathname;

  const ActiveClass = (path) => {
    return pathLocation === path ? "active" : "";
  };

  return (
    <>
      <header className="position-fixed shadow w-100 header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid px-5">
              <Link className="navbar-brand" to="/">
                <i className="fa fa-magic me-2"></i> Creative Code
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
                    <Link className={`nav-link ${ActiveClass("/")}`} aria-current="page" to="/" style={{ "--navLink": "#e94560" }}>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
