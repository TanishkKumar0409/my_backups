import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { Link, useParams } from "react-router-dom";

export default function Data() {
  const id = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/photos");
    const output = await out.json();
    setData(output);
  };
  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <div className="position-relative d-flex justify-content-center mt-5">
          <div>
            <table>
              <thead>
                <tr>
                  <th className="border border-2 border-dark p-2">id</th>
                  <th className="border border-2 border-dark p-2">
                    Image Name
                  </th>
                  <th className="border border-2 border-dark p-2">Image</th>
                  <th className="border border-2 border-dark p-2">TumbNail</th>
                  <th className="border border-2 border-dark p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td className="border border-2 border-dark p-2">
                          {item.id}
                        </td>
                        <td className="border border-2 border-dark p-2">
                          {item.title}
                        </td>
                        <td className="border border-2 border-dark p-2">
                          <img
                            src={item.url}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                        </td>
                        <td className="border border-2 border-dark p-2">
                          <img
                            src={item.thumbnailUrl}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                        </td>
                        <td className="border border-2 border-dark p-2">
                          <Link to={`/data/view/${item.id}`}>
                            <button className="btn btn-outline-warning">
                              Veiw More
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <section>
          <Loader />
        </section>
      )}
    </>
  );
}
