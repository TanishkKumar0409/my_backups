import React, { useEffect, useState } from 'react';
import { noFileAPI } from '../../../Services/API/API';
import { toast } from 'react-toastify';

export default function Query() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get("/user/contact/query");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    const handleQueryDelete = async (id) => {
        try {
            const isDeleted = await noFileAPI.delete(`/user/contact/query/${id}`);
            const response = await noFileAPI.get("/user/contact/query");
            setData(response.data);
            toast.success(isDeleted.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    const displayedData = data.slice(0, 5);

    const hasMoreData = data.length > displayedData.length;

    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center fw-bold fs-1">No data available</td>
                            </tr>
                        ) : (
                            displayedData.map((query, index) => (
                                <tr key={index}>
                                    <td className='align-content-center'>{index + 1}</td>
                                    <td className='align-content-center'>{query.name}</td>
                                    <td className='align-content-center'>{query.email}</td>
                                    <td className='align-content-center'>{query.contact}</td>
                                    <td className='align-content-center'>{query.subject}</td>
                                    <td className='align-content-center textJustify'>{query.message}</td>
                                    <td className='align-content-center'>
                                        <button className="btn-custom custom-btn btn text-nowrap btn-sm" onClick={() => handleQueryDelete(query._id)}>
                                            Delete Query
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {hasMoreData && (
                <div className="row">
                    <div className="col text-center">
                        <button className="btn custom-btn btn-custom">Show All</button>
                    </div>
                </div>
            )}
        </>
    );
}
