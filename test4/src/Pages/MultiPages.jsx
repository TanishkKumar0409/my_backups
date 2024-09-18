import React from "react";

export default function MultiPages(props) {
  return (
    <>
      <section className="multi-page-main" style={props.RootColors}>
        <div className="heading-container">
          <h1 className="main-heading">{props.MainHeading}</h1>
        </div>
      </section>
    </>
  );
}
