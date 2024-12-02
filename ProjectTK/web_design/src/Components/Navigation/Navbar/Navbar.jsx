import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileOffcanvas from "../../ProfileOffcanvas/ProfileOffcanvas";

export default function Navbar() {
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleNavClass = () => {
      var Scroll = window.scrollY;
      setNavClass(Scroll > 100 ? "navbarCustom" : "");
    };
    window.addEventListener("scroll", handleNavClass);
  }, []);
  return (
    <header
      className={`${navClass} position-fixed w-100`}
      style={{ zIndex: 999 }}
    >
      <nav className={`navbar navbar-expand-lg navbar-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fw-bold" to="/">
            Project TK
          </Link>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-light d-lg-none me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasProfile"
              aria-controls="offcanvasProfile"
            >
              <img
                src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                className="img-fluid rounded-circle"
                width={"30"}
                alt="User Avatar"
              />
            </button>

            <button
              className="navbar-toggler border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active fw-bold fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold fs-5" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-outline-light d-none d-lg-flex align-items-center ms-3"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasProfile"
              aria-controls="offcanvasProfile"
            >
              <img
                src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                className="img-fluid rounded-circle"
                width={"30"}
                alt="User Avatar"
              />
              <span className="ms-2">Tanishk Kumar</span>
            </button>
          </div>
        </div>
      </nav>

      <ProfileOffcanvas />
    </header>
  );
}
