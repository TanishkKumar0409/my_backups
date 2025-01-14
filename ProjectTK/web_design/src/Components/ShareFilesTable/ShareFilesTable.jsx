import React, { useEffect, useState } from "react";
import { API } from "../../Services/API/API";
import { useLocation } from "react-router-dom";

export default function ShareFilesTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const location = useLocation();
  const path = location.pathname;

  const username = JSON.parse(localStorage.getItem("user"));

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2024 + 1 },
    (_, i) => 2024 + i
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("en", { month: "long" })
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await API.get(`/share/history/user/${username}`);
        setData(fetchData.data);
        setFilteredData(fetchData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(() => {
      getData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [username]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleYearChange = (event) => {
    setYearFilter(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonthFilter(event.target.value);
  };

  const handleDayChange = (event) => {
    setDayFilter(event.target.value);
  };

  const filterData = () => {
    let filtered = data;

    if (searchQuery) {
      filtered = filtered.filter((file) =>
        file.receiverEmail.toLowerCase().includes(searchQuery)
      );
    }

    if (yearFilter) {
      filtered = filtered.filter(
        (file) =>
          new Date(file.sharedAt).getFullYear() === parseInt(yearFilter, 10)
      );
    }

    if (monthFilter) {
      filtered = filtered.filter(
        (file) =>
          new Date(file.sharedAt).getMonth() + 1 === parseInt(monthFilter, 10)
      );
    }

    if (dayFilter) {
      filtered = filtered.filter(
        (file) => new Date(file.sharedAt).getDate() === parseInt(dayFilter, 10)
      );
    }

    return filtered;
  };

  const displayedData =
    path === "/main"
      ? filterData().slice(0, 5)
      : filterData().slice(0, visibleCount);

  return (
    <>
      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Receiver Email"
          value={searchQuery}
          onChange={handleSearch}
          id="searchEmail"
        />
      </div>

      <div className="mb-3 d-flex input-group">
        <select
          className="form-select"
          value={yearFilter}
          id="YearSearch"
          onChange={handleYearChange}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={monthFilter}
          id="MonthSearch"
          onChange={handleMonthChange}
        >
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index + 1} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={dayFilter}
          id="DaySearch"
          onChange={handleDayChange}
        >
          <option value="">Select Day</option>
          {Array.from({ length: 31 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-striped w-100 h-100 text-nowrap align-middle rounded overflow-hidden">
          <thead className="tableHeadCustom">
            <tr className="text-center">
              <th>Id</th>
              <th>Shared Date</th>
              <th>Shared Time</th>
              <th>Shared To</th>
              <th>Shared Message</th>
              <th>File Shared</th>
            </tr>
          </thead>
          <tbody className="tableBodyCustom text-center">
            {displayedData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No data available
                </td>
              </tr>
            ) : (
              displayedData.map((file, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{new Date(file.sharedAt).toLocaleDateString("en-GB")}</td>
                  <td>
                    {new Date(file.sharedAt).toLocaleTimeString({
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>

                  <td>{file.receiverEmail}</td>
                  <td>{file.message}</td>
                  <td>{file.fileName.length} Files</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {path !== "/main" && (
        <div className="text-center mt-3">
          <div className="btn-group">
            {visibleCount < filteredData.length && (
              <button
                className="btn custom-btn btn-custom"
                onClick={() => setVisibleCount((prev) => prev + 10)}
              >
                Show More
              </button>
            )}
            {visibleCount > 10 && (
              <button
                className="btn custom-btn btn-custom"
                onClick={() =>
                  setVisibleCount((prev) => Math.max(prev - 10, 10))
                }
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
