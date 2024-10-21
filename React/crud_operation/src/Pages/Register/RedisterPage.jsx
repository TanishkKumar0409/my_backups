import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("");
  const Navigate = useNavigate();

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
    const response = await axios.post(
      "http://localhost:8000/api/user/new",
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
              <h1>Register</h1>
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
                {/* <input
                  type="text"
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                  name="Rcpassword"
                  required
                /> */}
                <select name="" id="">
                  <option value="Male">Male</option>
                </select>
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
