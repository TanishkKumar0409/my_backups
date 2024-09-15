import React, { useState } from "react";

export default function Gallery(props) {
  const [mainImage, setMainImage] = useState("/Images/gallery/g1.jpg");
  const [images, setImages] = useState([
    "/Images/gallery/g1.jpg",
    "/Images/gallery/g2.jpg",
    "/Images/gallery/g3.jpg",
    "/Images/gallery/g4.jpg",
    "/Images/gallery/g5.jpg",
    "/Images/gallery/g6.jpg",
  ]);

  const handleImageClick = (src) => {
    setImages((prevImages) => {
      const index = prevImages.indexOf(src);
      const mainImageIndex = prevImages.indexOf(mainImage);

      const newImages = [...prevImages];
      newImages[mainImageIndex] = src;
      newImages[index] = mainImage;

      setMainImage(src);
      return newImages;
    });
  };

  return (
    <>
      <section
        id="gallery"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">Gallery</h2>
            <div className="row">
              <div className="col-md-6 mt-2">
                <img
                  src={mainImage}
                  alt=""
                  className={`img-fluid rounded border border-2 border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } shadow-lg`}
                />
              </div>
              <div className="col-md-6 mt-2">
                <img
                  src={images[1]}
                  alt=""
                  className={`img-fluid rounded border border-2 border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } shadow-lg`}
                  onClick={() => handleImageClick(images[1])}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mt-2">
                <img
                  src={images[2]}
                  alt=""
                  className={`img-fluid rounded border border-2 shadow-lg border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                  onClick={() => handleImageClick(images[2])}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={images[3]}
                  alt=""
                  className={`img-fluid rounded border border-2 shadow-lg border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                  onClick={() => handleImageClick(images[3])}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={images[4]}
                  alt=""
                  className={`img-fluid rounded border border-2 shadow-lg border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                  onClick={() => handleImageClick(images[4])}
                />
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={images[5]}
                  alt=""
                  className={`img-fluid rounded border border-2 shadow-lg border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                  onClick={() => handleImageClick(images[5])}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
