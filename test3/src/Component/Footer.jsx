import React from 'react'

export default function Footer() {
  return (
    <>
       <footer className="bg-dark text-light text-center py-5">
      <div className="container">
        {/* <!-- Footer Navigation Links --> */}
        <div className="row mb-4">
          <div className="col-md-3">
            <h5 className="mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#home"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-home me-2"></i>Home</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-user me-2"></i>About</a
                >
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-briefcase me-2"></i>Projects</a
                >
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-cogs me-2"></i>Skills</a
                >
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-comments me-2"></i>Testimonials</a
                >
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-images me-2"></i>Gallery</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i className="fas fa-envelope me-2"></i>Contact</a
                >
              </li>
            </ul>
          </div>
          {/* <!-- Social Links --> */}
          <div className="col-md-3">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Facebook"
                  ><i className="fab fa-facebook-f me-2"></i>Facebook</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Twitter"
                  ><i className="fab fa-twitter me-2"></i>Twitter</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Instagram"
                  ><i className="fab fa-instagram me-2"></i>Instagram</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="GitHub"
                  ><i className="fab fa-github me-2"></i>GitHub</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="CodePen"
                  ><i className="fab fa-codepen me-2"></i>CodePen</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="YouTube"
                  ><i className="fab fa-youtube me-2"></i>YouTube</a
                >
              </li>
            </ul>
          </div>
          {/* <!-- Newsletter Subscription --> */}
          <div className="col-md-6">
            <h5 className="mb-3">Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control border-light"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- Footer Bottom Text --> */}
        <div className="mt-4">
          <p className="mb-0">&copy; 2024 Tanishk Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
