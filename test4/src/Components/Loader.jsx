import React from "react";

export default function Loader() {
  return (
    <>
      <section className="MultiPageMain d-flex justify-content-center align-items-center">
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
}
