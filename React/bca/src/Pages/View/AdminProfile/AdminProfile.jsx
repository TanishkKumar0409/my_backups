import React from "react";
import { Link } from "react-router-dom";

export default function AdminProfile(props) {
  const mapData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-sec-custom text-center rounded p-4">
          <div className="row">
            <div className="col-md-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 p-5">
              <h3 className="fs-1 mb-5">Admin Details</h3>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <tbody>
                    <tr>
                      <th className="fs-3">Id</th>
                      <td className="fs-3">1</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Name</th>
                      <td className="fs-3">{mapData.username}</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Email</th>
                      <td className="fs-3">{mapData.email}</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Phone</th>
                      <td className="fs-3">{mapData.phone}</td>
                    </tr>
                    <tr>
                      <td colSpan={"2"}>
                        <div className="btn-group w-100">
                          <Link to={`/`} className="btn btn-red btn-lg">
                            Update
                          </Link>
                          <button className="btn btn-red btn-lg">Delete</button>
                          <Link to={`/`} className="btn btn-red btn-lg">
                            Back
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
