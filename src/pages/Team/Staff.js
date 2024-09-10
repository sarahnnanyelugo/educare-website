import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/images/staff/twi.png";
import Img2 from "../../assets/images/staff/lin.png";
export const Staff = ({ data }) => {
  return (
    <div className="col ">
      <div className="staff-info">
        <img src={data.img} className="dp" />
        <h4>{data.name}</h4>
        <p className="col-md-8">{data.title}</p>
        <Link to={data.twitter} target="_blank">
          <img src={Img} height="28px" />
        </Link>
        <Link to={data.linkedin} target="_blank">
          <img src={Img2} height="28px" style={{ marginLeft: "10px" }} />
        </Link>
      </div>
    </div>
  );
};
