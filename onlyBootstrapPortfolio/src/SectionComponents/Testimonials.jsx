import React from "react";

export default function Testimonials(props) {
  return (
    <>
      <section
        id="testimonials"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
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
                  src="/Images/prince.jpg"
                  className="rounded-5 mb-3 shadow"
                  width={"100px"}
                  alt="Client"
                />
                <h5 className="mb-2">Prince Parmar</h5>
                <p className="mb-0">
                  "Working with this developer has been a great experience!
                  Their technological expertise and creativity elevated our web
                  initiatives to a new level. They constantly provide clean,
                  well-structured code with meticulous attention to detail.
                  Highly recommended for all developmental needs!"
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-4">
                <img
                  src="/Images/ankit.jpg"
                  className="rounded-5 mb-3 shadow"
                  width={"100px"}
                  alt="Client"
                />
                <h5 className="mb-2">Ankit Verma</h5>
                <p className="mb-0">
                  "The capacity to transform ideas into visually appealing and
                  useful websites is simply remarkable. Deadlines are frequently
                  met and expectations exceeded through inventive solutions.
                  Their efforts during the internship proved critical to the
                  team's success."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex flex-column align-items-center text-center p-4">
                <img
                  src="/Images/akshay.jpg"
                  className="rounded-5 mb-3 shadow"
                  width={"100px"}
                  alt="Client"
                />
                <h5 className="mb-2">Akshay Kumar</h5>
                <p className="mb-0">
                  "Every project benefits from a unique blend of technical
                  expertise and design sensibility. Problem-solving abilities
                  and a strong awareness of user experience contributed greatly
                  to the improvement of our platform. A delight to work with and
                  extremely proficient at their craft!"
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
            <span
              className="carousel-control-prev-icon"
              style={{
                filter: `invert(${props.darkTheme === "dark" ? 0 : 1})`,
              }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              style={{
                filter: `invert(${props.darkTheme === "dark" ? 0 : 1})`,
              }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
