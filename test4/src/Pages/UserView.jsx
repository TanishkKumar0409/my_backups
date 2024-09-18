// View.js

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
export default function View(props) {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      const user = users.find((user) => user.id === parseInt(id));
      setData(user);
    };
    getData();
  }, [id]);

  return (
    <div
      className="view-container"
      style={{ top: "60px", position: "relative" }}
    >
      {data ? (
        <div className="view-card">
          <h1 className="view-card-title">User Details</h1>
          <table className="info-table">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{data.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td className="info-name">{data.name}</td>
              </tr>
              <tr>
                <th>Username</th>
                <td className="info-username">{data.username}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{data.email}</td>
              </tr>
            </tbody>
          </table>
          <h2 className="address-title">Address</h2>
          <table className="info-table">
            <tbody>
              <tr>
                <th>Street</th>
                <td>{data.address.street}</td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>{data.address.suite}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{data.address.city}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>{data.address.zipcode}</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>{data.address.geo.lat}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{data.address.geo.lng}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/data">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
