import React from "react";

export default function Loader(props) {
  return (
    <>
      <section
        className="MultiPageMain d-flex justify-content-center align-items-center"
        style={props.RootColors}
      >
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    </>
  );
}
