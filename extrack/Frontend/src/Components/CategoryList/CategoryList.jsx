import React from "react";

export default function CategoryList(props) {
  const Amounts = props.Amounts;
  return (
    <div className="col-md-6">
      <div
        className="overflow-scroll"
        style={{
          maxHeight: "300px", 
          overflowY: Amounts.length > 4 ? "auto" : "hidden", 
          scrollbarWidth:"none"
        }}
      >
        <ul className="text-start gap-3 text-dark d-flex flex-column">
          {Amounts.map((item, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-around bg-warning p-3 rounded-4 fw-bold"
            >
              <p className="d-flex align-items-center">
                <span
                  className="position-relative me-3 rounded-circle shadow-sm"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: item.color,
                  }}
                ></span>
                {item.category}:
              </p>
              <p>{item.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
