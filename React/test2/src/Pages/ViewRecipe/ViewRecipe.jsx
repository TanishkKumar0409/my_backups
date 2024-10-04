import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function ViewRecipe() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      const jsonData = await response.json();
      const filterData = jsonData.recipes.filter(
        (user) => user.id === parseInt(id)
      );
      setData(filterData);
    };
    getData();
  }, [id]);
  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              {data.map((item, index) => (
                <div className="card mb-3 p-3" style={{ maxWidth: "840px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid cardViewImg rounded-start h-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title mb-4">{item.name}</h5>
                        <p className="card-text">{item.ingredients}</p>
                        <p className="card-text">{item.instructions}</p>
                        <p className="card-text text-body-secondary text-end">
                          <i className="fa fa-star text-warning"></i>
                          {item.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <Link to="/RecipeList">
                  <button className="btn btn-dark">Recipe List</button>
                </Link>
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
