import React from "react";

export default function Error(props) {
  return (
    <>
      <section
        className={`vh-100 d-flex flex-column justify-content-center align-items-center bg-${
          props.darkTheme
        } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
      >
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-4">Oops! Page not found</h2>
        <p className="lead">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className={`btn btn-${
            props.darkTheme === "dark" ? "light" : "dark"
          } mt-4`}
        >
          Go back to Home
        </a>
      </section>
    </>
  );
}
