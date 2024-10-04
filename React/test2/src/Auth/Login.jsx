import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [LogEmail, setLogEmail] = useState();
  const [LogPassword, setLogPassword] = useState();
  const Navigate = useNavigate();
  const RandomTokenNumber = Math.round(Math.random() * 10000000000);
  const HandleLogin = (e) => {
    e.preventDefault();
    const LocalGetData = JSON.parse(localStorage.getItem("Person"));
    if (
      LogEmail !== LocalGetData.Email &&
      LogPassword !== LocalGetData.Password
    ) {
      alert("User Does Not Exist");
    } else if (LogEmail !== LocalGetData.Email) {
      alert("Email Does Not Match");
    } else if (LogPassword !== LocalGetData.Password) {
      alert("Password Does Not Match");
    } else if (
      LogEmail === LocalGetData.Email &&
      LogPassword === LocalGetData.Password
    ) {
      localStorage.setItem("Token", "Token" + RandomTokenNumber);
      Navigate("/");
      window.location.reload();
    }
  };
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg" style={{ width: "400px" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Recipe Login</h5>
          <form onSubmit={HandleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setLogEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setLogPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Don't have an account?
              <Link to="/register" className="register-link ms-1">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
