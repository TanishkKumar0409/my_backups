import React from "react";

export default function LoginForm() {
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
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="view-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
