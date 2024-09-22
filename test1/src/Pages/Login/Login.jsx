import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className="wrapBox rounded-5 p-4 "></div>
            <div className="wrapper rounded-5 login">
              <span className="bg-animate"></span>
              <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                  <div className="input-custom-box">
                    <input type="text" id="email" required />
                    <label htmlFor="email">Email</label>
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="input-custom-box">
                    <input type="text" id="password" required />
                    <label htmlFor="password">Password</label>
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn p-3 button text-light"
                      style={{ "--color": "#43aa8b" }}
                    >
                      <p style={{ fontSize: "120%" }}>Login</p>
                    </button>
                  </div>
                  <div className="logreg-link">
                    <p>
                      Don't Have an Account?{" "}
                      <Link to="/register" className="registerLink">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="info-text login">
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
