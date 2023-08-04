import React from "react";
import "./timetable-features.scss";
export interface TimetableFeaturesProps {
  icon: string;
  title: string;
  paragraph: string;
}
function TimetableFeatures(props: TimetableFeaturesProps) {
  return (
    <div className="col-md-12 timetable-features-container ">
      <img className=" " src={props.icon} alt="Scholar" width="100%" />
      <h4>{props.title}</h4>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default TimetableFeatures;
