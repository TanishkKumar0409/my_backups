import React from "react";

export default function ListGroup(props) {
  const getRandomPercentage = () =>
    Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  return (
    <>
      <ul className="list-group shadow-lg">
        {props.values && props.values.length > 0 ? (
          props.values.map((item, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center align-content-center bg-${
                props.darkTheme || "light"
              } text-${props.darkTheme === "dark" ? "light" : "dark"} border-${
                props.darkTheme === "dark" ? "light" : "dark"
              }`}
            >
              <p className="pt-3">{item.name}</p>
              <div className="progress w-75">
                <div
                  className={`progress-bar bg-${
                    props.darkTheme === "dark" ? "secondary" : "dark"
                  } progress-bar-striped progress-bar-animated`}
                  role="progressbar"
                  style={{ width: `${getRandomPercentage()}%` }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No items available</li>
        )}
      </ul>
    </>
  );
}
