import React from 'react'

export default function SharedHistory() {
    const fileData = [
        { id: 1, fileName: 'Image.jpg', sharedTo: 'Prince Parmar', sharedDate: '28-12-2024' },
        { id: 2, fileName: 'Document.pdf', sharedTo: 'John Doe', sharedDate: '15-12-2024' },
        { id: 3, fileName: 'Report.xlsx', sharedTo: 'Jane Smith', sharedDate: '10-12-2024' },
        { id: 4, fileName: 'Presentation.pptx', sharedTo: 'Michael Lee', sharedDate: '05-12-2024' },
        { id: 5, fileName: 'Notes.txt', sharedTo: 'Emily Davis', sharedDate: '01-12-2024' },
    ];

    return (
        <section className='bg-light'>
            <div className="container py-5">
                <div className="row">
                    <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Shared History'" }}>
                        Shared History
                    </h2>
                    <p className="px-5 text-center text-muted">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eveniet tempora, eius cumque necessitatibus nihil.
                    </p>
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-striped w-100 h-100 text-nowrap align-middle rounded overflow-hidden">
                                <thead className='tableHeadCustom'>
                                    <tr className="text-center">
                                        <th>Id</th>
                                        <th>File Name</th>
                                        <th>Shared To</th>
                                        <th>Shared Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='tableBodyCustom'>
                                    {fileData.map((file) => (
                                        <tr key={file.id}>
                                            <td>{file.id}</td>
                                            <td>{file.fileName}</td>
                                            <td>{file.sharedTo}</td>
                                            <td>{file.sharedDate}</td>
                                            <td className="text-center">
                                                <button className="btn custom-btn btn-custom overflow-hidden border-0">View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
