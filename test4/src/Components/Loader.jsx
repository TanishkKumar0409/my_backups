import React from "react";

export default function Loader(props) {
  return (
    <>
      <section
        className="MultiPageMain d-flex justify-content-center align-items-center"
        style={props.RootColors}
      >
        <div class="spinner-grow text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
}
