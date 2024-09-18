import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="multi-page-main">
      <div className="heading-container">
        <h1 className="main-heading">404 - Page Not Found</h1>
        <p className="info-name">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn-primary">Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
}
