import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Modal from "../Modal/Modal";

export default function CustomCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const jsonData = await response.json();
      setData(jsonData.recipes);
    };
    getData();
  }, []);

  const carouselOptions = {
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const handleAngle = (AngleId) => {
    return AngleId % 2 === 1 ? "30deg" : "-30deg";
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Delicious Recipes</h2>
      <p className="text-center mb-5">
        Explore our collection of delightful recipes that are sure to tantalize
        your taste buds. From appetizers to desserts, we have something for
        everyone!
      </p>
      <hr />
      <div className="row">
        <div className="col">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {data.map((item, index) => (
              <div className="item" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ "--AngleCard": `${handleAngle(item.id)}` }}
                    className="card-img"
                  />
                  <div className="card-overlay">
                    <h5 className="card-title mb-3">{item.name}</h5>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <hr />
      <Modal />
    </div>
  );
}
