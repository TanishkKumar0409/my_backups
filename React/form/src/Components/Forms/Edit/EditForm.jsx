import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("");
  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`http://localhost:8000/api/user/${id}`);
      const JsonData = await fetchData.json();
      const output = JsonData.getIdUser;

      if (output.length > 0) {
        const user = output[0];
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setCity(user.city);
        setBatch(user.batch);
        setGender(user.gender);
      }
    };
    getData();
  }, [id]);

  const handleForm = async (e) => {
    e.preventDefault();
    const Details = {
      name: Name,
      email: Email,
      phone: Phone,
      city: City,
      batch: Batch,
      gender: Gender,
    };

    console.log(Details);
    const response = await axios.put(
      `http://localhost:8000/api/user/current/${id}`,
      Details
    );
    console.log(response);
    Navigate("/students");
  };

  console.log(Gender);
  return (
    <div className="container p-5">
      <div className="row w-100 d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card card-custom shadow-lg text-dark">
            <div className="card-header border-0 text-center">
              <h2 className="mb-0">Update</h2>
            </div>
            <form onSubmit={handleForm}>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    className="form-control custom-input"
                    id="inputName"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    className="form-control custom-input"
                    id="inputEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={Phone}
                    className="form-control custom-input"
                    id="inputPhone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={City}
                    className="form-control custom-input"
                    id="inputCity"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputBatch" className="form-label">
                    Batch
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setBatch(e.target.value)}
                    value={Batch}
                    className="form-control custom-input"
                    id="inputBatch"
                    placeholder="Enter your batch"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputGender" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setGender(e.target.value)}
                    value={Gender}
                    className="form-control custom-input"
                    id="inputBatch"
                    placeholder="Enter your batch"
                  />
                </div>
              </div>
              <div className="card-footer border-0 p-3 text-center">
                <button type="submit" className="btn btn-gradient sp-btn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
