import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AuthNavbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrollY, setScrollY] = useState(0);
  const [bgValue, setBgValue] = useState("secondary");

  const isActive = (path) => (pathname === path ? "active" : "");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setBgValue(currentScrollY > 100 ? "light" : "secondary");
  };
  if (scrollY < 0) {
    console.log(scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`position-fixed shadow w-100 bg-${bgValue}`} // Use bgValue here
      >
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${bgValue}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <i className="fa fa-pizza-slice"></i> Pizza Bro's
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
                    <Link className={`nav-link ${isActive("/")}`} to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/RecipeList")}`}
                      to={"/RecipeList"}
                    >
                      Recipe List
                    </Link>
                  </li>
                </ul>
                <button
                  className="btn btn-outline-dark fw-bold"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
