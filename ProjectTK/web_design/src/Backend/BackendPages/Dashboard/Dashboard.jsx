import React from 'react';
import InnerPagesBanner from '../../../Components/InnerPagesBanner/InnerPagesBanner';
import Footer from '../../../Components/Footer/Footer';
import UsersTable from '../../BackendComponents/UsersTable/UsersTable';
import AdminTable from '../../BackendComponents/AdminTable/AdminTable';
import Query from '../../BackendComponents/Query/Query';

export default function Dashboard() {
    const BannerData = {
        icon: "database",
        heading: "Backend Dashboard",
        para: "These Pages are made for Only Admins. "
    };

    return (
        <div>
            <InnerPagesBanner BannerData={BannerData} />
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Admins'" }}>Admins</h2>
                        <p className="px-5 text-center">
                            Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.
                        </p>
                        <div className="col">
                            <AdminTable />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Users'" }}>Users</h2>
                        <p className="px-5 text-center">
                            Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.
                        </p>
                        <div className="col">
                            <UsersTable />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Contact Us Querys'" }}>Contact Us Querys</h2>
                        <p className="px-5 text-center">
                            Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.
                        </p>
                        <div className="col">
                            <Query />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
