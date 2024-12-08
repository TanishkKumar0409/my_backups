import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function RecentFiles() {
  const owlOptions = {
    loop: true,
    margin: 0,
    dots: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  };

  const urls = [
    "background.png",
    "FileSharingAndPasswordManagementSystem.pdf",
    "javascript.xlsx",
    "lock.png",
    "MyResume.pdf",
    "ProjectTK Design.jpg",
    "Ria DB.xlsx",
    "Tan.png",
    "WhatsApp 2024-11-22 10-53-53.mp4",
    "report.docx",
    "presentation.pptx",
    "invoice.csv",
    "image1.gif",
    "document.txt",
    "notes.md",
    "audio.mp3",
    "video.mp4",
    "data.json",
    "archive.zip",
    "logo.svg",
    "spreadsheet.ods",
    "font.ttf",
    "game.exe",
    "app.apk",
    "code.js",
    "style.css",
    "index.html",
    "about.txt",
    "userGuide.pdf",
    "resume.docx",
  ];

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();

    const iconMap = {
      pdf: "fa-file-pdf",
      xlsx: "fa-file-excel", xls: "fa-file-excel",
      png: "fa-file-image", jpg: "fa-file-image", jpeg: "fa-file-image", gif: "fa-file-image",
      mp4: "fa-file-video", avi: "fa-file-video", mov: "fa-file-video", mkv: "fa-file-video",
      docx: "fa-file-word", doc: "fa-file-word",
      pptx: "fa-file-powerpoint", ppt: "fa-file-powerpoint",
      csv: "fa-file-csv",
      zip: "fa-file-archive", rar: "fa-file-archive", "7z": "fa-file-archive",
      json: "fa-file-code",
      mp3: "fa-file-audio",
      txt: "fa-file-alt", md: "fa-file-alt",
      exe: "fa-gamepad",
      apk: "fa-mobile",
      ods: "fa-file-excel",
      svg: "fa-file-image",
      ttf: "fa-font",
      html: "fa-file-code",
      css: "fa-file-code",
      js: "fa-file-code"
    };

    return iconMap[extension] || "fa-file";
  };


  return (
    <section className="container mt-5">
      <div className="row">
        <h2 className="text-center mb-4">Recent Files</h2>
        <div className="col">
          <OwlCarousel className="owl-theme" {...owlOptions}>
            {urls.map((item, index) => (
              <div className="item" key={index}>
                <div className="cardCustom rounded-3 overflow-hidden bg-white">
                  <div className="cardCustomHead h-50 d-flex justify-content-center align-items-center">
                    <i className={`fa text-light fa-beat-fade ${getFileIcon(item)}`}></i>
                  </div>
                  <div className="cardCustomBody h-50 d-flex justify-content-center align-items-center text-center p-4 flex-column">
                    <h2 className="fs-5 fw-bold text-break">{item}</h2>
                    <button className="btn custom-btn btn-custom border-0 mt-3 overflow-hidden">View</button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
