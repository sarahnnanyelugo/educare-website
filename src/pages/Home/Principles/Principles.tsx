import React from "react";
import "./_principles.scss";
import { Link, NavLink } from "react-router-dom";

export interface principleProps {
  heading: string;
  detail: string;
  icon: string;
}
const Principles = (props: principleProps) => {
  return (
    <>
      <div className="col-md-12 principle">
        <img className="" src={props.icon} alt="Scholar" />
        <h4>{props.heading}</h4>
        <p className="col-md">{props.detail}</p>
      </div>
    </>
  );
};

export default Principles;
