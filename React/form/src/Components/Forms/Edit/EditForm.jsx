import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("Male");
  // const [file, setFile] = useState(null);
  const { id } = useParams();
  const Navigate = useNavigate();

  const [Data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(`http://localhost:8000/api/user/${id}`);
      const JsonData = await fetchData.json();
      const output = JsonData.getIdUser;
      setData(output);
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
    // file: file,
  };
  const handleForm = async (e) => {
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
      <div className="container p-5">
        <div className="row w-100 d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card card-custom shadow-lg text-dark">
              <div className="card-header border-0 text-center">
                <h2 className="mb-0">Update</h2>
              </div>
              {Data.map((item) => (
                <form onSubmit={handleForm}>
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="inputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
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
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        type="tel"
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
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        type="text"
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
                        onChange={(e) => {
                          setBatch(e.target.value);
                        }}
                        type="number"
                        className="form-control custom-input"
                        id="inputBatch"
                        placeholder="Enter your batch"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputGender" className="form-label">
                        Gender
                      </label>
                      <select
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        id="inputGender"
                        className="form-select custom-input"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {/* <div className="mb-3">
                    <label htmlFor="inputFile" className="form-label">
                      Upload File
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.value);
                      }}
                      className="form-control custom-input"
                      id="inputFile"
                    />
                  </div> */}
                  </div>
                  <div className="card-footer border-0 p-3 text-center ">
                    <button type="submit" className="btn btn-gradient sp-btn">
                      Update
                    </button>
                  </div>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
