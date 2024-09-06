import React from "react";

export default function MultiPages(props) {
  return (
    <>
      <section className="MultiPageMain d-flex justify-content-center align-items-center">
        <div>
          <h1>{props.MainHeading}</h1>
        </div>
      </section>
    </>
  );
}
