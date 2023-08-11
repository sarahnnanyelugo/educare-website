import React from "react";
import "./efficiency.scss";
export interface EfficiencyProps {
  title: string;
  paragraph: string;
  icon: string;
}
function Efficiency(props: EfficiencyProps) {
  return (
    <div className="col-md-12 efficiency-container">
      <img className="" src={props.icon} alt="Scholar" width="100%" />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Efficiency;
