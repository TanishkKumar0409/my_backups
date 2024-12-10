import React from 'react';

export default function FileHistory() {
  return (
    <>
      <section className="container mt-5">
        <div className="row">
          <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Shared History'" }}>
            Shared History
          </h2>
          <p className="px-5 text-center text-muted">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eveniet tempora, eius cumque necessitatibus nihil.
          </p>
          <div className="col">
            <table className="table table-responsive table-striped align-middle">
              <thead className="table-dark">
                <tr className="text-center">
                  <th>Id</th>
                  <th>File Name</th>
                  <th>Shared To</th>
                  <th>Shared Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Image.jpg</td>
                  <td>Prince Parmar</td>
                  <td>28-12-2024</td>
                  <td className="text-center">
                    <button className="btn custom-btn btn-custom overflow-hidden border-0">View</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Document.pdf</td>
                  <td>John Doe</td>
                  <td>15-12-2024</td>
                  <td className="text-center">
                    <button className="btn custom-btn btn-custom overflow-hidden border-0">View</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Report.xlsx</td>
                  <td>Jane Smith</td>
                  <td>10-12-2024</td>
                  <td className="text-center">
                    <button className="btn custom-btn btn-custom overflow-hidden border-0">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
