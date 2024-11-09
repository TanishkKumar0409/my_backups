import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand bg-sec-custom navbar-dark sticky-top px-4 py-0">
        <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-red mb-0">
            <i className="fa fa-user-edit"></i>
          </h2>
        </Link>

        <p
          onClick={props.toggleOpenClass}
          className="sidebar-toggler flex-shrink-0 m-0"
        >
          <i className="fa fa-bars"></i>
        </p>


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
              <button className="dropdown-item">
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
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item">
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
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item text-center">
                See all Messages
              </button>
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
              <button className="dropdown-item">
                <h6 className="fw-normal mb-0">Profile Updated</h6>
                <small>15 minutes ago</small>
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item">
                <h6 className="fw-normal mb-0">Password Changed</h6>
                <small>15 minutes ago</small>
              </button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item text-center">
                See all Notification
              </button>
            </div>
          </div>
          <div className="nav-item dropdown">
            <button
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
              <button className="dropdown-item">My Profile</button>
              <button className="dropdown-item">Settings</button>
              <Link to="/sign-in" className="dropdown-item">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
