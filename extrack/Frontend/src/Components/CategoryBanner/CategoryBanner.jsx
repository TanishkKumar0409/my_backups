import React, { useEffect, useState } from "react";
import PieChart from "../PIeChart/PieChart"; // Fixed the import name
import CategoryButton from "../CategoryButton/CategoryButton";
import CategoryList from "../CategoryList/CategoryList";

export default function CategoryBanner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/get");
        const jsonData = await response.json();
        const wholeData = jsonData.allTransaction;
        setData(wholeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const amounts = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          category: item.category,
          amount: 0,
          color: item.color,
        };
      }
      acc[item.category].amount += item.amount;
      return acc;
    }, {})
  );

  return (
    <section className="container-fluid py-3">
      <div className="row text-light gap-1 justify-content-center">
        <div className="col-md-3 bg-dark shadow rounded-4 align-content-center p-5 text-center">
          <img
            src="https://img.freepik.com/premium-photo/round-circle-with-mans-head-circle-with-circle-middle_807814-680.jpg"
            className="profile-img rounded-circle mb-5"
            alt=""
          />
          <ul className="d-flex flex-md-column justify-content-center text-center gap-md-3 p-0">
            <li>
              <button className="btn btn-warning w-100">Home</button>
            </li>
            <li>
              <button className="btn btn-warning w-100">Category</button>
            </li>
            <li>
              <button className="btn btn-warning w-100">Transaction</button>
            </li>
            <li>
              <button className="btn btn-warning w-100">Login</button>
            </li>
          </ul>
        </div>

        <div className="col-md-8 rounded-4 p-0 d-flex align-items-center justify-content-center">
          <div className="container-fluid p-0">
            <h2 className="bg-dark fs-1 text-uppercase shadow rounded-4 text-center mb-md-3 mb-1 p-2">
              Category Analysis
            </h2>
            <div className="row bg-dark d-flex flex-md-row flex-column-reverse shadow rounded-4 p-4 mb-md-3 mb-1">
              <CategoryList Amounts={amounts} />
              <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
                <PieChart Amounts={amounts} />
              </div>
            </div>
            <CategoryButton Amounts={amounts} />
          </div>
        </div>
      </div>
    </section>
  );
}
