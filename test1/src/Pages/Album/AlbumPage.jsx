import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

export default function AlbumPage({ search }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [data, setData] = useState([]);
  const maxIndex = 4991;
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const jsonData = await fetchData.json();

      setData(jsonData);
      setFilterData(jsonData);
    };

    getData();
  }, []);

  useEffect(() => {
    if (search) {
      const filteredData = data.filter((item) =>
        String(item.albumId).includes(search)
      );

      setFilterData(filteredData);
    } else {
      setFilterData(data);
    }
  }, [search, data]);

  const AdjustIndex = (command) => {
    let newIndex = activeIndex + command;

    if (newIndex < 1) {
      newIndex = maxIndex;
    } else if (newIndex > maxIndex) {
      newIndex = 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      {data.length > 0 ? (
        <div
          className="container vh-100 d-flex align-items-center justify-content-center"
          style={{ position: "relative", top: "100px" }}
        >
          <div className="row">
            <div className="col text-center">
              <h2 style={{ "--afterText": "'Album'" }}>Album</h2>
              {filterData.map((item, index) => (
                <>
                  {item.id === activeIndex ? (
                    <>
                      <div
                        key={index}
                        className="image-container rounded mt-3 p-4 text-center"
                      >
                        <div>
                          <img
                            src={item.url}
                            className="img-fluid rounded img-show shadow"
                            width={"400px"}
                            alt=""
                          />
                        </div>
                        <div className="mt-3">
                          <h3>Album {item.albumId}</h3>
                        </div>
                        <div className="btn-box">
                          <button
                            className="btn p-3 button text-light mt-4 me-2"
                            style={{ "--color": "blue" }}
                            onClick={() => AdjustIndex(-50)}
                          >
                            <p style={{ fontSize: "80%" }}>prev album</p>
                          </button>
                          <Link to={`/album/list/${item.albumId}`}>
                            <button
                              className="btn p-3 button text-light mt-4"
                              style={{ "--color": "#cbcb0c" }}
                            >
                              <p style={{ fontSize: "80%" }}>view album</p>
                            </button>
                          </Link>
                          <button
                            className="btn p-3 button text-light mt-4 ms-2"
                            style={{ "--color": "#27b507" }}
                            onClick={() => AdjustIndex(+50)}
                          >
                            <p style={{ fontSize: "80%" }}>next album</p>
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
