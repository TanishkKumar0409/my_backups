import React from 'react'
import ShareFilesTable from '../../../../Components/ShareFilesTable/ShareFilesTable';
import { Link } from 'react-router-dom';

export default function SharedHistory() {
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
                        <ShareFilesTable />
                        <div className='text-center mt-3'>
                            <Link to={"/main/history"} className='btn btn-custom custom-btn'>Show All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
