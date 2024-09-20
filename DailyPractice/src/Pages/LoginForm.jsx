import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Stored = JSON.parse(localStorage.getItem("person1"));
  return (
    <div className="view-container">
      <div className="view-card">
        <h2 className="view-card-title">Login Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="info-name">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="info-name">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="view-button"
              onClick={() => {
                if (Stored.email !== email && Stored.password !== password) {
                  alert("user Doesm't exist");
                } else if (Stored.email !== email) {
                  alert("Incorrect Email");
                } else if (Stored.password !== password) {
                  alert("Incorrect Password");
                }
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
