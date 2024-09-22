import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ search, setSearch }) {
  const Location = useLocation();
  const pathLocation = Location.pathname;

  const ActiveClass = (path) => {
    return pathLocation === path ? "active" : "";
  };
  const handlesearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header className="position-fixed shadow w-100 header py-2">
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
                      style={{ "--navLink": "#e94560" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/all-images")}`}
                      aria-current="page"
                      to="/all-images"
                      style={{ "--navLink": "blue" }}
                    >
                      All Images
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/album")}`}
                      aria-current="page"
                      to="/album"
                      style={{ "--navLink": "#00ffd4" }}
                    >
                      Album
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${ActiveClass("/error")}`}
                      aria-current="page"
                      to="/error"
                      style={{ "--navLink": "darkgoldenrod" }}
                    >
                      Error
                    </Link>
                  </li>
                </ul>
                <div className="d-flex">
                  <label htmlFor="serach" className="d-none"></label>
                  <div className="input-box rounded-pill">
                    <input
                      type="text"
                      id="serach"
                      placeholder={"Search Here"}
                      className="form-custom shadow rounded-pill me-3 text-white"
                      onChange={handlesearch}
                    />
                  </div>
                  <Link to={`/login`}>
                    <button
                      className="btn p-3 button ms-2 text-light"
                      style={{ "--color": "red" }}
                    >
                      <p style={{ fontSize: "120%" }}>Login</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
