import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <section>
        <header>
          <div>
            <nav className="navbar navbar-expand-lg bg-dark">
              <div className="container-fluid">
                <Link
                  to="/text_transformer"
                  className="navbar-brand text-light"
                >
                  First Project
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
                        to="/text_transformer"
                        className="nav-link text-light"
                      >
                        Text Transformer
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/counter" className="nav-link text-light">
                        Counter
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/todolist" className="nav-link text-light">
                        ToDOList
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex ms-auto" role="search">
                    <input
                      className="form-control me-2 bg-dark text-light border-light"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
}
