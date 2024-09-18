import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

export default function ImageData({ search }) {
  const [dataShowLimit, setDataShowLimit] = useState(50);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/photos");
    const output = await out.json();
    setData(output);
  };

  useEffect(() => {
    const filteredData = data.filter((user) =>
      user.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filteredData);
  }, [search, data]);

  return (
    <>
      <section
        className="data-show"
        style={{ top: "60px", position: "relative" }}
      >
        <div className="container">
          <div className="row w-100">
            <div className="col">
              {data.length > 0 ? (
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr className="position-sticky">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filter.slice(0, dataShowLimit).map((item, index) => (
                        <tr key={index}>
                          <td className="text-center">{item.id}</td>
                          <td>{item.title}</td>
                          <td className="text-center">
                            <img
                              src={item.url}
                              width={"50px"}
                              height={"50px"}
                              alt=""
                              className="view-img rounded shadow"
                            />
                          </td>
                          <td className="text-center">
                            <img
                              src={item.thumbnailUrl}
                              width={"50px"}
                              height={"50px"}
                              className="view-img rounded shadow"
                              alt=""
                            />
                          </td>
                          <td className="text-center">
                            <Link to={`/image-data/image-view/${item.id}`}>
                              <button className="view-button">View</button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    className="view-more-container"
                    style={{ textAlign: "center", marginTop: "20px" }}
                  >
                    <button
                      className="view-button shadow"
                      onClick={() => {
                        setDataShowLimit(dataShowLimit + 50);
                      }}
                    >
                      View More
                    </button>
                  </div>
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
