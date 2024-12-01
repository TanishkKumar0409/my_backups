import React from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";

export default function Banner() {
  return (
    <section className="bgGradient py-5">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6 text-light p-3 p-md-0">
            <div>
              <h2 className="fs-1 fw-bold text-white mb-4 hoverEffect">
                Easy File Upload & Sharing
              </h2>
              <p className="fs-5 textJustify pe-md-5">
                Upload and share your files effortlessly. Simply drag and drop
                your files here to start sharing them securely with others. It's
                quick, hassle-free, and reliable—your files are just a click
                away.
              </p>
            </div>
            <div className="d-flex mt-4">
              <button className="btn btn-custom custom-btn overflow-hidden border-0">
                Let's Start With login
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <DragAndDropBox />
          </div>
        </div>
      </div>
    </section>
  );
}
