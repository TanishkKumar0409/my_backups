import React from 'react';


export default function ImageView() {
    return (
        <>
            <img src={`http://localhost:5000/Uploads/Explorer/1735101900914.jpg`} className='rounded-5 mb-3' alt="" />
            <h2 className='text-white fw-bold'>Image Name</h2>
        </>
    )
}
