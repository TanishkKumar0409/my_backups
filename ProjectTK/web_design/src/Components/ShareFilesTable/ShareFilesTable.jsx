import React, { useEffect, useState } from 'react';
import { API } from '../../Services/API/API';

export default function ShareFilesTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await API.get('/share/history');
                setData(fetchData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped w-100 h-100 text-nowrap align-middle rounded overflow-hidden">
                <thead className="tableHeadCustom">
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Shared Date</th>
                        <th>Shared To</th>
                        <th>File Shared</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tableBodyCustom text-center">
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No data available
                            </td>
                        </tr>
                    ) : (
                        data.map((file) => (
                            <tr key={file.sharingId}>
                                <td>{file.sharingId}</td>
                                <td>{new Date(file.sharedAt).toLocaleDateString()}</td>
                                <td>{file.receiverEmail}</td>
                                <td>{file.fileName.length} Files</td>
                                <td className="text-center">
                                    <button className="btn custom-btn btn-custom overflow-hidden border-0">View</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
