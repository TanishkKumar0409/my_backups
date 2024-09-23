import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col ">
            <div className="wrapper rounded-5 register" style={{ top: "20px" }}>
              <span className="bg-animate2"></span>
              <span className="bg-animate4"></span>
              <div className="form-box register">
                <h2>Sign Up</h2>
                <form action="#">
                  <div className="input-custom-box">
                    <input type="text" id="username" required />
                    <label htmlFor="username">Username</label>
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="input-custom-box">
                    <input type="text" id="email" required />
                    <label htmlFor="email">Email</label>
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="input-custom-box">
                    <input type="text" id="password" required />
                    <label htmlFor="password">Password</label>
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="input-custom-box">
                    <input type="text" id="password" required />
                    <label htmlFor="password">Password</label>
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="input-custom-box">
                    <input type="text" id="password" required />
                    <label htmlFor="password">Password</label>
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn p-3 button text-light"
                      style={{ "--color": "#f9c74f" }}
                    >
                      <p style={{ fontSize: "100%" }}>Register</p>
                    </button>
                  </div>
                  <div className="logreg-link">
                    <p>
                      Already Have an Account
                      <Link to="/login" className="loginLink ms-2">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="info-text register">
                <h1>Welcome Back!</h1>
                <p>Lorem ipsum, dolor sit amet consecteur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
