import React from 'react'
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner';
import Footer from '../../../Components/Footer/Footer';
import AdminTable from '../../BackendComponents/AdminTable/AdminTable';
import { useParams } from 'react-router-dom';
import UsersTable from '../../BackendComponents/UsersTable/UsersTable';

export default function Admin() {
    const { type } = useParams();
    const BannerData = {
        icon: type === "info" ? "user-tie" : "user",
        heading: type === "info" ? "Admin Informations" : "Users Informations",
        para: type === "info" ? "Information of All The Admins." : "Information of All The Users."
    };

    const headings = {
        mainHeading: type === "info" ? "Admins" : "Users",
        title: "Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files."
    }

    return (
        <div>
            <InnerPagesBanner BannerData={BannerData} />
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": `'${headings.mainHeading}'` }}>{headings.mainHeading}</h2>
                        <p className="px-5 text-center">
                            Information of All The {headings.title}
                        </p>
                        <div className="col">
                            {type === "info" ?
                                <AdminTable /> : <UsersTable />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
