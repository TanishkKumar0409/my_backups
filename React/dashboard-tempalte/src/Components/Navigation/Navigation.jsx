import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const path = location.pathname;
  const [hider, setHider] = useState("");
  const [open, setOpen] = useState("");

  useEffect(() => {
    if (path === "/sign-in" || path === "/sign-up") {
      setHider("d-none");
    } else {
      setHider("");
    }
  }, [path]);
  const handleToggle = () => {
    if (open === "") {
      setOpen("open");
    } else if (open === "open") {
      setOpen("");
    }
    console.log(open);
  };

  return (
    <>
      <div className={`container-fluid position-relative d-flex ${hider} p-0`}>
        <div className={`sidebar pe-4 pb-3 ${open}`}>
          <nav className="navbar bg-sec-custom navbar-dark">
            <Link to="/" className="navbar-brand mx-4 mb-3">
              <h3 className="text-red">
                <i className="fa fa-user-edit me-2"></i>BCA
              </h3>
            </Link>

            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img
                  src="img/user.jpg"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                  alt=""
                />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>

              <div className="ms-3">
                <h6 className="mb-0">Tanishk Kumar</h6>
                <span>Admin</span>
              </div>
            </div>

            <div className="navbar-nav w-100">
              <Link to="/" className="nav-item nav-link active">
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </Link>

              <div className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-users me-2"></i>Users
                </Link>

                <div className="dropdown-menu bg-transparent border-0">
                  <Link to="/" className="dropdown-item">
                    Add User
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Manage users
                  </Link>
                </div>
              </div>

              <Link to="/" className="nav-item nav-link">
                <i className="fa fa-th me-2"></i>Product
              </Link>

              <Link to="/" className="nav-item nav-link">
                <i className="fa fa-shopping-cart me-2"></i>Orders
              </Link>

              <Link to="/" className="nav-item nav-link">
                <i className="fa fa-file-alt me-2"></i>Payment
              </Link>
            </div>
          </nav>
        </div>

        <div className={`content ${open}`}>
          <nav className="navbar navbar-expand bg-sec-custom navbar-dark sticky-top px-4 py-0">
            <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
              <h2 className="text-red mb-0">
                <i className="fa fa-user-edit"></i>
              </h2>
            </Link>

            <button
              className="sidebar-toggler flex-shrink-0 text-red"
              onClick={handleToggle}
            >
              <i className="fa fa-bars"></i>
            </button>

            <form action="" className="d-none d-md-flex ms-4">
              <input
                type="search"
                name=""
                id=""
                className="form-control bg-dark border-0 custom-placeholder"
                placeholder="Search"
              />
            </form>

            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-envelope me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Message</span>
                </button>
                <div className="dropdown-menu dropdown-menu-end bg-sec-custom border-0 rounded-0 rounded-bottom m-0">
                  <Link to="/" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="img/user.jpg"
                        alt=""
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Tanishk Kumar Send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to="/" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        src="img//user.jpg"
                        alt=""
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Tanishk Kumar Send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to="/" className="dropdown-item text-center">
                    See all Messages
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-bell me-lg-2"></i>
                  <span className="d-none d-lg-inline-flex">Notification</span>
                </button>
                <div className="dropdown-menu dropdown-menu-end bg-sec-custom border-0 rounded-0 rounded-bottom m-0">
                  <Link to="/" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Profile Updated</h6>
                    <small>15 minutes ago</small>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to="/" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Password Changed</h6>
                    <small>15 minutes ago</small>
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link to="/" className="dropdown-item text-center">
                    See all Notification
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <button
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="img/user.jpg"
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                    className="rounded-circle me-lg-2"
                  />
                  <span className="d-none d-lg-inline-flex">Tanishk Kumar</span>
                </button>
                <div className="dropdown-menu dropdown-menu-end bg-sec-custom border-0 rounded-0 rounded-bottom m-0">
                  <Link to="/" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/" className="dropdown-item">
                    Settings
                  </Link>
                  <Link to="/sign-in" className="dropdown-item">
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
