import React from "react";
import "./club-features.scss";
export interface ClubFeaturesProps {
  icon: string;
  title: string;
  paragraph: string;
}
function ClubFeatures(props: ClubFeaturesProps) {
  return (
    <div className="col-md-12 club-features-container ">
      <img className=" " src={props.icon} alt="Scholar" width="100%" />
      <h4>{props.title}</h4>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default ClubFeatures;
