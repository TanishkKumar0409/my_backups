import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
        <div className="row">
          <div className="col">
            <h1 className="MainHeading">OOPS !</h1>
            <h2 className="Etext">
              <span className="text-danger">404</span> - Page Not Found
            </h2>
            <Link to="/">
              <button className="btn btn-custom shadow text-light mt-3">
                Go to Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
