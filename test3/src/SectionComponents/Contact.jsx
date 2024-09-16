import React from "react";

export default function Contact(props) {
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
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                  className={`form-control shadow border-top-0 border-start-0 border-end-0  border-3 border-dark bg-${
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
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
