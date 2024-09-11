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
  const hidden="";
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: text,
      email: email,
      number: number,
      date: date,
      datetime: datetime,
      datetimeLocal: datetimeLocal,
      color: color,
      password: password,
      rangeValue: rangeValue,
      tel: tel,
      url: url,
      week: week,
      month: month,
      search: search,
      radio: radio,
      checkbox: checkbox,
      file: file ? file.name : "No file chosen",
      hidden: hidden,
      time: time,
    };
    window.alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <div className="container" style={props.RootColors}>
        {/* First Row: Username form */}
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div className="col-md-4">
            <div className="card mt-5 shadow-lg">
              <div className="card-header">
                <h1 className="text-center">Simple Form</h1>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Username:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="Enter Username"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      required
                    />
                  </div>
                  <input type="submit" className="btn btn-primary mt-3" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Various inputs */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="card mt-5 shadow-lg">
              <div className="card-header">
                <h2 className="text-center">Various Input Types</h2>
              </div>
              <div className="card-body">
                <form className="row" onSubmit={handleSubmit}>
                  {/* Column 1 */}
                  <div className="col-md-6 mb-3">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <label>Number:</label>
                    <input
                      type="number"
                      className="form-control mb-2"
                      placeholder="Enter a number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />

                    <label>Date:</label>
                    <input
                      type="date"
                      className="form-control mb-2"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />

                    <label>Date & Time:</label>
                    <input
                      type="datetime"
                      className="form-control mb-2"
                      value={datetime}
                      onChange={(e) => setDatetime(e.target.value)}
                    />

                    <label>Date & Time (Local):</label>
                    <input
                      type="datetime-local"
                      className="form-control mb-2"
                      value={datetimeLocal}
                      onChange={(e) => setDatetimeLocal(e.target.value)}
                    />

                    <label>Color:</label>
                    <input
                      type="color"
                      className="form-control mb-2"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>

                  {/* Column 2 */}
                  <div className="col-md-6 mb-3">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control mb-2"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <label>Range (0-100):</label>
                    <input
                      type="range"
                      className="form-range mb-2"
                      value={rangeValue}
                      onChange={(e) => setRangeValue(e.target.value)}
                      min="0"
                      max="100"
                    />

                    <label>Telephone:</label>
                    <input
                      type="tel"
                      className="form-control mb-2"
                      placeholder="Enter your phone number"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      required
                    />

                    <label>URL:</label>
                    <input
                      type="url"
                      className="form-control mb-2"
                      placeholder="Enter a URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />

                    <label>Search:</label>
                    <input
                      type="search"
                      className="form-control mb-2"
                      placeholder="Search something"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <label>File:</label>
                    <input
                      type="file"
                      className="form-control mb-2"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>

                  {/* Column 3 */}
                  <div className="col-md-6 mb-3">
                    <label>Time:</label>
                    <input
                      type="time"
                      className="form-control mb-2"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />

                    <label>Week:</label>
                    <input
                      type="week"
                      className="form-control mb-2"
                      value={week}
                      onChange={(e) => setWeek(e.target.value)}
                    />

                    <label>Month:</label>
                    <input
                      type="month"
                      className="form-control mb-2"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    />

                    <label>Radio:</label>
                    <input
                      type="radio"
                      name="radioOption"
                      className="form-check-input mb-2"
                      value="Radio Value"
                      checked={radio === "Radio Value"}
                      onChange={(e) => setRadio(e.target.value)}
                    />
                    <span className="ml-2">Select</span>

                    <label>Checkbox:</label>
                    <input
                      type="checkbox"
                      className="form-check-input mb-2"
                      checked={checkbox}
                      onChange={(e) => setCheckbox(e.target.checked)}
                    />
                    <span className="ml-2">Agree</span>
                  </div>

                  {/* Column 4 */}
                  <div className="col-md-6 mb-3">
                    <label>Hidden Field (Preset Value):</label>
                    <input
                      type="hidden"
                      className="form-control mb-2"
                      value={"hidden Input"}
                    />

                    <label>Reset:</label>
                    <input type="reset" className="form-control mb-2" />

                    <label>Image Input (Disabled):</label>
                    <input
                      type="image"
                      className="form-control mb-2"
                      alt="Sample"
                      disabled
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <input
                      type="submit"
                      className="btn btn-success form-control mt-3"
                      value="Submit All Data"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
