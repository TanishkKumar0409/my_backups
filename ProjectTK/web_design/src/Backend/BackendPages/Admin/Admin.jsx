import React, { useEffect } from 'react'
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner';
import Footer from '../../../Components/Footer/Footer';
import AdminTable from '../../BackendComponents/AdminTable/AdminTable';
import { useNavigate, useParams } from 'react-router-dom';
import UsersTable from '../../BackendComponents/UsersTable/UsersTable';
import Query from '../../BackendComponents/Query/Query';

export default function Admin() {
    const { type } = useParams();
    const redirector = useNavigate();

    const BannerData = {
        icon: type === "info" ? "user-tie" : "user",
        heading: type === "info" ? "Admin Informations" : type === "user" ? "Users Informations" : "Queries Information",
        para: type === "info" ? "Information of All The Admins." : type === "user" ? "Information of All The Users." : "Information of All the Queries."
    };

    const headings = {
        mainHeading: type === "info" ? "Admins" : type === "user" ? "Users" : "Queries",
        title: "Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files."
    }

    useEffect(() => {
        const validTypes = ["info", "user", "query"];
        if (!validTypes.includes(type)) {
            redirector("/")
        }
    }, [])

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
                                <AdminTable /> : type === "user" ? <UsersTable /> : <Query />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
