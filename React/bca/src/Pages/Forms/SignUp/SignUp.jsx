import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div class="container-fluid">
        <div
          class="row h-100 bg-black align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div class="col-12 col-sm-8 col-md-6 col-lg-5 content-center">
            <div class="bg-sec-custom rounded p-4 p-sm-5 my-4 mx-3">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <Link to="/">
                  <h3 class="text-red">
                    <i class="fa fa-user-edit me-2">DarkPan</i>
                  </h3>
                </Link>
                <h3>Sign Up</h3>
              </div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    id="exampleInputName"
                    class="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="exampleInputEmail"
                    class="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone" class="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="exampleInputPhone"
                    class="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword" class="form-label">
                    Password
                  </label>
                  <input
                    type="tel"
                    id="exampleInputPassword"
                    class="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      name=""
                      id="egCheck1"
                      class="form-check-input"
                    />
                    <label for="egCheck1">Check me Out</label>
                  </div>
                  <a href="/">Forgot Password</a>
                </div>
                <button class="btn btn-red py-3 w-100 mb-4">Sign Up</button>
                <p class="text-center mb-0">
                  Already Have an account? <Link to="/sign-in">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
