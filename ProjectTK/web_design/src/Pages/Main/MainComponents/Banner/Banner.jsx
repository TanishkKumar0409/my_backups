import React, { useEffect, useState } from "react";
import DragAndDropBox from "./DragAndDropBox/DragAndDropBox";
import DownloadLink from "./DownloadLink/DownloadLink";

export default function Banner() {
  const [iconStyles, setIconStyles] = useState([]);
  const [isSend, setIsSend] = useState(false);

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
    "file-audio",
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
      className="bgGradient py-5 overflow-hidden position-relative align-content-center"
      style={{ zIndex: "0", minHeight: "100vh" }}
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
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {isSend ? (
              <DownloadLink />
            ) : (
              <DragAndDropBox onSend={() => setIsSend(true)} />
            )}
          </div>
        </div>

        <div className="AnimatedIcons position-absolute top-0 start-0 w-100 h-100 pe-none">
          {iconsArray.map((icon, index) => (
            <i
              key={icon}
              className={`position-absolute fa-solid fa-${icon} ${
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
