import React from "react";
import Cards from "../BaseComponents/Cards";
import Modals from "../BaseComponents/Modals";

export default function Projects(props) {
  return (
    <>
      <section
        id="projects"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <Cards
                darkTheme={props.darkTheme}
                CompanyName={"Orgaawe"}
                title={
                  " A project focusing on organic food and eco-friendly products."
                }
                Image={"/Images/Logo/Orgaawe.png"}
                ModalTarget={"#orgaaweModal"}
              />
            </div>

            <Modals
              darkTheme={props.darkTheme}
              ModalTarget={"orgaaweModal"}
              ModalHead={"Orgaawe Project Details"}
              Image={"/Images/Projects/OrgaaweBanner.jpg"}
              ModalInfo={
                "OrgAawe is an innovative platform dedicated to blogging and content marketing, focusing on organic products, organic lifestyles, and nutrition, providing valuable insights and information for a healthier, eco-friendly lifestyle."
              }
              ModalTech={"Technologies used: HTML, CSS, JavaScript, PHP"}
              ModalLink={"https://orgaawe.com"}
            />

            <div className="col-md-3">
              <Cards
                darkTheme={props.darkTheme}
                CompanyName={"Macs Concepts"}
                title={"A corporate branding and design consultancy website."}
                Image={"/Images/Logo/Macs.png"}
                ModalTarget={"#macsconceptsModal"}
              />
            </div>

            <Modals
              darkTheme={props.darkTheme}
              ModalTarget={"macsconceptsModal"}
              ModalHead={"Macs Concepts Project Details"}
              Image={"/Images/Projects/MacsBanner.jpg"}
              ModalInfo={
                "Macs Concepts is a cutting-edge digital marketing website designed to elevate brands through strategic online presence, offering expert solutions in SEO, content marketing, and social media management to drive growth and engagement."
              }
              ModalTech={"Technologies used: HTML, CSS, JavaScript."}
              ModalLink={"https://macsconcepts.in"}
            />

            <div className="col-md-3">
              <Cards
                darkTheme={props.darkTheme}
                CompanyName={"Back to Basics"}
                title={
                  "A lifestyle brand focused on simplicity and minimalism."
                }
                Image={"/Images/Logo/B2B.png"}
                ModalTarget={"#backtobasicsModal"}
              />
            </div>

            <Modals
              darkTheme={props.darkTheme}
              ModalTarget={"backtobasicsModal"}
              ModalHead={" Back to Basics Project Details"}
              Image={"/Images/Projects/B2BBanner.jpg"}
              ModalInfo={
                "Back to Basics is a dynamic platform for organizing outdoor and indoor events designed for businesses, colleges, and schools. The website offers a streamlined experience for planning and monitoring interesting events and activities that promote teamwork and educational enrichment.''Back to Basics is a dynamic platform for organizing outdoor and indoor events designed for businesses, colleges, and schools. The website offers a streamlined experience for planning and monitoring interesting events and activities that promote teamwork and educational enrichment."
              }
              ModalTech={"Technologies used: HTML, CSS, JavaScript."}
              ModalLink={"https://thebacktobasics.com"}
            />

            <div className="col-md-3">
              <Cards
                darkTheme={props.darkTheme}
                CompanyName={"Offbeat Pixels"}
                title={
                  "A creative design studio specializing in web development."
                }
                Image={"/Images/Logo/Offbeat.png"}
                ModalTarget={"#offbeatpixelsModal"}
              />
            </div>

            <Modals
              darkTheme={props.darkTheme}
              ModalTarget={"offbeatpixelsModal"}
              ModalHead={"Offbeat Pixels Project Details"}
              Image={"/Images/Projects/offbeatBanner.jpg"}
              ModalInfo={
                "Offbeat Pixels is a digital marketing and creative content agency that specializes in new methods and engaging solutions. Their expertise includes branding, content production, and digital campaigns, allowing businesses to stand out and effectively engage with their audience."
              }
              ModalTech={"Technologies used: HTML, CSS, JavaScript, PHP."}
              ModalLink={"https://offbeatpixels.com"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
