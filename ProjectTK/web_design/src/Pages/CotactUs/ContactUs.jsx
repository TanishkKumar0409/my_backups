import React from 'react';
import InnerPagesBanner from '../../Components/InnerPagesBanner/InnerPagesBanner';
import Footer from '../../Components/Footer/Footer';

import ContactCards from './ContactComponents/ContactCards';

export default function ContactUs() {
    const BannerData = {
        icon: "blender-phone",
        heading: "Contact Us",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam reprehenderit odit saepe error esse quaerat sint. Quisquam, tempore aliquid."
    };



    return (
        <>
            <InnerPagesBanner BannerData={BannerData} />
            <ContactCards />
            <Footer />
        </>
    );
}
