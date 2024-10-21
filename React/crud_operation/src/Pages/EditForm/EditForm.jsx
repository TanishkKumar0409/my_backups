import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`http://localhost:8000/api/user/${id}`);
      const jsonData = await fetchData.json();
      if (jsonData) {
        setName(jsonData[0].name);
        setEmail(jsonData[0].email);
        setPhone(jsonData[0].phone);
        setCity(jsonData[0].city);
        setBatch(jsonData[0].batch);
        setGender(jsonData[0].gender);
      }
    };
    getData();
  }, [id]);

  const Details = {
    name: Name,
    email: Email,
    phone: Phone,
    city: City,
    batch: Batch,
    gender: Gender,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:8000/api/user/current/${id}`,
      Details
    );
    console.log(response);
    Navigate("/students");
  };

  return (
    <>
      <div className="container">
        <div className="wrapper" id="wrapper">
          <div id="register-form" className="form-container active">
            <form onSubmit={handleSubmit}>
              <h1>Update</h1>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="Rname"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  name="Remail"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="input-box">
                <input
                  type="tel"
                  placeholder="Phone"
                  name="Rphone"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="City"
                  name="Raddress"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="input-box">
                <input
                  type="number"
                  onChange={(e) => setBatch(e.target.value)}
                  placeholder="Batch"
                  value={Batch}
                  name="Rpassword"
                  required
                />
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="input-box">
                <select onChange={(e) => setGender(e.target.value)}>
                  {Gender === "Male" ? (
                    <>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </>
                  ) : (
                    <>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </>
                  )}
                </select>
                <i className="fa-solid fa-genderless"></i>
              </div>
              <button type="submit" className="button" name="Rbtn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
