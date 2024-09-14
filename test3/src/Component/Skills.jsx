import React from "react";

export default function Skills() {
  return (
    <>
      <section id="skills" class="py-5 bg-secondary">
        <div class="container">
          <h2 class="text-center mb-4">Skills</h2>
          <div class="row">
            <div class="col-md-6 mt-4">
              <ul class="list-group shadow-lg">
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  HTML
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "90%"}}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  CSS
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "85%"}}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  SCSS
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "80%"}}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Bootstrap
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Tailwind CSS
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
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
            <div class="col-md-6 mt-4">
              <ul class="list-group shadow-lg">
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  PHP
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "90%"}}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  MYSQL
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "85%"}}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Java
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "80%"}}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Figma
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{width: "75%"}}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light">
                  Git, GitHub
                  <div class="progress w-75">
                    <div
                      class="progress-bar bg-primary progress-bar-striped progress-bar-animated"
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
