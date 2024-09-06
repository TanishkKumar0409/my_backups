import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

export default function DataShow(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await out.json();
    setData(output);
  };

  return (
    <>
      {data.length > 0 ? (
        <section className="container MultiPageMain d-flex justify-content-center align-items-center">
          <div className="w-100">
            <table className="table table-striped table-bordered w-100">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>UserName</th>
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
                        <button className="btn btn-primary">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}
