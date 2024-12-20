import React from 'react'
import ShareFilesTable from '../../Components/ShareFilesTable/ShareFilesTable';
import Footer from '../../Components/Footer/Footer';
import InnerPagesBanner from '../../Components/InnerPagesBanner/InnerPagesBanner';

export default function History() {
    const BannerData = {
        icon: "share-from-square",
        heading: "Shared History",
        para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam reprehenderit odit saepe error esse quaerat sint. Quisquam, tempore aliquid."
    }

    return (
        <>
            <InnerPagesBanner BannerData={BannerData} />
            <section className='py-5 bg-light'>
                <div className='container'>
                    <ShareFilesTable />
                </div>

            </section>
            <Footer />
        </>
    )
}
