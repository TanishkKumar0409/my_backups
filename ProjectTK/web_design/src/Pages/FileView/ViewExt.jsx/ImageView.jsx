import React from 'react';


export default function ImageView({ data }) {
    return (
        <>
            <img src={`http://localhost:5000/${data.filePath}`} className='rounded-5 mb-3 img-fluid' alt="" />
            <h2 className='text-white fw-bold'>{data.root}</h2>
        </>
    )
}
