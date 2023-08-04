import React from "react";
import "./_features.scss";
import { Link, NavLink } from "react-router-dom";

export interface featuresProps {
  feature: string;
  detail: string;
  icon: string;
  url: string;
}
export const Features = (props: featuresProps) => {
  return (
    <>
      <div className="col-md-12 features">
        <img className="" src={props.icon} alt="Scholar" />
        <h4>{props.feature}</h4>
        <p>{props.detail}</p>
        <Link to={props.url}>
          {" "}
          <button>Learn more</button>
        </Link>
      </div>
    </>
  );
};

export default Features;
