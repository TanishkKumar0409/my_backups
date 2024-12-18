import React, { useEffect, useState } from 'react'
import ShareFilesTable from '../../Components/ShareFilesTable/ShareFilesTable';
import Footer from '../../Components/Footer/Footer';

export default function History() {
    const [iconStyles, setIconStyles] = useState([]);

    const generateRandomStyles = () => {
        const styles = Array.from({ length: 9 }, (_, index) => ({
            "--end-left": `${Math.floor(Math.random() * 100) - index * 10}%`,
            "--start-top": `${Math.floor(Math.random() * 100) - index * 10}%`,
            "--start-left": `${Math.floor(Math.random() * 100) - index * 10}%`,
            "--end-top": `${Math.floor(Math.random() * 100) - index * 10}%`,
        }));
        setIconStyles(styles);
    };

    useEffect(() => {
        generateRandomStyles();
        const interval = setInterval(() => {
            generateRandomStyles();
        }, 45000);
        return () => clearInterval(interval);
    }, []);

    const iconsArray = [
        "file-audio",
        "file-image",
        "file-video",
        "folder-open",
        "folder-shared",
        "share-alt",
        "cloud-download-alt",
        "link",
        "edit",
    ];

    return (
        <>
            <section
                className="bgGradient py-5 overflow-hidden position-relative align-content-center"
                style={{ zIndex: "0", minHeight: "100vh" }}
            >
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center text-light historyBanner">
                            <h2><i className="fa-solid fa-share-from-square"></i></h2>
                            <h3>Shared History</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas voluptatum delectus dignissimos dolorem velit placeat non ipsa quos dicta, beatae fugiat inventore modi consequuntur asperiores. Beatae porro nam harum.</p>
                        </div>
                    </div>

                    <div className="AnimatedIcons position-absolute top-0 start-0 w-100 h-100 pe-none">
                        {iconsArray.map((icon, index) => (
                            <i
                                key={icon}
                                className={`position-absolute fa-solid fa-${icon} ${index % 2 === 0 ? "d-md-block d-none" : ""
                                    }`}
                                style={iconStyles[index]}
                            ></i>
                        ))}
                    </div>
                </div>
            </section>
            <section className='py-5 bg-light'>
                <div className='container'>
                    <ShareFilesTable />
                </div>
            </section>
            <Footer />
        </>
    )
}
