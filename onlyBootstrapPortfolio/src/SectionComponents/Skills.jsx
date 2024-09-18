import React from "react";
import ListGroup from "../BaseComponents/ListGroup";

export default function Skills(props) {
  return (
    <>
      <section id="skills" className={`py-5 bg-${props.SecondaryTheme}`}>
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-6 mt-4">
              <ListGroup
                values={[
                  { name: "HTML" },
                  { name: "CSS" },
                  { name: "SCSS" },
                  { name: "Bootstrap" },
                  { name: "Tailwind CSS" },
                ]}
                darkTheme={props.darkTheme}
              />
            </div>
            <div className="col-md-6 mt-4">
              <ListGroup
                values={[
                  { name: "PHP" },
                  { name: "MYSQL" },
                  { name: "Java" },
                  { name: "Figma" },
                  { name: "Git, GitHub" },
                ]}
                darkTheme={props.darkTheme}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
