import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageView from './ViewExt.jsx/ImageView';
import Footer from '../../Components/Footer/Footer';
import VideoView from './ViewExt.jsx/VideoView';
import { noFileAPI } from '../../Services/API/API';

export default function FileView() {
    const username = JSON.parse(localStorage.getItem("user"))
    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get(`/storage/file/single?username=${username}&folderId=${id}`);
                setData(response.data.file);
            } catch (error) {
                console.error(error.response.data.error);
            }
        };
        getData()
    }, [id, username])

    const fileName = data.root;

    const getFileType = (file) => {
        const extension = file.split('.').pop().toLowerCase();
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
        const videoExtensions = ['mp4', 'mov', 'avi', 'webm', "mkv"];

        if (imageExtensions.includes(extension)) return 'image';
        if (videoExtensions.includes(extension)) return 'video';
        return 'unknown';
    };

    const fileType = fileName ? getFileType(fileName) : 'unknown';

    return (
        <>
            <section className='bgGradient py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-md-5 pt-5">
                            {fileType === 'image' && <ImageView data={data} />}
                            {fileType === 'video' && <VideoView data={data} />}
                            {fileType === 'unknown' && <p>Unsupported file type</p>}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
