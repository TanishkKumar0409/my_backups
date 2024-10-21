import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserTable() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("http://localhost:8000/api/user");
      const jsonData = await fetchData.json();
      setData(jsonData);
    };
    getData();
  }, []);
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:8000/api/user/delete/${id}`
    );
    console.log(response);
    Navigate("/register");
  };
  return (
    <>
      <section
        className="container"
        style={{ top: "40px", position: "relative" }}
      >
        <div className="table">
          <div className="tableHeader">
            <h2>Customer Orders</h2>
          </div>
          <div className="tableBody">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Batch</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  <>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <h2>{item.id}</h2>
                        </td>
                        <td>
                          <h2>{item.name}</h2>
                        </td>
                        <td>
                          <h2>{item.email}</h2>
                        </td>
                        <td>
                          <h2>{item.phone}</h2>
                        </td>
                        <td>
                          <h2>{item.batch}</h2>
                        </td>
                        <td>
                          <div>
                            <Link to={`/students/view/${item.id}`}>
                              <button className="button">View More</button>
                            </Link>
                            <Link to={`/students/edit/${item.id}`}>
                              <button className="button">Update</button>
                            </Link>
                            <button
                              className="button"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <td style={{ textAlign: "center" }} colSpan={"6"}>
                        <h1>No Data Available</h1>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={"6"} style={{ textAlign: "center" }}>
                        <Link to={`/register`}>
                          <button className="button" style={{ width: "20% " }}>
                            View More
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
