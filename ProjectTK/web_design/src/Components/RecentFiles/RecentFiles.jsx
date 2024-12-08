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
  ];

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop();
    switch (extension) {
      case "pdf":
        return "fa-file-pdf";
      case "xlsx":
        return "fa-file-excel";
      case "png":
      case "jpg":
        return "fa-file-image";
      case "mp4":
        return "fa-file-video";
      default:
        return "fa-file-alt";
    }
  };

  return (
    <section className="container mt-5">
      <div className="row">
        <h2 className="text-center mb-4">Recent Files</h2>
        <div className="col">
          <OwlCarousel className="owl-theme" {...owlOptions}>
            {urls.map((item, index) => (
              <div className="item" key={index}>
                <div className="cardCustom mx-auto">
                  <div className="cardCustomHead">
                    <i className={`fa ${getFileIcon(item)}`}></i>
                  </div>
                  <div className="cardCustomBody">
                    <h2 className="">{item}</h2>
                    <button className="btn btn-primary viewButton mt-3">View</button>
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
