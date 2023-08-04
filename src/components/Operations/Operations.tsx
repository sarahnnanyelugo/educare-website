import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./operations.scss";
export interface OperationsProp {
  title: string;
  icon: string;
  url: string;
  size: string;
}
function Operations(props: OperationsProp) {
  const { size } = props;
  return (
    <>
      {" "}
      <div className="col-md-12 operations">
        <Link to={""} className="features-link ">
          {" "}
          <div className="operations-boxes" style={{ width: size }}>
            {" "}
            <center>
              {" "}
              <img className="" src={props.icon} alt="Scholar" width="100%" />
              <p>{props.title}</p>
            </center>
          </div>{" "}
        </Link>
      </div>
    </>
  );
}

export default Operations;
