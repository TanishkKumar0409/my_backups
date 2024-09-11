import React, { useState } from "react";

export default function SimpleForm(props) {
  // State for each input field
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [datetime, setDatetime] = useState("");
  const [datetimeLocal, setDatetimeLocal] = useState("");
  const [color, setColor] = useState("#000000");
  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(50);
  const [tel, setTel] = useState("");
  const [url, setUrl] = useState("");
  const [week, setWeek] = useState("");
  const [month, setMonth] = useState("");
  const [search, setSearch] = useState("");
  const [radio, setRadio] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [file, setFile] = useState(null);
  const [hidden, setHidden] = useState("hiddenValue");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logging each value one by one to the console
    console.log("Username: ", text);
    console.log("Email: ", email);
    console.log("Number: ", number);
    console.log("Date: ", date);
    console.log("Date & Time: ", datetime);
    console.log("Date & Time (Local): ", datetimeLocal);
    console.log("Color: ", color);
    console.log("Password: ", password);
    console.log("Range Value: ", rangeValue);
    console.log("Telephone: ", tel);
    console.log("URL: ", url);
    console.log("Week: ", week);
    console.log("Month: ", month);
    console.log("Search: ", search);
    console.log("Radio: ", radio);
    console.log("Checkbox: ", checkbox);
    console.log("File: ", file ? file.name : "No file chosen");
    console.log("Hidden: ", hidden);
    console.log("Time: ", time);
  };

  return (
    <div className="view-container">
      <div className="view-card">
        <div className="view-card-title">Simple Form</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Number:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter a number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date & Time:</label>
            <input
              type="datetime-local"
              className="form-control"
              value={datetimeLocal}
              onChange={(e) => setDatetimeLocal(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Color:</label>
            <input
              type="color"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Range (0-100):</label>
            <input
              type="range"
              className="form-range"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              min="0"
              max="100"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telephone:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">URL:</label>
            <input
              type="url"
              className="form-control"
              placeholder="Enter a URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Search:</label>
            <input
              type="search"
              className="form-control"
              placeholder="Search something"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">File:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time:</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Week:</label>
            <input
              type="week"
              className="form-control"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Month:</label>
            <input
              type="month"
              className="form-control"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Radio:</label>
            <div className="form-check">
              <input
                type="radio"
                name="radioOption"
                className="form-check-input"
                value="Radio Value"
                checked={radio === "Radio Value"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label className="form-check-label">Select</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Checkbox:</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
              <label className="form-check-label">Agree</label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Hidden:</label>
            <input
              type="hidden"
              value={hidden}
              onChange={(e) => setHidden(e.target.value)}
            />
            <p className="text-muted">Hidden value: {hidden}</p>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
