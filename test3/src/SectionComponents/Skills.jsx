import React from "react";

export default function Skills(props) {
  const getRandomPercentage = () =>
    Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Generates a random number between 60 and 100

  return (
    <>
      <section id="skills" className={`py-5 bg-${props.SecondaryTheme}`}>
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-6 mt-4">
              <ul className="list-group shadow-lg">
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  HTML
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  CSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  SCSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  Bootstrap
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  Tailwind CSS
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
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
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  PHP
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  MYSQL
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  Java
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  Figma
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
                <li
                  className={`list-group-item d-flex justify-content-between align-items-center bg-${
                    props.darkTheme
                  } text-${
                    props.darkTheme === "dark" ? "light" : "dark"
                  } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                >
                  Git, GitHub
                  <div className="progress w-75">
                    <div
                      className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${getRandomPercentage()}%` }}
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
