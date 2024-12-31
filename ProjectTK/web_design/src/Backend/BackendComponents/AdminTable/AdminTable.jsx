import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { noFileAPI } from '../../../Services/API/API';
import { toast } from 'react-toastify';

export default function AdminTable() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get("/user/admin/all");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleDemote = async (username) => {
        const confirmation = window.confirm(`Are you sure you want to demote ${username}?`);
        if (!confirmation) {
            toast.info("Demotion canceled");
            return;
        }

        try {
            const demoteResponse = await noFileAPI.put(`/user/demote/${username}`);
            const response = await noFileAPI.get("/user/admin/all");
            setData(response.data);
            toast.success(demoteResponse.data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error)
        }
    };

    const handleBlock = async (username) => {
        const confirmation = window.confirm(`Are you sure you want to block/unblock ${username}?`);
        if (!confirmation) {
            toast.info("Action canceled");
            return;
        }

        try {
            const blockingResponse = await noFileAPI.put(`/user/block/${username}`);
            const response = await noFileAPI.get("/user/admin/all");
            setData(response.data);
            toast.success(blockingResponse.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const isDisabled = (user) => user.status === "BLOCKED";

    const filteredData = data.filter((user) => {
        const matchesSearch =
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.contact.toString().includes(search);

        const matchesStatus = statusFilter ? user.status === statusFilter : true;

        return matchesSearch && matchesStatus;
    });

    const displayedData = location.pathname === "/admin/dashboard" ? filteredData.slice(0, 5) : filteredData;

    const uniqueStatuses = Array.from(new Set(data.map(user => user.status)));

    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by username, name, email, or contact"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            className="form-select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">All Statuses</option>
                            {uniqueStatuses.map((status, index) => (
                                <option key={index} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>View</th>
                            <th>Demote</th>
                            <th>Block/Unblock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.length > 0 ? (
                            displayedData.map((user, index) => (
                                <tr key={index}>
                                    <td className='align-content-center'>{index + 1}</td>
                                    <td className='align-content-center'>{user.username}</td>
                                    <td className='align-content-center'>{user.name}</td>
                                    <td className='align-content-center'>{user.email}</td>
                                    <td className='align-content-center'>{user.contact}</td>
                                    <td className='align-content-center'>{user.status}</td>
                                    <td className="text-center">
                                        <button className="btn btn-custom custom-btn btn-sm">View</button>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-custom custom-btn btn-sm"
                                            onClick={() => handleDemote(user.username)}
                                        >
                                            Demote
                                        </button>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-custom custom-btn btn-sm"
                                            onClick={() => handleBlock(user.username)}
                                            disabled={isDisabled(user)}
                                        >
                                            {user.status === "BLOCKED" ? "Unblock" : "Block"}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center fw-bold fs-1">
                                    No Data Available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col text-center">
                    {data.length > 5 && location.pathname === "/admin/dashboard" && (
                        <button className="btn btn-custom custom-btn">Show All</button>
                    )}
                </div>
            </div>
        </>
    );
}
