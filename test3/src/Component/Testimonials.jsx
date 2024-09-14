import React from 'react'

export default function Testimonials() {
  return (
    <>
      <section id="testimonials" class="py-5 bg-secondary">
      <div
        id="testimonialCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                class="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 class="mb-2">John Doe</h5>
              <p class="mb-0">
                "This is a fantastic service! Highly recommended for anyone
                looking to enhance their online presence."
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                class="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 class="mb-2">Jane Smith</h5>
              <p class="mb-0">
                "An excellent experience from start to finish. The team was
                professional and the results were outstanding."
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex flex-column align-items-center text-center p-4">
              <img
                src="https://via.placeholder.com/100"
                class="rounded-circle mb-3"
                alt="Client Photo"
              />
              <h5 class="mb-2">Alice Johnson</h5>
              <p class="mb-0">
                "Great service! The project was completed on time and exceeded
                my expectations."
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    </>
  )
}
