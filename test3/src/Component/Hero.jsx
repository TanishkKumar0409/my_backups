import React from "react";

export default function Hero(props) {
  return (
    <>
      <section id="home" className={`hero vh-100 d-flex align-items-center justify-content-center text-center position-relative bg-${props.darkTheme} text-${props.darkTheme==="dark"?"light":"dark"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3">Hi, I'm Tanishk Kumar</h1>
              <p className="lead mb-4">Web Developer | Designer</p>
              <a href="#about" className={`btn btn-lg btn-${props.darkTheme==="dark"?"light":"dark"} `}>
                <i className="fas fa-user"></i> Learn More
              </a>
            </div>
            <div className="col-md-6 d-none d-md-block ">
              <img
                src="/Images/TanishkKumar.jpg"
                className={`img-fluid rounded-circle shadow-lg border border-3 border-${props.darkTheme==="dark"?"light":"dark"}`}
                alt="Tanishk Kumar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
