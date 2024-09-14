import React from "react";

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-5 bg-secondary">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-6 mt-4">
              <ul className="list-group shadow-lg">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  HTML
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "90%"}}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  CSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "85%"}}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  SCSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "80%"}}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Bootstrap
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Tailwind CSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "70%"}}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mt-4">
              <ul className="list-group shadow-lg">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  PHP
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "90%"}}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  MYSQL
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "85%"}}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Java
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "80%"}}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Figma
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Git, GitHub
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "70%"}}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
