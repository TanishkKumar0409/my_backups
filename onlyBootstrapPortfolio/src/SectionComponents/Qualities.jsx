import React from "react";
import ListGroup from "../BaseComponents/ListGroup";

export default function Qualities(props) {
  return (
    <>
      <section
        id="qualities"
        className={`py-5 bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container">
          <h2 className="text-center mb-4">Qualities</h2>
          <div className="row">
            <div className="col-md-6 mt-4">
              <ListGroup
                values={[
                  { name: "Leadership" },
                  { name: "Team Work" },
                  { name: "Problem Solving" },
                  { name: "Communication" },
                  { name: "Adaptability" },
                ]}
                darkTheme={props.darkTheme}
              />
            </div>
            <div className="col-md-6 mt-4">
              <ListGroup
                values={[
                  { name: "Creativity" },
                  { name: "Time Management" },
                  { name: "Critical Thinking" },
                  { name: "Conflict Resolution" },
                  { name: "Decision Making" },
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
