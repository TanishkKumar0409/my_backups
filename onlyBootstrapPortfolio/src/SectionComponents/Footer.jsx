import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer
        className={`bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        } text-center py-5`}
      >
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3">
              <h5 className="mb-3">Navigation</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#home"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-home me-2"></i>Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-user me-2"></i>About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-briefcase me-2"></i>Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-cogs me-2"></i>Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-comments me-2"></i>Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-images me-2"></i>Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                  >
                    <i className="fa-solid fa-envelope me-2"></i>Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f me-2"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/?lang=en"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="Twitter"
                  >
                    <i className="fab fa-x-twitter me-2"></i>Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="Instagram"
                  >
                    <i className="fab fa-instagram me-2"></i>Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TanishkKumar0409"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="GitHub"
                  >
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/Tanishk-Kumar"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="CodePen"
                  >
                    <i className="fab fa-codepen me-2"></i>CodePen
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="YouTube"
                  >
                    <i className="fab fa-youtube me-2"></i>YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/"
                    className={`text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } text-decoration-none d-flex align-items-center mb-2`}
                    title="YouTube"
                  >
                    <i className="fab fa-linkedin me-2"></i>Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="mb-3">Newsletter</h5>
              <form className="text-start mt-5">
                <label
                  htmlFor="emailInput"
                  className={`form-label text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  Email Address
                </label>
                <div className="input-group shadow-lg">
                  <input
                    id="emailInput"
                    type="email"
                    className={`form-control shadow-sm border-3  border-start-0 border-end-0 border-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } bg-${props.darkTheme} text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    }`}
                    aria-label="Your email address"
                    required
                  />

                  <button
                    className={`btn btn-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } `}
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-0">
              &copy; 2024 Tanishk Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
