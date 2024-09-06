import React from "react";
import { Link } from "react-router-dom";

export default function MultiPages(props) {
  return (
    <>
      <section className="multi-page-main">
        <div className="heading-container">
          <h1 className="main-heading">{props.MainHeading}</h1>
          <Link to="/data">
            <button className="btn btn-primary">Lets Read the Data</button>
          </Link>
        </div>
      </section>
    </>
  );
}
