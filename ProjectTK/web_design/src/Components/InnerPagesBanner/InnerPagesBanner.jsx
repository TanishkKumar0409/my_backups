import React, { useEffect, useState } from 'react'

export default function InnerPagesBanner({ BannerData }) {
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
        <><section
            className="bgGradient py-5 overflow-hidden position-relative align-content-center"
            style={{ zIndex: "0", minHeight: "100vh" }}
        >
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-10 text-center text-light historyBanner">
                        <h2><i className={`fa-solid fa-${BannerData.icon}`}></i></h2>
                        <h3>{BannerData.heading}</h3>
                        <p>{BannerData.para}</p>
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
        </section></>
    )
}
