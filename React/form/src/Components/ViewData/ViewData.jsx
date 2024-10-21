import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewData() {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`http://localhost:4000/api/user/${id}`);
      const JsonData = await fetchData.json();
      const output = JsonData.getIdUser;
      setData(output);
    };
    getData();
  }, [id]);

  console.log(Data);

  const handleDelete = async (par) => {
    const Delete = await axios.delete(
      `http://localhost:4000/api/user/delete/${par}`
    );
    console.log(Delete);
    Navigate("/students");
  };
  return (
    <>
      <div className="container py-5">
        <div className="row w-100 d-flex align-items-center justify-content-center">
          <div className="col-md-6 col-lg-4">
            {Data.map((item) => (
              <div className="card shadow-lg border-0" key={item.id}>
                <div className="card-header p-0">
                  <img
                    src="https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80"
                    alt="User"
                    className="img-fluid rounded-top"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">{item.name}</h3>
                  <hr />
                  <div className="user-info">
                    <p>
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {item.phone}
                    </p>
                    <p>
                      <strong>City:</strong> {item.city}
                    </p>
                    <p>
                      <strong>Batch:</strong> {item.batch}
                    </p>
                    <p>
                      <strong>Gender:</strong> {item.gender}
                    </p>
                    <div className="gap-1 d-flex justify-content-center">
                      <Link to="/students">
                        <button className="btn">Back</button>
                      </Link>
                      <button
                        className="btn btn-dark"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
