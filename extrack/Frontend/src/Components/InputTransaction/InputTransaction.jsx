import React, { useState } from "react";
import axios from "axios";

export default function InputTransaction() {
  const [Category, setCategory] = useState("");
  const [TypeOfPayment, setTypeOfPayment] = useState("");
  const [Amount, setAmount] = useState("");

  const formData = new FormData();
  formData.append("category", Category);
  formData.append("paymentType", TypeOfPayment);
  formData.append("amount", Amount);

  const Details = {
    category: Category,
    paymentType: TypeOfPayment,
    amount: Amount,
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8000/api/new", Details);
    console.log(response);
  };

  return (
    <section className="container-fluid py-3">
      <div className="row text-light justify-content-center">
        <div className="col-11 bg-dark shadow rounded-4 p-3">
          <form
            className="row gx-2 gy-1 align-items-center justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="col-auto" style={{ flex: "1 1 150px" }}>
              <select
                className="form-select bg-dark text-light border-warning mb-md-0 mb-4"
                name="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="movies">movies</option>
              </select>
            </div>

            <div className="col-auto" style={{ flex: "1 1 150px" }}>
              <select
                className="form-select bg-dark text-light border-warning mb-md-0  mb-4"
                name="typeOfPayment"
                onChange={(e) => setTypeOfPayment(e.target.value)}
              >
                <option value="">Select Payment Type</option>
                <option value="Cash in Hand">Cash in Hand</option>
                <option value="Bank">Bank</option>
              </select>
            </div>

            <div className="col-auto" style={{ flex: "1 1 100px" }}>
              <label htmlFor="price" className="d-none">
                Amount
              </label>
              <input
                type="number"
                className="form-control bg-dark text-light border-warning mb-md-0  mb-4"
                placeholder="Amount"
                id="price"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-warning px-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
