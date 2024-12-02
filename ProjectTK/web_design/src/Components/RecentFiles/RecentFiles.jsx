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

  return (
    <>
      <section className="container">
        <div className="row">
          <h2>Recent Files</h2>
          <div className="col">
            <OwlCarousel className="owl-theme" {...owlOptions}>
              <div className="item">
                <h4>1</h4>
              </div>
              <div className="item">
                <h4>2</h4>
              </div>
              <div className="item">
                <h4>3</h4>
              </div>
              <div className="item">
                <h4>4</h4>
              </div>
              <div className="item">
                <h4>5</h4>
              </div>
              <div className="item">
                <h4>6</h4>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}
