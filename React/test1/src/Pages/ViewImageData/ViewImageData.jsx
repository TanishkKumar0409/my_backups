import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewImageData() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const maxIndex = 5000;

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      const jsonData = await fetchData.json();

      setData(jsonData);
    };

    getData();
  }, [id]);

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
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            {data.map((item) => (
              <>
                {item.id === activeIndex ? (
                  <div
                    key={item.id}
                    className="image-container rounded mt-3 p-4 text-center"
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3>Album {item.albumId}</h3>
                      </div>
                      <div>
                        <h3>Image {item.id}</h3>
                      </div>
                    </div>
                    <div>
                      <img
                        src={item.url}
                        className="img-fluid rounded img-show shadow"
                        width={"400px"}
                        alt=""
                      />
                    </div>
                    <div className="mt-4">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="btn-box mt-5">
                      <button
                        className="btn p-3 button text-light mt-1 me-2"
                        style={{ "--color": "blue" }}
                        onClick={() => AdjustIndex(-1)}
                      >
                        <p style={{ fontSize: "80%" }}>prev image</p>
                      </button>
                      <Link to={`/album`}>
                        <button
                          className="btn p-3 button text-light mt-1"
                          style={{ "--color": "#00ffd4" }}
                        >
                          <p style={{ fontSize: "120%" }}>Albums</p>
                        </button>
                      </Link>
                      <Link to={`/`}>
                        <button
                          className="btn p-3 button text-light ms-2 mt-1"
                          style={{ "--color": "#cbcb0c" }}
                        >
                          <p style={{ fontSize: "120%" }}>All</p>
                        </button>
                      </Link>
                      <button
                        className="btn p-3 button text-light mt-1 ms-2"
                        style={{ "--color": "#27b507" }}
                        onClick={() => AdjustIndex(+1)}
                      >
                        <p style={{ fontSize: "80%" }}>next image</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
