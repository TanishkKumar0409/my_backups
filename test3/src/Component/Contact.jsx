import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-5 bg-secondary">
        <div className="container">
          <h2 className="text-center mb-4 text-light">Contact</h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label text-light">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label text-light">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label text-light">
                  Contact
                </label>
                <input
                  type="tel"
                  className="form-control shadow-lg"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control shadow-lg"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="subject" className="form-label text-light">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control shadow-lg"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="message" className="form-label text-light">
                  Message
                </label>
                <textarea
                  className="form-control shadow-lg"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
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
