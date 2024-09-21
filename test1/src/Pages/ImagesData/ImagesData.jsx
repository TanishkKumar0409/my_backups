import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

export default function ImagesData() {
  const [data, setData] = useState([]);
  const [dataLimit, setDataLimit] = useState(10);

  const getdata = async () => {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const jsonData = await fetchData.json();
    setData(jsonData);
  };

  useEffect(() => {
    getdata();
  }, []);

  const LimitIncrement = () => {
    setDataLimit(dataLimit + 10);
  };

  return (
    <>
      {data.length > 0 ? (
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ position: "relative", top: "150px" }}
        >
          <div className="row">
            <div className="col text-center">
              <h2 style={{ "--afterText": "'Images Data'" }}>Images Data</h2>
              <div>
                <table className="table-custom text-dark shadow text-start">
                  <thead id="theader">
                    <tr>
                      <th className="p-3 fs-5">Id</th>
                      <th className="p-3 fs-5">Title</th>
                      <th className="p-3 fs-5">Thumbnail</th>
                      <th className="p-3 fs-5">More Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.slice(0, dataLimit).map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 fs-5">{item.id}</td>
                        <td className="p-3 fs-5">{item.title}</td>
                        <td className="p-3 fs-5 text-center">
                          <img
                            src={item.thumbnailUrl}
                            width={"50px"}
                            className="img-custom rounded"
                            alt=""
                          />
                        </td>
                        <td className="p-3 fs-5 text-center">
                          <button
                            className="btn p-3 button text-light"
                            style={{
                              "--color":
                                item.id % 4 === 0
                                  ? "#f8961e"
                                  : item.id % 4 === 1
                                  ? "#9d4edd"
                                  : item.id % 4 === 2
                                  ? "#ff006e"
                                  : "blue",
                            }}
                          >
                            <p>View More</p>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="btn-box my-5">
                  <button
                    className="btn p-3 button text-light"
                    style={{
                      "--color": "#ff006e",
                    }}
                    onClick={LimitIncrement}
                  >
                    <p>View More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
