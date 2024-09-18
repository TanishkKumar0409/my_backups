import React from "react";

export default function RegistrationForm() {
  return (
    <div className="view-container">
      <div className="view-card">
        <h2 className="view-card-title">Registration Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName" className="info-name">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="info-name">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="info-name">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="info-name">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="info-name">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="info-name">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="text-area"
            ></textarea>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                className="form-checkbox"
                required
              />
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="view-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
