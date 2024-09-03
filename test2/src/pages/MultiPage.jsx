//! IMPORTS
import React from "react";

//? MAIN FUNCTION
export default function MultiPage(props) {
  //* COMPONENT CODE WITH PROPS
  return (
    <>
      <section
        style={{ color: `${props.txtColor}`, height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1>{props.head}</h1>
      </section>
    </>
  );
}
