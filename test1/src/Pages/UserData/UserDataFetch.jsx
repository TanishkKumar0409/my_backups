import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function UserDataFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await fetchdata.json();
    setData(jsonData);
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            {data.length > 0 ? (
              <div
                style={{
                  position: "relative",
                  top: "100px",
                  marginBottom: "150px",
                }}
              >
                <div>
                  <h2
                    className="headHeading text-light"
                    style={{ "--text": "'Users Data'" }}
                  >
                    Users Data
                  </h2>
                </div>
                <div>
                  <table className="table-custom shadow rounded text-light">
                    <thead>
                      <tr>
                        <th className="p-3">id</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">email</th>
                        <th className="p-3">More Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 text-center">{item.id}</td>
                          <td className="p-2">{item.name}</td>
                          <td className="p-2">{item.email}</td>
                          <td className="p-2  text-center">
                            <Link to={`/userData/view/${item.id}`}>
                              <button className="btn btn-custom">View</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
