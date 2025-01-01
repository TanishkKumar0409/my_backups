import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner';
import Footer from '../../../Components/Footer/Footer';
import AdminTable from '../../BackendComponents/AdminTable/AdminTable';
import UsersTable from '../../BackendComponents/UsersTable/UsersTable';
import Query from '../../BackendComponents/Query/Query';

export default function Admin() {
    const { type } = useParams();
    const navigate = useNavigate();

    const content = useMemo(() => ({
        info: {
            icon: "user-secret",
            heading: "Admin Informations",
            para: "Information of All The Admins.",
            mainHeading: "Admins",
        },
        user: {
            icon: "user-tie",
            heading: "Users Informations",
            para: "Information of All The Users.",
            mainHeading: "Users",
        },
        query: {
            icon: "user-pen",
            heading: "Queries Information",
            para: "Information of All the Queries.",
            mainHeading: "Queries",
        },
    }), []);

    const pageData = content[type] || {};

    useEffect(() => {
        if (!content[type]) navigate("/");
    }, [type, navigate, content]);

    const TableComponent =
        type === "info" ? AdminTable :
            type === "user" ? UsersTable :
                type === "query" ? Query : null;

    return (
        <div>
            {pageData.icon && (
                <>
                    <InnerPagesBanner BannerData={pageData} />
                    <section className="bg-light py-5">
                        <div className="container">
                            <div className="row">
                                <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": `'${pageData.mainHeading}` }}>{pageData.mainHeading}</h2>
                                <p className="px-5 text-center">{pageData.para}</p>
                                <div className="col">{TableComponent && <TableComponent />}</div>
                            </div>
                        </div>
                    </section>
                </>
            )}
            <Footer />
        </div>
    );
}
