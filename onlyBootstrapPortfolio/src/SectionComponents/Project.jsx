import React from "react";
import Cards from "../BaseComponents/Cards";
import Modals from "../BaseComponents/Modals";
import projectsDetails from "../data/projectsDetails.json";

export default function Projects(props) {
  return (
    <section
      id="projects"
      className={`py-5 bg-${props.darkTheme} text-${
        props.darkTheme === "dark" ? "light" : "dark"
      }`}
    >
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row g-4">
          {projectsDetails.map((item,index) => (
            <>
              <div className="col-md-3" key={index}>
                <Cards
                  darkTheme={props.darkTheme}
                  CompanyName={item.pName}
                  title={item.pTitle}
                  Image={item.pImage}
                  ModalTarget={item.pTarget}
                />
              </div>
              <Modals
                darkTheme={props.darkTheme}
                ModalTarget={item.mTarget}
                ModalHead={item.mHead}
                ModalInfo={item.mInfo}
                ModalTech={item.mTech}
                ModalLink={item.mLink}
                ModalVideoSrc={item.ModalVideoSrc}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
