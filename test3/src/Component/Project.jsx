import React from "react";

export default function Projects() {
  return (
    <>
      <section id="projects" class="py-5 bg-dark text-light">
        <div class="container">
          <h2 class="text-center mb-4">Projects</h2>
          <div class="row g-4">
            {/* <!-- Project 1: Orgaawe with modal trigger --> */}
            <div class="col-md-3">
              <div class="card h-100 "> 
              <div className="card-header">
              <img
                  src="/Images/Orgaawe.png"
                  class="card-img-top img-fluid"
                  alt="Orgaawe Project"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
                <div class="card-body">
                  <h5 class="card-title">Orgaawe</h5>
                  <p class="card-text">
                    A project focusing on organic food and eco-friendly
                    products.
                  </p>
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#orgaaweModal"
                  >
                    <i class="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 1 Modal --> */}
            <div
              class="modal fade"
              id="orgaaweModal"
              tabindex="-1"
              aria-labelledby="orgaaweModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                  <div class="modal-header">
                    <h5 class="modal-title" id="orgaaweModalLabel">
                      Orgaawe Project Details
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      src="/Images/Orgaawe.png"
                      class="img-fluid"
                      alt="Orgaawe Project Image"
                      style={{maxHeight: "300px", objectFit: "cover"}}
                    />
                    <p class="mt-3">
                      This project focuses on organic and sustainable products.
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript, PHP.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i class="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://orgaawe.com"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 2: Macs Concepts with modal trigger --> */}
            <div class="col-md-3">
              <div class="card h-100 "> 
               <div className="card-header">
               <img
                  src="/Images/Macs.png"
                  class="card-img-top img-fluid"
                  alt="Macs Concepts Project"
                  style={{height: "200px", objectFit: "cover"}}
                />
               </div>
                <div class="card-body">
                  <h5 class="card-title">Macs Concepts</h5>
                  <p class="card-text">
                    A corporate branding and design consultancy website.
                  </p>
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#macsconceptsModal"
                  >
                    <i class="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 Modal --> */}
            <div
              class="modal fade"
              id="macsconceptsModal"
              tabindex="-1"
              aria-labelledby="macsconceptsModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                  <div class="modal-header">
                    <h5 class="modal-title" id="macsconceptsModalLabel">
                      Macs Concepts Project Details
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      src="/Images/Macs.png"
                      class="img-fluid"
                      alt="Macs Concepts Project Image"
                      style={{maxHeight: "300px", objectFit: "cover"}}
                    />
                    <p class="mt-3">
                      A corporate branding project with a focus on design.
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i class="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://macsconcepts.in"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 3: Back to Basics with modal trigger --> */}
            <div class="col-md-3">
              <div class="card h-100 "> 
              <div className="card-header">
              <img
                  src="/Images/B2B.png"
                  class="card-img-top img-fluid"
                  alt="Back to Basics Project"
                   style={{height: "200px", objectFit: "cover"}}
                />
              </div>
                <div class="card-body">
                  <h5 class="card-title">Back to Basics</h5>
                  <p class="card-text">
                    A lifestyle brand focused on simplicity and minimalism.
                  </p>
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#backtobasicsModal"
                  >
                    <i class="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 Modal --> */}
            <div
              class="modal fade"
              id="backtobasicsModal"
              tabindex="-1"
              aria-labelledby="backtobasicsModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                  <div class="modal-header">
                    <h5 class="modal-title" id="backtobasicsModalLabel">
                      Back to Basics Project Details
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      src="/Images/B2B.png"
                      class="img-fluid"
                      alt="Back to Basics Project Image"
                      style={{maxHeight: "300px", objectFit: "cover"}}
                    />
                    <p class="mt-3">
                      This project is centered on simple, minimalistic lifestyle
                      products.
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i class="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://thebacktobasics.com"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 4: Offbeat Pixels with modal trigger --> */}
            <div class="col-md-3">
              <div class="card h-100 "> 
               <div className="card-header">
               <img
                  src="/Images/Offbeat.png"
                  class="card-img-top img-fluid"
                  alt="Offbeat Pixels Project"
                   style={{height: "200px", objectFit: "cover"}}
                />
               </div>
                <div class="card-body">
                  <h5 class="card-title">Offbeat Pixels</h5>
                  <p class="card-text">
                    A creative design studio specializing in web development.
                  </p>
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#offbeatpixelsModal"
                  >
                    <i class="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 4 Modal --> */}
            <div
              class="modal fade"
              id="offbeatpixelsModal"
              tabindex="-1"
              aria-labelledby="offbeatpixelsModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                  <div class="modal-header">
                    <h5 class="modal-title" id="offbeatpixelsModalLabel">
                      Offbeat Pixels Project Details
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      src="/Images/Offbeat.png"
                      class="img-fluid"
                      alt="Offbeat Pixels Project Image"
                      style={{maxHeight: "300px", objectFit: "cover"}}
                    />
                    <p class="mt-3">
                      Creative web design and development with a focus on
                      innovation.
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript, PHP.</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i class="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://offbeatpixels.com"
                      class="btn btn-primary"
                    >
                      <i class="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
