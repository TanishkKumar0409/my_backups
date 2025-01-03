import React, { useEffect, useState } from 'react';
import Footer from "../../../Components/Footer/Footer";
import { useParams } from 'react-router-dom';
import { noFileAPI } from '../../../Services/API/API';

export default function ViewUser() {
    const { username } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await noFileAPI.get(`/user/${username}`);
            setData(response.data);
        };
        getData();
    }, [username]);

    // Utility function to convert bytes to GB or MB
    const formatStorage = (bytes) => {
        if (!bytes) return "0 MB"; // Default value if undefined or null
        const gb = bytes / (1024 * 1024 * 1024);
        if (gb >= 1) {
            return `${gb.toFixed(2)} GB`;
        }
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(2)} MB`;
    };

    return (
        <>
            <section className="py-5 bgGradient">
                <div className="container bg-light rounded p-5 mt-5">
                    <div className="row">
                        {/* Profile Image Section */}
                        <div className="col-md-6 text-center align-content-center">
                            <img
                                src={`http://localhost:5000/${data.profile}`}
                                className="img-fluid rounded shadow"
                                alt={data.username || "User Profile"}
                            />
                        </div>

                        {/* User Details Table */}
                        <div className="col-md-6 align-content-center">
                            <h3 className="mb-4">{data.username || "User Details"}</h3>
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{data.name || "N/A"}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{data.email || "N/A"}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact</th>
                                            <td>{data.contact || "N/A"}</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>{data.role || "N/A"}</td>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{data.status || "N/A"}</td>
                                        </tr>
                                        <tr>
                                            <th>Used Storage</th>
                                            <td>{formatStorage(data.usedStorage)}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Storage</th>
                                            <td>{formatStorage(data.totalStorage)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={`2`} className='text-center'>
                                                <div className="btn-group w-100">
                                                    <button className="btn btn-custom custom-btn">
                                                        Promote
                                                    </button>
                                                    <button className="btn btn-custom custom-btn">
                                                        Block
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
