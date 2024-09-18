import React from "react";

export default function Education(props) {
  return (
    <>
      <section
        id="education"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-4">Education</h2>
          <div className="row">
            <div className="col">
              <div className="accordion" id="educationAccordion">
                <div
                  className={`accordion-item bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className={`accordion-button bg-${props.darkTheme} text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-bottom border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Bachelor of Computer Applications (BCA) - AJ Campus
                      (Pursuing)
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#educationAccordion"
                  >
                    <div
                      className={`accordion-body bg-${
                        props.SecondaryTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-top border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <strong>Details:</strong>
                      <ul>
                        <li>
                          <strong>Specialization:</strong> Web Development
                        </li>
                        <li>
                          <strong>Key Courses:</strong> HTML, CSS, JavaScript,
                          Database Management
                        </li>
                        <li>
                          <strong>Activities:</strong> Web Development Projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`accordion-item bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button collapsed bg-${
                        props.darkTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-bottom border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      High School - SGRR Laxman Inter College (2020)
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#educationAccordion"
                  >
                    <div
                      className={`accordion-body bg-${
                        props.SecondaryTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-top border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <strong>Details:</strong>
                      <ul>
                        <li>
                          <strong>Stream:</strong> Science (Math, Physics,
                          Chemistry)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`accordion-item bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className={`accordion-button collapsed bg-${
                        props.darkTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-bottom border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Intermediate School - SGRR Laxman Inter College (2022)
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#educationAccordion"
                  >
                    <div
                      className={`accordion-body bg-${
                        props.SecondaryTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-top border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <strong>Details:</strong>
                      <ul>
                        <li>
                          <strong>Stream:</strong> Science (Math, Physics,
                          Chemistry)
                        </li>
                        <li>
                          <strong>Activities:</strong> Science Exhibitions,
                          Inter-School Competitions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`accordion-item bg-${props.darkTheme} text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border border-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  }`}
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className={`accordion-button collapsed bg-${
                        props.darkTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-bottom border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Certification - Computer Basics (ILIT Computer Institute)
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#educationAccordion"
                  >
                    <div
                      className={`accordion-body bg-${
                        props.SecondaryTheme
                      } text-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      } border-top border-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                    >
                      <strong>Details:</strong>
                      <ul>
                        <li>
                          <strong>Institute:</strong> ILIT Computer Institute
                        </li>
                        <li>
                          <strong>Skills Acquired:</strong> MS Office
                        </li>
                      </ul>
                    </div>
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
