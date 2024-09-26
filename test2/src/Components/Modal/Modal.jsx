import React from "react";
import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-body text-center p-5">
              <h3
                className="mb-4"
                style={{ color: "#1d4b99", fontWeight: "bold" }}
              >
                Please Login To Know the Recipe
              </h3>
              <Link to="/login">
                <button className="btn btn-success btn-lg px-4 py-2">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
