import React, { useEffect, useState } from 'react';
import { API } from '../../Services/API/API';
import { useLocation } from 'react-router-dom';

export default function ShareFilesTable() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [visibleCount, setVisibleCount] = useState(10);
    const location = useLocation();
    const path = location.pathname;
    const user = JSON.parse(localStorage.getItem("admin"))

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await API.get(`/share/history/user/${user}`);
                setData(fetchData.data);
                setFilteredData(fetchData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, [user]);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = data.filter((file) =>
            file.receiverEmail.toLowerCase().includes(query) ||
            file.sharingId.toString().includes(query)
        );
        setFilteredData(filtered);
    };

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
        setFilterValue('');
    };

    const handleFilterValueChange = (event) => {
        const value = event.target.value;
        setFilterValue(value);

        let filtered = data;
        if (filterType === 'year') {
            filtered = data.filter((file) => {
                const sharedYear = new Date(file.sharedAt).getFullYear();
                return sharedYear === parseInt(value, 10);
            });
        } else if (filterType === 'month') {
            filtered = data.filter((file) => {
                const sharedMonth = new Date(file.sharedAt).getMonth() + 1;
                return sharedMonth === parseInt(value, 10);
            });
        } else if (filterType === 'day') {
            filtered = data.filter((file) => {
                const sharedDay = new Date(file.sharedAt).getDate();
                return sharedDay === parseInt(value, 10);
            });
        }
        setFilteredData(filtered);
    };

    const displayedData = path === '/main'
        ? filteredData.slice(0, 5)
        : filteredData.slice(0, visibleCount);

    return (
        <>
            <div className="mb-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Receiver Email or ID"
                    value={searchQuery}
                    onChange={handleSearch}
                    id='searchEmail'
                />
            </div>

            <div className="mb-3 d-flex gap-2">
                <select
                    className="form-select"
                    value={filterType}
                    id='DateSearch'
                    onChange={handleFilterChange}
                >
                    <option value="">Filter by</option>
                    <option value="year">Year</option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                </select>
                {filterType && (
                    <select
                        className="form-select"
                        value={filterValue}
                        onChange={handleFilterValueChange}
                    >
                        <option value="">Select {filterType}</option>
                        {filterType === 'year' && (
                            <>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                            </>
                        )}
                        {filterType === 'month' && (
                            <>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </>
                        )}
                        {filterType === 'day' && (
                            <>
                                {Array.from({ length: 31 }, (_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                )}
            </div>

            <div className="table-responsive">
                <table className="table table-striped w-100 h-100 text-nowrap align-middle rounded overflow-hidden">
                    <thead className="tableHeadCustom">
                        <tr className="text-center">
                            <th>Id</th>
                            <th>Shared Date</th>
                            <th>Shared To</th>
                            <th>File Shared</th>
                        </tr>
                    </thead>
                    <tbody className="tableBodyCustom text-center">
                        {displayedData.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            displayedData.map((file, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{new Date(file.sharedAt).toLocaleDateString('en-GB')}</td>
                                    <td>{file.receiverEmail}</td>
                                    <td>{file.fileName.length} Files</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {path !== '/main' && (
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
                                onClick={() => setVisibleCount((prev) => Math.max(prev - 10, 10))}
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
