import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
export default function ImageShow() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const out = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const output = await out.json();
    setData(output);
  };

  return (
    <>
      <div className="view-container">
        {data.length > 0 ? (
          data.map((item) =>
            item.id === parseInt(id) ? (
              <div
                key={item.id}
                className="view-card animated-card text-center"
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="img-fluid rounded view-img"
                />
                <h2 className="view-card-title">{item.title}</h2>
              </div>
            ) : null
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
