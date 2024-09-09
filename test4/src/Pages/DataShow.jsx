import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

export default function DataShow(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setData(users);
  };

  return (
    <section className="data-show" style={props.RootColors}>
      <div className="container">
        <div className="row w-100">
          <div className="col ">
            {data.length > 0 ? (
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                          <Link to={`/data/view/${item.id}`}>
                            <button className="view-button">View</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
