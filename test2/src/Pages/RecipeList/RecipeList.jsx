import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const jsonData = await response.json();
      setData(jsonData.recipes);
    };
    getData();
  }, []);
  return (
    <>
      {data.length > 0 ? (
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col pt-5">
              <table className="shadow align-content center my-5">
                <thead>
                  <tr className="text-center">
                    <th className="p-2">Id</th>
                    <th className="p-2">Image</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4">{item.id}</td>
                      <td className="p-4 text-center">
                        <img
                          src={item.image}
                          className="rounded-circle shadow"
                          width={"100px"}
                          alt=""
                        />
                      </td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4 text-center">
                        <Link to={`/RecipeList/view/${item.id}`}>
                          <button className="btn btn-outline-dark">
                            View More
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
