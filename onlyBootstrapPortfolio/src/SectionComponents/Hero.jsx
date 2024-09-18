import React, { useState } from "react";

export default function Hero(props) {
  const [iconView, setIconView] = useState("regular");
  return (
    <>
      <section
        id="home"
        className={`hero vh-100 d-flex align-items-center justify-content-center text-center position-relative bg-${
          props.darkTheme
        } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
        style={{ top: "50px" }}
      >
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3 ">Hi, I'm Tanishk Kumar</h1>
              <p className="lead mb-4 ">Web Developer | Designer</p>
              <div className="mb-4">
                <a
                  href="https://www.facebook.com"
                  className="text-decoration-none me-3 fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-facebook bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-1 rounded-circle`}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-decoration-none me-3  fs-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-instagram bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-2 rounded-circle`}
                  ></i>
                </a>
                <a
                  href="https://github.com/TanishkKumar0409"
                  className="text-decoration-none me-3  fs-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-github bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-3 rounded-circle`}
                  ></i>
                </a>
                <a
                  href="https://codepen.io/Tanishk-Kumar"
                  className="text-decoration-none me-3  fs-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-codepen bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-3 rounded-circle`}
                  ></i>
                </a>
                <a
                  href="https://x.com/?lang=en"
                  className="text-decoration-none me-3  fs-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-x-twitter bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-2 rounded-circle`}
                  ></i>
                </a>
                <a
                  href="https://in.linkedin.com/"
                  className="text-decoration-none me-3  fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-linkedin-in bg-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-${props.darkTheme} p-1 rounded-circle`}
                  ></i>
                </a>
              </div>
              <a
                href="/PDF/tanishk_kumar.pdf"
                className={`btn btn-lg btn-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } `}
                onMouseOver={() => {
                  setIconView("solid");
                }}
                onMouseOut={() => {
                  setIconView("regular");
                }}
                target="_blank"
              >
                <i className={`fa-${iconView} fa-eye me-2`}></i> Veiw CV
              </a>
            </div>
            <div className="col-md-6 d-none d-md-block ">
              <img
                src="/Images/TanishkKumar.jpg"
                className={`img-fluid rounded-5 shadow-lg w-100`}
                alt="Tanishk Kumar"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
