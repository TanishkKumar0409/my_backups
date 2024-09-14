import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header">
                <h1>Register</h1>
              </div>
              <div className="card-body">
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="usernames" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernames"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input type="number" className="form-control" id="phone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-success">Register</button>
                  </div>
                  <div className="mb-3">
                    <Link to="/login">Already Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
