import React, { useState } from "react";

export default function RegistrationForm() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [password, setPassword] = useState();
  const formData = {
    FirstName: FirstName,
    LastName: LastName,
    email: email,
    contact: contact,
    password: password,
  };
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
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
              onChange={(e) => {
                setLastName(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setContact(e.target.value);
              }}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="info-name">
              Password
            </label>
            <input
              type="password"
              id="subject"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="subject"
              required
              className="form-input"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="message" className="info-name">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="text-area"
            ></textarea>
          </div> */}
          {/* <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                className="form-checkbox"
                required
              />
              I agree to the terms and conditions
            </label>
          </div> */}
          <button
            type="submit"
            onClick={() => {
              localStorage.setItem("person1",JSON.stringify(formData));
            }}
            className="view-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
