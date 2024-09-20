import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function ImageData() {
  const [data, setData] = useState([]);
  const [ViewLimit, setViewLimit] = useState(50);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const fetchdata = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
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
                  <h2 className="headHeading text-dark">Users Data</h2>
                </div>
                <div>
                  <table className="table-custom shadow rounded text-dark">
                    <thead>
                      <tr>
                        <th className="p-3">Id</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Thumbnail</th>
                        <th className="p-3">More Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, ViewLimit).map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 text-center">{item.id}</td>
                          <td className="p-2">{item.title}</td>
                          <td className="p-2 text-center">
                            <img
                              src={item.thumbnailUrl}
                              className="rounded"
                              width={"50px"}
                              alt=""
                            />
                          </td>
                          <td className="p-2  text-center">
                            <Link to={`/userData/view/${item.id}`}>
                              <button className="btn btn-custom">View</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="btn-box p-3 mt-3 rounded shadow d-flex justify-content-center">
                    <button
                      className="btn btn-custom shadow"
                      onClick={() => {
                        setViewLimit(ViewLimit + 50);
                      }}
                    >
                      View More
                    </button>
                  </div>
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
