import React from "react";

export default function Stats(props) {
  const courseStats = props.courseStats;

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4 justify-content-center">
          {Object.entries(courseStats).map(([course, { count, icon }]) => (
            <div key={course} className="col-sm-6 col-xl-3">
              <div className="bg-sec-custom rounded d-flex align-items-center justify-content-between p-4">
                <i className={`fa fa-${icon} text-red fa-3x`}></i>
                <div className="ms-3">
                  <h4 className="mb-2 text-end">{course}</h4>
                  <h5 className="mb-0 text-end">{count} Students</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
