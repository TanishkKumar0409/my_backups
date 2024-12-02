import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function RecentFiles() {
  // Define your OwlCarousel options here
  const owlOptions = {
    loop: true,
    margin: 10,
    dots: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
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

  return (
    <>
      <section className="container">
        <div className="row">
          <h2>Recent Files</h2>
          <div className="col">
            <OwlCarousel className="owl-theme" {...owlOptions}>
              {urls.map((item, index) => (
                <div className="item" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={`https://pixlr.com/images/generator/photo-generator.webp`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <p className="truncated-file-name">{item}</p>
                      <button className="btn custom-btn btn-custom overflow-hidden">View File</button>
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
