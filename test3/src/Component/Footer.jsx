import React from 'react'

export default function Footer() {
  return (
    <>
       <footer class="bg-dark text-light text-center py-5">
      <div class="container">
        {/* <!-- Footer Navigation Links --> */}
        <div class="row mb-4">
          <div class="col-md-3">
            <h5 class="mb-3">Navigation</h5>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#home"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-home me-2"></i>Home</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-user me-2"></i>About</a
                >
              </li>
              <li>
                <a
                  href="#projects"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-briefcase me-2"></i>Projects</a
                >
              </li>
              <li>
                <a
                  href="#skills"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-cogs me-2"></i>Skills</a
                >
              </li>
              <li>
                <a
                  href="#testimonials"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-comments me-2"></i>Testimonials</a
                >
              </li>
              <li>
                <a
                  href="#gallery"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-images me-2"></i>Gallery</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  ><i class="fas fa-envelope me-2"></i>Contact</a
                >
              </li>
            </ul>
          </div>
          {/* <!-- Social Links --> */}
          <div class="col-md-3">
            <h5 class="mb-3">Follow Us</h5>
            <ul class="list-unstyled">
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Facebook"
                  ><i class="fab fa-facebook-f me-2"></i>Facebook</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Twitter"
                  ><i class="fab fa-twitter me-2"></i>Twitter</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="Instagram"
                  ><i class="fab fa-instagram me-2"></i>Instagram</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="GitHub"
                  ><i class="fab fa-github me-2"></i>GitHub</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="CodePen"
                  ><i class="fab fa-codepen me-2"></i>CodePen</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-light text-decoration-none d-flex align-items-center mb-2"
                  title="YouTube"
                  ><i class="fab fa-youtube me-2"></i>YouTube</a
                >
              </li>
            </ul>
          </div>
          {/* <!-- Newsletter Subscription --> */}
          <div class="col-md-6">
            <h5 class="mb-3">Newsletter</h5>
            <form>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control border-light"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  required
                />
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- Footer Bottom Text --> */}
        <div class="mt-4">
          <p class="mb-0">&copy; 2024 Tanishk Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
