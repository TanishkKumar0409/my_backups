import React from 'react';
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner';
import FileExplorer from './StorageComponents/FileExplorer';
import Footer from '../../../Components/Footer/Footer';

export default function Storage() {
    const username = JSON.parse(localStorage.getItem("user"));
    
    const BannerData = {
        icon: "hard-drive",
        heading: "Storage",
        para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam reprehenderit odit saepe error esse quaerat sint. Quisquam, tempore aliquid."
    };

    return (
        <>
            <InnerPagesBanner BannerData={BannerData} />
            <FileExplorer username={username} />
            <Footer />
        </>
    );
}
