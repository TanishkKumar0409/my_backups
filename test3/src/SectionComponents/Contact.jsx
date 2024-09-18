import React, { useState } from "react";

export default function Contact(props) {
  const [iconView, setIconView] = useState("regular");
  return (
    <>
      <section
        id="contact"
        className={`py-5 bg-${props.SecondaryTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-4">Contact</h2>
          <div className="row">
            <div className="col-md-6 pt-4">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="lastName"
                      name="lastName"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Contact
                    </label>
                    <input
                      type="tel"
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className={`form-control shadow  border-start-0 border-end-0  border-3 border-dark bg-${
                        props.SecondaryTheme
                      } text-${props.darkTheme === "dark" ? "light" : "dark"}`}
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className={`btn btn-${
                        props.darkTheme === "dark" ? "light" : "dark"
                      }`}
                      onMouseOver={() => {
                        setIconView("solid");
                      }}
                      onMouseOut={() => {
                        setIconView("regular");
                      }}
                    >
                      <i className={`fa-${iconView} fa-paper-plane me-2`}></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 pt-4">
              <iframe
                className="w-100 h-100 rounded-5 shadow border-4 border border-start-0 border-end-0 border-dark"
                src="https://www.google.com/maps/embed/v1/place?q=carnival+cinemas,seemadwar+dehradun&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                title={"map"}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
