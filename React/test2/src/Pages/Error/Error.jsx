import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light text-dark">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-1 text-warning fw-bold">
              4<sapn className="text-danger">0</sapn>4
            </h1>
            <h2 className="mb-4">
              Oops! We couldn't find that
              <span className="text-danger"> recipe</span>!
            </h2>
            <p className="lead">
              It looks like the recipe you're searching for doesn't exist. How
              about discovering a new one instead?
            </p>
            <Link to="/" className="btn btn-light text-succes shadow me-3 mt-3">
              Discover New Recipes
            </Link>
            <img
              src="https://www.freeiconspng.com/uploads/chef-hat-png-0.png"
              alt="Chef Hat"
              className="mt-4"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
