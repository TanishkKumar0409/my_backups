import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(props) {
  const location = useLocation(); // Get the current location

  // Function to determine if the link should have the active class
  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const Admin = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className={`sidebar pe-4 pb-3 ${props.openClass}`}>
        <nav className="navbar bg-sec-custom navbar-dark">
          <Link to="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-red">
              <i className="fa fa-user-edit me-2"></i>BCA
            </h3>
          </Link>

          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <Link to={`/`}>
                <img
                  src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                  alt=""
                />
              </Link>
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>

            <div className="ms-3">
              <Link to={`/`} className="text-decoration-none">
                <h6 className="mb-0">{Admin.username}</h6>
              </Link>
              <span>Admin</span>
            </div>
          </div>

          <div className="navbar-nav w-100">
            <Link to="/" className={`nav-item nav-link ${getActiveClass("/")}`}>
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>

            <div className="nav-item dropdown">
              <button
                className="nav-link w-100 text-start dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-users me-2"></i>Users
              </button>

              <div className="dropdown-menu bg-transparent border-0">
                <Link
                  to="/add-user"
                  className={`dropdown-item ${getActiveClass("/add-user")}`}
                >
                  Add User
                </Link>
                <Link
                  to="/manage-user"
                  className={`dropdown-item ${getActiveClass("/manage-user")}`}
                >
                  Manage Users
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
