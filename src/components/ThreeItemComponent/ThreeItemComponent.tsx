import React from "react";
import "./three-item-component.scss";

export interface ThreeItemProps {
  title: string;
  paragraph: string;
  icon: string;
}
function ThreeItemComponent(props: ThreeItemProps) {
  return (
    <center>
      {" "}
      <div className="col-md-12 three-item-container">
        <img className="" src={props.icon} alt="Scholar" width="100%" />
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>
      </div>
    </center>
  );
}

export default ThreeItemComponent;
