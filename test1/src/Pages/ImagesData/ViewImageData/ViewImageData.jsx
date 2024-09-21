import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewImageData() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const jsonData = await response.json();
        const filterData = jsonData.filter((user) => user.id === parseInt(id));
        setData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            {data.map((item) => (
              <>
                <div
                  key={item.id}
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
                  <div className="mt-2">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="btn-box mt-5">
                    <Link to="/">
                      <button
                        className="btn p-3 button text-light"
                        style={{ "--color": "blue" }}
                      >
                        <p style={{ fontSize: "120%" }}>Back</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
