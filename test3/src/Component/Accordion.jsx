// Accordion.js
import React from "react";

export default function Accordion({ mystyle }) {
  return (
    <div className="accordion" id="accordionExample">
      <div
        className="accordion-item"
        style={{
          ...mystyle,
          borderRadius: "10px",
          margin: "1rem 0",
          boxShadow: mystyle.boxShadow,
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            style={{
              ...mystyle,
              backgroundColor: mystyle.background,
              color: mystyle.color,
              boxShadow: mystyle.boxShadow,
            }}
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{ color: mystyle.color }}>
            This is the first item's accordion body.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{
          ...mystyle,
          borderRadius: "10px",
          margin: "1rem 0",
          boxShadow: mystyle.boxShadow,
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            style={{
              ...mystyle,
              backgroundColor: mystyle.background,
              color: mystyle.color,
              boxShadow: mystyle.boxShadow,
            }}
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{ color: mystyle.color }}>
            This is the second item's accordion body.
          </div>
        </div>
      </div>
      <div
        className="accordion-item"
        style={{
          ...mystyle,
          borderRadius: "10px",
          margin: "1rem 0",
          boxShadow: mystyle.boxShadow,
        }}
      >
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            style={{
              ...mystyle,
              backgroundColor: mystyle.background,
              color: mystyle.color,
              boxShadow: mystyle.boxShadow,
            }}
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{ color: mystyle.color }}>
            This is the third item's accordion body.
          </div>
        </div>
      </div>
    </div>
  );
}
