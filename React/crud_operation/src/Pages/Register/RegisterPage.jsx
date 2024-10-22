import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("Male");
  const [File, setFile] = useState(null);
  const Navigate = useNavigate();

  const formData = new FormData();
  formData.append("profile", File);
  formData.append("name", Name);
  formData.append("email", Email);
  formData.append("phone", Phone);
  formData.append("city", City);
  formData.append("batch", Batch);
  formData.append("gender", Gender);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/user/new",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response);
    Navigate("/students");
    console.log("formData");
  };

  return (
    <>
      <div className="container">
        <div className="wrapper" id="wrapper">
          <div id="register-form" className="form-container active">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="input-box">
                <input
                  type="file"
                  name="Rname"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="Rname"
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
                  name="Rpassword"
                  required
                />
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="input-box">
                <select onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
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
