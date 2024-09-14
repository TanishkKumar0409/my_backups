import React from "react";

export default function Hero() {
  return (
    <>
      <section className="hero vh-100 d-flex align-items-center justify-content-center text-center position-relative bg-dark text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3">Hi, I'm Tanishk Kumar</h1>
              <p className="lead mb-4">Web Developer | Designer</p>
              <a href="#about" className="btn btn-primary btn-lg">
                <i className="fas fa-user"></i> Learn More
              </a>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img
                src="/Images/1706397847403.jpg"
                className="img-fluid rounded-circle shadow-lg border border-5 border-secondary"
                alt="Tanishk Kumar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
