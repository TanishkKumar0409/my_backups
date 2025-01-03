import React, { useEffect, useState } from 'react';
import Footer from "../../../Components/Footer/Footer";
import { useNavigate, useParams } from 'react-router-dom';
import { noFileAPI } from '../../../Services/API/API';
import { toast } from 'react-toastify';

export default function ViewUser() {
    const { username } = useParams();
    const [isBlocked, setIsBlocked] = useState(false)
    const redirector = useNavigate()

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get(`/user/${username}`);
                const userData = response.data;
                setData(userData);
                setIsBlocked(userData.status === "BLOCKED");
            } catch (error) {
                redirector("/");
                console.error(error.response.data.error);
            }
        };
        getData();
    }, [username]);

    const formatStorage = (bytes) => {
        if (!bytes) return "0 MB";
        const gb = bytes / (1024 * 1024 * 1024);
        if (gb >= 1) {
            return `${gb.toFixed(2)} GB`;
        }
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(2)} MB`;
    };

    const handlePromote = async () => {
        try {
            const promoteResponse = await noFileAPI.put(`/user/promote/${data.username}`)
            toast.success(promoteResponse.data.message);
            const response = await noFileAPI.get(`/user/${username}`);
            const userData = response.data;
            setData(userData);
        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error.response.data.error)
        }
    }

    return (
        <>
            <section className="py-5 bgGradient">
                <div className="container bg-light rounded p-5 mt-5">
                    <div className="row">
                        <div className="col-md-6 text-center align-content-center">
                            <img
                                src={`http://localhost:5000/${data.profile}`}
                                className="img-fluid rounded shadow"
                                alt={data.username || "User Profile"}
                            />
                        </div>

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

                                                    {data.role === "ADMIN" ?
                                                        <button className="btn btn-custom custom-btn">
                                                            Demote
                                                        </button>
                                                        :
                                                        <button className="btn btn-custom custom-btn" onClick={handlePromote}>
                                                            Promote
                                                        </button>}
                                                    <button className="btn btn-custom custom-btn" disabled={isBlocked}>
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
