import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="row">
        <div className="col">
          <div className="errorBox">
            <h1 className="errorHeading">Oops!</h1>
            <h3 className="errorBack">404</h3>
            <p className="errorPara">
              Something went wrong. The page you're looking for doesn't exist.
            </p>
            <Link to={"/"}>
              <button
                className="btn p-3 button text-light mt-3"
                style={{ "--color": "gold" }}
              >
                <p>View More</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
