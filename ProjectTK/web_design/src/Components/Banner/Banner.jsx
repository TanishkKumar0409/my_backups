import React from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";

export default function Banner() {
  return (
    <section className="bgGradient">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <h2>Project TK</h2>
            <p>First line of text goes here. Explain your message briefly.</p>
            <p>Second line of text for additional explanation or details.</p>
          </div>

          <div className="col-md-6 p-5">
            <DragAndDropBox />
          </div>
        </div>
      </div>
    </section>
  );
}
