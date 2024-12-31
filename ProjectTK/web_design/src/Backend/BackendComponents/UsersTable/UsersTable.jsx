import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { noFileAPI } from '../../../Services/API/API';
import { toast } from 'react-toastify';

export default function UsersTable() {
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get("/user/all");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleBlock = async (username) => {
        try {
            const blockingResponse = await noFileAPI.put(`/user/block/${username}`);
            const response = await noFileAPI.get("/user/all");
            setData(response.data);
            toast.success(blockingResponse.data.message);
        } catch (error) {
            console.log(error);
        }
    };
    const handlePromote = async (username) => {
        try {
            const blockingResponse = await noFileAPI.put(`/user/promote/${username}`);
            const response = await noFileAPI.get("/user/all");
            setData(response.data);
            toast.success(blockingResponse.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const isDisabled = (user) => user.status === "BLOCKED";

    const displayedData = location.pathname === "/admin/dashboard" ? data.slice(0, 5) : data;

    return (
        <>
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
                            <th>Promote</th>
                            <th>Block/Unblock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.status}</td>
                                <td className="text-center">
                                    <button className="btn btn-custom custom-btn">View</button>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-custom custom-btn" onClick={() => handlePromote(user.username)}>Promote</button>
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-custom custom-btn"
                                        onClick={() => handleBlock(user.username)}
                                        disabled={isDisabled(user)}
                                    >
                                        {user.status === "BLOCKED" ? "Unblock" : "Block"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-custom custom-btn">Show All</button>
                </div>
            </div>
        </>
    );
}
