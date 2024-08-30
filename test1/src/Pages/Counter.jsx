import React, { useState } from "react";

function CountLetters() {
  // Initialize state to keep track of the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="counter-box p-4 border rounded shadow-sm">
            <h1 className="mb-4">Counter: {count}</h1>
            <button
              className="btn btn-increment m-2 btn-lg"
              onClick={increment}
            >
              Increment <i className="fa fa-plus"></i>
            </button>
            <button
              className="btn btn-decrement m-2 btn-lg"
              onClick={decrement}
            >
              Decrement <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-reset m-2 btn-lg" onClick={reset}>
              Reset <i className="fa fa-rotate-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountLetters;
