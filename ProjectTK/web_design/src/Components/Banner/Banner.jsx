import React from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";

export default function Banner() {
  const randomStyle = (index) => ({
    "--w": `${Math.floor(Math.random() * 100)}%`,
    "--x": `${Math.floor(Math.random() * 75) - 20}%`,
    "--y": `${Math.floor(Math.random() * 60) - 20}%`,
    "--z": `${Math.floor(Math.random() * 90) + 10}%`,
  });

  const iconsArray = [
    "file",
    "file-image",
    "file-video",
    "folder-open",
    "folder-shared",
    "share-alt",
    "cloud-download-alt",
    "link",
    "edit",
  ];

  return (
    <section
      className="bgGradient py-5 overflow-hidden position-relative"
      style={{ zIndex: "0" }}
    >
      <div className="container">
        <div className="row flex-column-reverse flex-md-row align-items-center">
          <div className="col-md-6 text-light p-3 p-md-0">
            <h2 className="fs-1 fw-bold text-white mb-4 hoverEffect">
              Easy File Upload & Sharing
            </h2>
            <p className="fs-5 textJustify pe-md-5">
              Upload and share your files effortlessly. Simply drag and drop
              your files here to start sharing them securely with others.
            </p>
            <button className="btn btn-custom custom-btn overflow-hidden border-0 mt-4">
              Let's Start With login
            </button>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <DragAndDropBox />
          </div>
        </div>

        <div className="AnimatedIcons">
          {iconsArray.map((icon, index) => (
            <i
              key={icon}
              className={`fa-solid fa-${icon} ${
                index % 2 === 0 ? "d-md-block d-none" : ""
              }`}
              style={randomStyle(index)} // Pass index for uniqueness
            ></i>
          ))}
        </div>
      </div>
    </section>
  );
}
