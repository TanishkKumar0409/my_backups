import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserTable() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("http://localhost:4000/api/user");
      const JsonData = await fetchData.json();
      const output = JsonData.getData;
      setData(output);
    };
    getData();
  }, []);

  const handleDelete = async (par) => {
    const Delete = await axios.delete(
      `http://localhost:4000/api/user/delete/${par}`
    );
    console.log(Delete);
    window.location.reload();
  };
  return (
    <div className="container mt-5">
      <div className="row w-100 d-flex align-items-center justify-content-center ">
        <div className="col-md-10">
          <table className="table table-bordered table-striped align-middle">
            <thead className="text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {Data.map((item, index) => (
                <tr key={index}>
                  <td className="text-center fw-bold">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <div className="d-flex flex-column gap-2">
                      <Link
                        to={`/students/view/${item.id}`}
                        className="btn btn-dark button"
                      >
                        View More
                      </Link>
                      <Link
                        to={`/students/edit/${item.id}`}
                        className="btn btn-dark button"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
