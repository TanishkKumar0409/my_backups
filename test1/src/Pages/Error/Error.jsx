import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="row">
        <div className="col">
          <h1>Oops!</h1>
          <p>
            Something went wrong. The page you're looking for doesn't exist.
          </p>
          <Link to={"/"}>
            <button className="btn btn-primary mt-3">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
