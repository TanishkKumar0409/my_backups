import React from 'react'
import ShareFilesTable from '../../../../Components/ShareFilesTable/ShareFilesTable';

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
                    </div>
                </div>
            </div>
        </section>
    );
}
