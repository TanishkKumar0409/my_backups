import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" class="py-5 bg-secondary">
        <div class="container">
          <h2 class="text-center mb-4 text-light">Contact</h2>
          <form>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName" class="form-label text-light">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control shadow-lg"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName" class="form-label text-light">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control shadow-lg"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone" class="form-label text-light">
                  Contact
                </label>
                <input
                  type="tel"
                  class="form-control shadow-lg"
                  id="phone"
                  name="phone"
                  required
                  autocomplete="tel"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="email" class="form-label text-light">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control shadow-lg"
                  id="email"
                  name="email"
                  required
                  autocomplete="email"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label for="subject" class="form-label text-light">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control shadow-lg"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div class="col-md-12 mb-3">
                <label for="message" class="form-label text-light">
                  Message
                </label>
                <textarea
                  class="form-control shadow-lg"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">
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
