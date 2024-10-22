import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewData() {
  const Navigate = useNavigate();

  const { id } = useParams();

  const [data, setData] = useState([]);

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

    Navigate("/students/register");
  };
  return (
    <>
      <section className="container">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="cardHeader">
              <img
                src={`http://localhost:8000/${item.profile}`}
                alt="Profile"
              />
            </div>
            <div className="cardBody">
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
                <button
                  className="btn2"
                  onClick={() => {
                    window.confirm("Are You Want To Delete This Student");
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
