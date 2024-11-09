import React from "react";
import { useLocation } from "react-router-dom";

export default function Table({ heading, values, more }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="table-responsive">
      <table className="table text-start align-middle table-bordered table-hover mb-0">
        <thead>
          <tr className="text-white">
            {heading &&
              heading.map((item, index) => (
                <th scope="col" key={index}>
                  {item}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {values && values.length > 0 ? (
            (path === "/" ? values.slice(0, 5) : values.slice(0, more)).map(
              (item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.course}</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Details</button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={heading.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
