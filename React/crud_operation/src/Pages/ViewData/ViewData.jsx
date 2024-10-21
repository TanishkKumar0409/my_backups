import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewData() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`http://localhost:8000/api/user/${id}`);
      const jsonData = await fetchData.json();
      setData(jsonData);
    };
    getData();
  }, [id]);

  const handleDelete = async () => {
    const response = await axios.delete(
      `http://localhost:8000/api/user/delete/${id}`
    );
    console.log(response);
    Navigate("/register");
  };
  return (
    <>
      <section className="container">
        <div className="card">
          <div className="cardHeader">
            <img
              src="https://download-free-images.com/img/00003/nature-383446.gif"
              alt="Profile"
            />
          </div>
          {data.map((item) => (
            <div className="cardBody" key={item.id}>
              <h2>{item.name}</h2>
              <h4>{item.email}</h4>
              <h4>{item.phone}</h4>
              <h4>{item.city}</h4>
              <h4>{item.batch}</h4>
              <h4>{item.gender}</h4>
              <div className="btnBox">
                <Link to="/students" className="btn2">
                  Back
                </Link>
                <Link to={`/students/edit/${item.id}`} className="btn2">
                  Update
                </Link>
                <button className="btn2" onClick={() => handleDelete()}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
