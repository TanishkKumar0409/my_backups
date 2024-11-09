import React from "react";

export default function Table() {
  return (
    <>
      {" "}
      <div className="table-responsive">
        <table className="table text-start align-middle table-bordered table-hover mb-0">
          <thead>
            <tr className="text-white">
              <th scope="col">
                <input type="checkbox" className="form-check-input" />
              </th>
              <th scope="col">Date</th>
              <th scope="col">Invoice</th>
              <th scope="col">Customer</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>01 jan 2024</td>
              <td>INV-4567</td>
              <td>Tanishk Kumar</td>
              <td>$4565</td>
              <td>Paid</td>
              <td>
                <button className="btn btn-sm btn-red">Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>01 jan 2024</td>
              <td>INV-4567</td>
              <td>Tanishk Kumar</td>
              <td>$4565</td>
              <td>Paid</td>
              <td>
                <button className="btn btn-sm btn-red">Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>01 jan 2024</td>
              <td>INV-4567</td>
              <td>Tanishk Kumar</td>
              <td>$4565</td>
              <td>Paid</td>
              <td>
                <button className="btn btn-sm btn-red">Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>01 jan 2024</td>
              <td>INV-4567</td>
              <td>Tanishk Kumar</td>
              <td>$4565</td>
              <td>Paid</td>
              <td>
                <button className="btn btn-sm btn-red">Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>01 jan 2024</td>
              <td>INV-4567</td>
              <td>Tanishk Kumar</td>
              <td>$4565</td>
              <td>Paid</td>
              <td>
                <button className="btn btn-sm btn-red">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
