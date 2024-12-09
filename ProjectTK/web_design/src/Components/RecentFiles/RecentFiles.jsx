import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function RecentFiles() {
  const owlOptions = {
    loop: true,
    margin: 10,
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
    "file1.pdf", "file2.mp4", "file3.jpg", "file4.png", "file5.mp3",
    "file6.html", "file7.css", "file8.js", "file9.java", "file10.txt",
    "file11.docx", "file12.xlsx", "file13.pptx", "file14.csv", "file15.xml",
    "file16.json", "file17.php", "file18.ts", "file19.py", "file20.gif"
  ];


  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();

    const iconMap = {
      pdf: "fa-file-pdf",
      xlsx: "fa-file-excel",
      xls: "fa-file-excel",
      png: "fa-file-image",
      jpg: "fa-file-image",
      jpeg: "fa-file-image",
      gif: "fa-file-image",
      mp4: "fa-file-video",
      docx: "fa-file-word",
      doc: "fa-file-word",
      pptx: "fa-file-powerpoint",
      ppt: "fa-file-powerpoint",
      csv: "fa-file-csv",
      mp3: "fa-file-audio",
      html: "fa-file-code",
      css: "fa-file-code",
      js: "fa-file-code"
    };

    return iconMap[extension] || "fa-file-alt";
  };


  return (
    <>
      <section className="container mt-5 bg-white">
        <div className="row">
          <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Recent Files'" }}>Recent Files</h2>
          <p className="px-5 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eveniet tempora, eius cumque necessitatibus nihil.</p>
          <div className="col">
            <OwlCarousel className="owl-theme" {...owlOptions}>
              {urls.map((item, index) => (
                <div className="item" key={index}>
                  <div className="cardCustom rounded-3 overflow-hidden bg-white">
                    <div className="cardCustomHead h-50 d-flex justify-content-center align-items-center">
                      <i className={`fa text-light fa-beat-fade shadow ${getFileIcon(item)}`}></i>
                    </div>
                    <div className="cardCustomBody h-50 d-flex justify-content-center align-items-center text-center p-4 flex-column">
                      <h2 className="fs-5 fw-bold text-break text-capitalize">{item}</h2>
                      <button className="btn custom-btn btn-custom border-0 mt-3 overflow-hidden">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
