import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row h-100 bg-black align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-sec-custom rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Link to="/">
                  <h3 className="text-red">
                    <i className="fa fa-user-edit me-2"> BCA </i>
                  </h3>
                </Link>
                <h3>Sign In</h3>
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
                    id="exmCheck1"
                    className="form-check-input"
                  />
                  <label htmlFor="exmCheck1">Check me out</label>
                </div>
                <Link to="/">Forgot password</Link>
              </div>
              <button className="btn btn-red py-3 w-100 mb-4">
                Sign In
              </button>
              <p className="text-center mb-0">
                Don't Have an account? <Link to={`/sign-up`}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
