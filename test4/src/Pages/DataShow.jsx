import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

export default function DataShow({ search, RootColors }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setData(users);
    setFilter(users);
  };

  useEffect(() => {
    setFilter(
      data.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.phone.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  return (
    <section className="data-show" style={{ top: "60px", position: "relative" }}>
      <div className="container" >
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
                    {filter.map((item) => (
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
