import React from "react";

export default function Projects(props) {
  return (
    <>
      <section
        id="projects"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row g-4">
            {/* <!-- Project 1: Orgaawe with modal trigger --> */}
            <div className="col-md-3">
              <div
                className={`card h-100  bg-${props.darkTheme} text-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } shadow-lg`}
              >
                <div className="card-header">
                  <img
                    src="/Images/Orgaawe.png"
                    className="card-img-top img-fluid"
                    alt="Orgaawe Project"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Orgaawe</h5>
                  <p className="card-text">
                    A project focusing on organic food and eco-friendly
                    products.
                  </p>
                  <button
                    className={`btn btn-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#orgaaweModal"
                  >
                    <i className="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 1 Modal --> */}
            <div
              className="modal fade"
              id="orgaaweModal"
              tabIndex="-1"
              aria-labelledby="orgaaweModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div
                  className={`modal-content bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <div className="modal-header">
                    <h5 className="modal-title" id="orgaaweModalLabel">
                      Orgaawe Project Details
                    </h5>
                    <button
                      type="button"
                      className={`btn-close btn-close-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src="/Images/Orgaawe.png"
                      className="img-fluid"
                      alt="Orgaawe Project "
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <p className="mt-3">
                      "OrgAawe is an innovative platform dedicated to blogging
                      and content marketing, focusing on organic products,
                      organic lifestyles, and nutrition, providing valuable
                      insights and information for a healthier, eco-friendly
                      lifestyle."
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript, PHP.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://orgaawe.com"
                      className={`btn btn-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <i className="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 2: Macs Concepts with modal trigger --> */}
            <div className="col-md-3">
              <div
                className={`card h-100  bg-${props.darkTheme} text-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } shadow-lg`}
              >
                <div className="card-header">
                  <img
                    src="/Images/Macs.png"
                    className="card-img-top img-fluid"
                    alt="Macs Concepts Project"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Macs Concepts</h5>
                  <p className="card-text">
                    A corporate branding and design consultancy website.
                  </p>
                  <button
                    className={`btn btn-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#macsconceptsModal"
                  >
                    <i className="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 Modal --> */}
            <div
              className="modal fade"
              id="macsconceptsModal"
              tabIndex="-1"
              aria-labelledby="macsconceptsModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div
                  className={`modal-content bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <div className="modal-header">
                    <h5 className="modal-title" id="macsconceptsModalLabel">
                      Macs Concepts Project Details
                    </h5>
                    <button
                      type="button"
                      className={`btn-close btn-close-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src="/Images/Macs.png"
                      className="img-fluid"
                      alt="Macs Concepts Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <p className="mt-3">
                      "Macs Concepts is a cutting-edge digital marketing website
                      designed to elevate brands through strategic online
                      presence, offering expert solutions in SEO, content
                      marketing, and social media management to drive growth and
                      engagement."
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className={`btn btn-secondary`}
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://macsconcepts.in"
                      className={`btn btn-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <i className="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 3: Back to Basics with modal trigger --> */}
            <div className="col-md-3">
              <div
                className={`card h-100  bg-${props.darkTheme} text-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } shadow-lg`}
              >
                <div className="card-header">
                  <img
                    src="/Images/B2B.png"
                    className="card-img-top img-fluid"
                    alt="Back to Basics Project"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Back to Basics</h5>
                  <p className="card-text">
                    A lifestyle brand focused on simplicity and minimalism.
                  </p>
                  <button
                    className={`btn btn-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#backtobasicsModal"
                  >
                    <i className="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 Modal --> */}
            <div
              className="modal fade"
              id="backtobasicsModal"
              tabIndex="-1"
              aria-labelledby="backtobasicsModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div
                  className={`modal-content bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <div className="modal-header">
                    <h5 className="modal-title" id="backtobasicsModalLabel">
                      Back to Basics Project Details
                    </h5>
                    <button
                      type="button"
                      className={`btn-close btn-close-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src="/Images/B2B.png"
                      className="img-fluid"
                      alt="Back to Basics Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <p className="mt-3">
                      "Back to Basics is a dynamic platform for organizing
                      outdoor and indoor events designed for businesses,
                      colleges, and schools. The website offers a streamlined
                      experience for planning and monitoring interesting events
                      and activities that promote teamwork and educational
                      enrichment.""Back to Basics is a dynamic platform for
                      organizing outdoor and indoor events designed for
                      businesses, colleges, and schools. The website offers a
                      streamlined experience for planning and monitoring
                      interesting events and activities that promote teamwork
                      and educational enrichment."
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://thebacktobasics.com"
                      className={`btn btn-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <i className="fas fa-link"></i> View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Project 4: Offbeat Pixels with modal trigger --> */}
            <div className="col-md-3">
              <div
                className={`card h-100  bg-${props.darkTheme} text-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } shadow-lg`}
              >
                <div className="card-header">
                  <img
                    src="/Images/Offbeat.png"
                    className="card-img-top img-fluid"
                    alt="Offbeat Pixels Project"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Offbeat Pixels</h5>
                  <p className="card-text">
                    A creative design studio specializing in web development.
                  </p>
                  <button
                    className={`btn btn-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#offbeatpixelsModal"
                  >
                    <i className="fas fa-eye"></i> View Project
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Project 4 Modal --> */}
            <div
              className="modal fade"
              id="offbeatpixelsModal"
              tabIndex="-1"
              aria-labelledby="offbeatpixelsModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div
                  className={`modal-content bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <div className="modal-header">
                    <h5 className="modal-title" id="offbeatpixelsModalLabel">
                      Offbeat Pixels Project Details
                    </h5>
                    <button
                      type="button"
                      className={`btn-close btn-close-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    <img
                      src="/Images/Offbeat.png"
                      className="img-fluid"
                      alt="Offbeat Pixels Project"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                    <p className="mt-3">
                      "Offbeat Pixels is a digital marketing and creative
                      content agency that specializes in new methods and
                      engaging solutions. Their expertise includes branding,
                      content production, and digital campaigns, allowing
                      businesses to stand out and effectively engage with their
                      target audience.
                    </p>
                    <p>Technologies used: HTML, CSS, JavaScript, PHP.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times"></i> Close
                    </button>
                    <a
                      href="https://offbeatpixels.com"
                      className={`btn btn-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <i className="fas fa-link"></i> View Live Project
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
