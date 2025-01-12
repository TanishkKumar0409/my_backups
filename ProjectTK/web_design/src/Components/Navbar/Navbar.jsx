import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile";
import { noFileAPI } from "../../Services/API/API";

export default function Navbar() {
  const [navClass, setNavclass] = useState("");
  const location = useLocation();
  const adminToken = localStorage.getItem("adminToken");

  useEffect(() => {
    const handleScroll = () => {
      const pageScroll = window.scrollY;
      setNavclass(pageScroll > 50 ? "navbarCustom" : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  const username = JSON.parse(localStorage.getItem("user"));

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await noFileAPI.get(`/user/${username}`);
      setUserData(response.data);
    };

    const intervalId = setInterval(() => getData(), 1000);

    return () => clearInterval(intervalId);
  }, [username]);

  const APIurl = process.env.REACT_APP_API;

  return (
    <header
      className={`responsiveNavbar position-fixed w-100 ${navClass}`}
      style={{ zIndex: 999 }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
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
                src={`${APIurl}${userData.profile}`}
                className="rounded-circle"
                width={"25px"}
                height={"25px"}
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
                <Link
                  className={`nav-link fw-bold fs-5 ${isActive("/main")}`}
                  to="/main"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold fs-5 ${isActive(
                    "/main/history"
                  )}`}
                  to="/main/history"
                >
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold fs-5 ${isActive(
                    "/main/storage"
                  )}`}
                  to="/main/storage"
                >
                  Storage
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold fs-5 ${isActive("/contact")}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

              {adminToken ? (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold fs-5 ${isActive(
                        "/admin/dashboard"
                      )}`}
                      to="/admin/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold fs-5 ${isActive(
                        "/admin/dashboard/info"
                      )}`}
                      to="/admin/dashboard/info"
                    >
                      Admins
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold fs-5 ${isActive(
                        "/admin/dashboard/user"
                      )}`}
                      to="/admin/dashboard/user"
                    >
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold fs-5 ${isActive(
                        "/admin/dashboard/query"
                      )}`}
                      to="/admin/dashboard/query"
                    >
                      Queries
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link fw-bold fs-5 ${isActive(
                        "/admin/dashboard/newsletter"
                      )}`}
                      to="/admin/dashboard/newsletter"
                    >
                      Newsletters
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <button
              className="btn btn-custom custom-btn p-2 px-4 shadow-sm d-none d-lg-flex align-items-center ms-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasProfile"
              aria-controls="offcanvasProfile"
            >
              <img
                src={`${APIurl}${userData.profile}`}
                className="rounded-circle"
                style={{ width: "30px", height: "30px" }}
                alt="User Avatar"
              />
              <span className="ms-2">{userData.username}</span>
            </button>
          </div>
        </div>
      </nav>

      <Profile userData={userData} />
    </header>
  );
}
