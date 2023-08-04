import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./jobs.scss";
function Jobs({ data }) {
  const { jobTitle, jobDuration, jobDescription, jobLink, color } = data;
  return (
    <>
      <div className="col ">
        {" "}
        <div className="job-container col-md-12">
          <div className="flexy">
            <h4>{jobTitle}</h4>
            <p style={{ color: color }}>{jobDuration}</p>
            <Link className="view-job" to={jobLink}>
              View job
            </Link>
          </div>
          <p>{jobDescription}</p>
        </div>
      </div>
    </>
  );
}

export default Jobs;
