import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [activeClass, setactiveClass] = useState("active");
  const handleRegForm = (e) => {
    e.preventDefault();
    activeClass === "active" ? setactiveClass("") : setactiveClass("active");
    console.log("hello");
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className={`formBox shadow ${activeClass} rounded`}>
              <span></span>
              <Login handleRegForm={handleRegForm} />
            </div>
            <div
              className={`formBox shadow ${
                activeClass === "" ? "active" : ""
              } rounded`}
            >
              <span></span>
              <Registration handleRegForm={handleRegForm} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
