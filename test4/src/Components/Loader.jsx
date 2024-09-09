import React from "react";

export default function Loader() {
  return (
    <>
      <section className="MultiPageMain d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
}
