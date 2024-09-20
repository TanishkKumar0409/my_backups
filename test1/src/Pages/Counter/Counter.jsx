import React, { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center text-center">
        <div className="row">
          <div className="col">
            <div className="count-box">
              <div className="counter-box">
                <h2
                  className="headHeading text-light"
                  style={{ "--text": "'Your Count'" }}
                >
                  Your Count
                </h2>
                <h3 className="MainHeading">{Count}</h3>
              </div>
              <div
                className="btn-box py-3 rounded shadow d-flex align-items-center justify-content-center"
                style={{ "--width": "50%", "--left": "25%" }}
              >
                <button
                  className="btn btn-custom"
                  onClick={() => {
                    setCount(Count + 1);
                  }}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <button
                  className="btn btn-custom ms-3"
                  onClick={() => {
                    setCount(0);
                  }}
                >
                  <i className="fa fa-rotate-right"></i>
                </button>
                <button
                  className="btn btn-custom ms-3"
                  onClick={() => {
                    setCount(Count - 1);
                  }}
                >
                  <i className="fa fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
