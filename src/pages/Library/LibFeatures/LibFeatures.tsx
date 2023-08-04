import React from "react";
import "./lib-features.scss";
export interface LibFeaturesProps {
  icon: string;
  title: string;
  paragraph: string;
  subtitle: string | null;
}
function LibFeatures(props: LibFeaturesProps) {
  return (
    <div className="col-md-12 lib-features-container">
      <center>
        <img className=" " src={props.icon} alt="Scholar" width="100%" />
        <h5>{props.title}</h5>
        <h6>{props.subtitle}</h6>
        <p>{props.paragraph}</p>
      </center>
    </div>
  );
}

export default LibFeatures;
