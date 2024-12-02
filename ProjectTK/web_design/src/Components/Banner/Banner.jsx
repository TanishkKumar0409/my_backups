import React, { useEffect, useState } from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";

export default function Banner() {
  const [iconStyles, setIconStyles] = useState([]);

  const generateRandomStyles = () => {
    const styles = Array.from({ length: 9 }, (_, index) => ({
      "--end-left": `${Math.floor(Math.random() * 100) - index * 10}%`,
      "--start-top": `${Math.floor(Math.random() * 100) - index * 10}%`,
      "--start-left": `${Math.floor(Math.random() * 100) - index * 10}%`,
      "--end-top": `${Math.floor(Math.random() * 100) - index * 10}%`,
    }));
    setIconStyles(styles);
  };

  useEffect(() => {
    generateRandomStyles();
    const interval = setInterval(() => {
      generateRandomStyles();
    }, 45000);
    return () => clearInterval(interval);
  }, []);

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
      className="bgGradient py-5 overflow-hidden position-relative vh-100 align-content-center"
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
              Let's Start With Login
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
              style={iconStyles[index]}
            ></i>
          ))}
        </div>
      </div>
    </section>
  );
}
