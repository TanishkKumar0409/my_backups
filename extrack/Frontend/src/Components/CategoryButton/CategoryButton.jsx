import React, { useMemo } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CategoryButton(props) {
  const Amounts = useMemo(() => props.Amounts || [], [props.Amounts]);

  const carouselOptions = {
    loop: true,
    dots: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <div className="row p-3 bg-dark shadow rounded-4">
      <div className="col">
        <OwlCarousel className="owl-theme" {...carouselOptions}>
          {Amounts.map((item, index) => (
            <div className="item p-2" key={index}>
              <button className="btn btn-warning w-100">{item.category}</button>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
