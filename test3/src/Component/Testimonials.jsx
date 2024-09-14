import React from 'react'

export default function Testimonials(props) {
  return (
    <>
      <section id="testimonials" className={`py-5 bg-${props.SecondaryTheme}`}>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 className="mb-2">John Doe</h5>
              <p className="mb-0">
                "This is a fantastic service! Highly recommended for anyone
                looking to enhance their online presence."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 className="mb-2">Jane Smith</h5>
              <p className="mb-0">
                "An excellent experience from start to finish. The team was
                professional and the results were outstanding."
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                className="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 className="mb-2">Alice Johnson</h5>
              <p className="mb-0">
                "Great service! The project was completed on time and exceeded
                my expectations."
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    </>
  )
}
