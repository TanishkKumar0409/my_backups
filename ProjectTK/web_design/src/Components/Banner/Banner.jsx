import React from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";

export default function Banner() {
  return (
    <section className="bgGradient">
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <h2>Project TK</h2>
            <p className="pe-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum incidunt, reiciendis omnis porro pariatur deleniti delectus
              rem quia exercitationem, libero a vitae. Odio aut culpa ut ex id
              alias.
            </p>
          </div>

          <div className="col-md-6">
            <DragAndDropBox />
          </div>
        </div>
      </div>
    </section>
  );
}
