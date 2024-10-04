import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

export default function ImagesData({ search }) {
  const [data, setData] = useState([]);
  const [dataLimit, setDataLimit] = useState(10);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      const jsonData = await response.json();

      setData(jsonData);

      setFilterData(jsonData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (search) {
      const filteredData = data.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          String(item.id).includes(search)
      );

      setFilterData(filteredData);

      setDataLimit(10);
    } else {
      setFilterData(data);
    }
  }, [search, data]);

  const handleLoadMore = () => setDataLimit((prevLimit) => prevLimit + 10);

  const getButtonColor = (id) => {
    switch (id % 4) {
      case 0:
        return "#f8961e";
      case 1:
        return "#9d4edd";
      case 2:
        return "#ff006e";
      default:
        return "blue";
    }
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
                  {filterData.slice(0, dataLimit).map((item) => (
                    <tr key={item.id}>
                      <td className="p-3 fs-5">{item.id}</td>
                      <td className="p-3 fs-5">{item.title}</td>
                      <td className="p-3 fs-5 text-center">
                        <Link to={`/image/view/${item.id}`}>
                          <img
                            src={item.thumbnailUrl}
                            width="50px"
                            className="img-custom rounded"
                            alt=""
                          />
                        </Link>
                      </td>
                      <td className="p-3 fs-5 text-center">
                        <Link to={`/image/view/${item.id}`}>
                          <button
                            className="btn p-3 button text-light"
                            style={{ "--color": getButtonColor(item.id) }}
                          >
                            <p>View More</p>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="btn-box my-5">
                <button
                  className="btn p-3 button text-light"
                  style={{ "--color": "blue" }}
                  onClick={handleLoadMore}
                >
                  <p>View More</p>
                </button>
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
