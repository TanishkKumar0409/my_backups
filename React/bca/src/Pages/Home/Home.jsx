import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <div
        className={`container-fluid ${
          props.theme === "sun" ? "bg-white" : "bg-black"
        } position-relative p-0`}
      >
        <nav
          class={`navbar navbar-expand-lg navbar-${
            props.theme === "sun" ? "light" : "dark"
          } w-100 bg-sec-custom position-fixed`}
        >
          <div class="container-fluid">
            <Link class="navbar-brand text-red  fw-semibold" to="/">
              <i className="fa fa-user-edit me-2"></i>BCA
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <Link to={`/sign-in`} class="btn btn-red" type="submit">
                Sign In
              </Link>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row vh-100 text-center align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="p-5 rounded bg-sec-custom">
                <h1 className="display-1 fw-bold">Home</h1>
                <p>
                  For Access The All Data, Please{" "}
                  <Link to={`/sign-in`}>Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
