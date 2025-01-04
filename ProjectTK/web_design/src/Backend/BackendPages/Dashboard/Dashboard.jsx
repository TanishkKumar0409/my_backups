import React from "react";
import InnerPagesBanner from "../../../Components/InnerPagesBanner/InnerPagesBanner";
import Footer from "../../../Components/Footer/Footer";
import UsersTable from "../../BackendComponents/UsersTable/UsersTable";
import AdminTable from "../../BackendComponents/AdminTable/AdminTable";
import Query from "../../BackendComponents/Query/Query";

export default function Dashboard() {
  const BannerData = {
    icon: "database",
    heading: "Backend Dashboard",
    para: "These Pages are made for Only Admins.",
  };

  const sections = [
    {
      id: 1,
      title: "Admins",
      description:
        "Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.",
      component: <AdminTable />,
      bgColor: "bg-light",
    },
    {
      id: 2,
      title: "Users",
      description:
        "Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.",
      component: <UsersTable />,
      bgColor: "bg-white",
    },
    {
      id: 3,
      title: "Contact Us Querys",
      description:
        "Stay updated with the latest documents and resources in the Recent Files section, making it easy to access and manage your most relevant files.",
      component: <Query />,
      bgColor: "bg-light",
    },
  ];

  return (
    <div>
      <InnerPagesBanner BannerData={BannerData} />
      {sections.map((section, index) => (
        <section className={`${section.bgColor} py-5`} key={index}>
          <div className="container">
            <div className="row">
              <h2
                className="text-center mb-4 mainHeading text-uppercase fw-bold"
                style={{ "--text": `'${section.title}'` }}
              >
                {section.title}
              </h2>
              <p className="px-5 text-center">{section.description}</p>
              <div className="col">{section.component}</div>
            </div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
