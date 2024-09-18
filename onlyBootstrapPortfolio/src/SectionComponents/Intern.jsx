import React from "react";

export default function Intern(props) {
  return (
    <div
      className={`bg-${props.SecondaryTheme} text-${
        props.darkTheme === "dark" ? "light" : "dark"
      } py-4`}
      id="experience"
    >
      <div className="container">
        <h2 className="mb-4 text-center">Experience </h2>
        <div className="row">
          <div className="col-md-8">
            <div
              className={`card rounded-5 mb-3 h-100 shadow-lg bg-${
                props.darkTheme
              } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
            >
              <div className="card-body">
                <h2 className="card-title  mb-4">Internship Experience</h2>
                <p className="card-text mb-4">
                  I completed a rewarding 3-month internship at{" "}
                  <strong>Offbeat Pixels</strong> as a{" "}
                  <strong>Research and Web Development Intern</strong>. This
                  role was a transformative experience that allowed me to engage
                  deeply with both front-end and back-end development. During
                  this time, I was involved in a variety of projects that not
                  only honed my technical skills but also broadened my
                  understanding of the web development landscape.
                </p>

                <h4 className=" mb-3">
                  Key Responsibilities and Achievements:
                </h4>
                <ul className="list-group mb-4">
                  <li
                    className={`list-group-item bg-${props.darkTheme} text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                  >
                    <h5 className="mb-2">
                      <strong>
                        Developed and Maintained Responsive Web Applications
                      </strong>
                    </h5>
                    <p className="mb-0">
                      Worked on several projects to create responsive web
                      applications from scratch. Focused on ensuring
                      cross-browser compatibility and mobile responsiveness,
                      which resulted in a consistent user experience across
                      different devices and platforms. Utilized modern web
                      technologies such as HTML5, CSS3, and Bootstrap to achieve
                      seamless design and functionality.
                    </p>
                  </li>
                  <li
                    className={`list-group-item bg-${props.darkTheme} text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                  >
                    <h5 className="mb-2">
                      <strong>
                        Implemented Interactive Features with JavaScript and
                        React
                      </strong>
                    </h5>
                    <p className="mb-0">
                      Enhanced user interactivity by integrating advanced
                      JavaScript and React functionalities. Developed dynamic
                      components, interactive forms, and real-time data updates,
                      which significantly improved user engagement and
                      satisfaction. Employed state management and lifecycle
                      methods to optimize application performance and
                      responsiveness.
                    </p>
                  </li>
                  <li
                    className={`list-group-item bg-${props.darkTheme} text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                  >
                    <h5 className="mb-2">
                      <strong>Collaborated with a Team of Developers</strong>
                    </h5>
                    <p className="mb-0">
                      Actively participated in team meetings and collaborative
                      coding sessions to troubleshoot and optimize code. Engaged
                      in peer code reviews, provided constructive feedback, and
                      integrated suggestions to enhance code quality and
                      maintainability. Contributed to project planning and
                      documentation to ensure alignment with project goals and
                      timelines.
                    </p>
                  </li>
                  <li
                    className={`list-group-item bg-${props.darkTheme} text-${
                      props.darkTheme === "dark" ? "light" : "dark"
                    } border-${props.darkTheme === "dark" ? "light" : "dark"}`}
                  >
                    <h5 className="mb-2">
                      <strong>
                        Participated in Code Reviews and Process Improvement
                      </strong>
                    </h5>
                    <p className="mb-0">
                      Took part in regular code reviews, which involved
                      analyzing and discussing code quality, performance, and
                      adherence to best practices. Contributed to the refinement
                      of development processes by suggesting improvements and
                      implementing changes that led to increased efficiency and
                      code quality across the team.
                    </p>
                  </li>
                </ul>

                <p className="card-text">
                  This internship was a pivotal step in my career, providing me
                  with practical experience and deep insights into the web
                  development industry. The skills and knowledge I gained during
                  this period have been instrumental in my growth as a web
                  developer, preparing me to tackle complex challenges and
                  contribute effectively to future projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-3">
            <div className="d-flex flex-column h-100">
              <div
                className={`card flex-fill bg-${props.darkTheme} text-${
                  props.darkTheme === "dark" ? "light" : "dark"
                } rounded-5`}
              >
                <div className="card-body d-flex align-items-center">
                  <img
                    src="/Images/Logo/my-logo.jpg"
                    className="img-fluid w-100 rounded-5"
                    alt="Offbeat Pixels Logo"
                  />
                </div>
              </div>
              <div
                className={`card rounded-5 flex-fill mt-3 bg-${
                  props.darkTheme
                } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
              >
                <div className="card-body d-flex align-items-center p-4 ">
                  <div>
                    <h2 className="mb-3">Self-Practice Projects</h2>
                    <p className="mb-3">
                      In addition to my internship, I dedicated time to
                      self-practice and worked on several projects to further
                      hone my skills. These projects included:
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-laptop-code me-2 "></i>
                        Creating personal web applications to explore new
                        technologies and frameworks
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-code-branch me-2 "></i>
                        Contributing to open-source projects to gain
                        collaborative development experience
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <i className="fas fa-cogs me-2 "></i>
                        Building small-scale prototypes and experimenting with
                        different design patterns
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
