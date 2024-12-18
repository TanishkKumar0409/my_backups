import React, { useEffect, useState } from 'react';
import { API } from '../../Services/API/API';
import { useLocation } from 'react-router-dom';

export default function ShareFilesTable() {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false); // State to toggle "Show More"
    const location = useLocation();
    const path = location.pathname;

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

    // Determine the entries to display based on the path and showAll state
    const displayedData = path === '/' 
        ? data.slice(0, 5) 
        : showAll 
        ? data 
        : data.slice(0, 10);

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
                    {displayedData.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No data available
                            </td>
                        </tr>
                    ) : (
                        displayedData.map((file) => (
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
            {/* Show More button for non-root paths */}
            {path !== '/' && data.length > 10 && !showAll && (
                <div className="text-center mt-3">
                    <button 
                        className="btn custom-btn btn-custom"
                        onClick={() => setShowAll(true)}
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}
