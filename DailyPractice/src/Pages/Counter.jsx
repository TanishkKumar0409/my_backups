import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="view-container">
      <div className="view-card text-center">
        <p className="main-heading">Count: {count}</p>
        <div>
          <button
            className="view-button ms-3"
            onClick={() => setCount(count + 1)}
          >
            <i className="fa fa-plus"></i> Increase
          </button>
          <button className="view-button ms-3" onClick={() => setCount(0)}>
            <i className="fa fa-refresh"></i> Reset
          </button>
          <button
            className="view-button ms-3"
            onClick={() => setCount(count - 1)}
          >
            <i className="fa fa-minus"></i> Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
