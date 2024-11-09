import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row h-100 bg-black align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 content-center">
            <div className="bg-sec-custom rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Link to="/">
                  <h3 className="text-red">
                    <i className="fa fa-user-edit me-2">BCA</i>
                  </h3>
                </Link>
                <h3>Sign Up</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name=""
                  id="floatingText"
                  className="form-control"
                  placeholder="Tanishk Kumar"
                />
                <label htmlFor="floatingText">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name=""
                  id="floatingInput"
                  className="form-control"
                  placeholder="Tanishk@gmail.com"
                />
                <label htmlFor="floatingInput">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name=""
                  id="floatingPassword"
                  className="form-control"
                  placeholder="Asdf@1234"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name=""
                    id="egCheck1"
                    className="form-check-input"
                  />
                  <label htmlFor="egCheck1">Check me Out</label>
                </div>
                <Link to="/">Forgot Password</Link>
              </div>
              <button className="btn btn-red py-3 w-100 mb-4">Sign Up</button>
              <p className="text-center mb-0">
                Already Have an account? <Link to="/sign-in">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
