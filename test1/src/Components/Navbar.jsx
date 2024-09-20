import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const Location = useLocation();
  const Page = Location.pathname;
  const ActiveClass = (path) => {
    const Active = Page === path ? "active" : "";
    return Active;
  };
  return (
    <>
      <header className="position-fixed w-100 shadow header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="/Images/logo.png" width={"50px"} alt="" />
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
                      className={`nav-link ${ActiveClass("/")}`}
                      aria-current="page"
                      to="/"
                      style={{ "--nav-color": "#00aaff" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/count")}`}
                      aria-current="page"
                      to="/count"
                      style={{ "--nav-color": "red" }}
                    >
                      Count
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/text")}`}
                      aria-current="page"
                      to="/text"
                      style={{ "--nav-color": "#ffce00" }}
                    >
                      Text Transform
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/userData")}`}
                      aria-current="page"
                      to="/userData"
                      style={{ "--nav-color": "#00f260" }}
                    >
                      User Data
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/ImageData")}`}
                      aria-current="page"
                      to="/imageData"
                      style={{ "--nav-color": "#00f260" }}
                    >
                      Image Data
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
