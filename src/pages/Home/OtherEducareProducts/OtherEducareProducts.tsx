import React from "react";
import "./other-products.scss";
import { Link, NavLink } from "react-router-dom";

export interface OtherProductProps {
  productName: string;
  url: string;
  productIcon: string;
}
export const OtherEducareProducts = (props: OtherProductProps) => {
  return (
    <Link to={props.url} className="features-link">
      {" "}
      <div className="col-md-12 other-products-container">
        <center>
          {" "}
          <img className="" src={props.productIcon} alt="icon" width="100%" />
          <h5>{props.productName}</h5>
        </center>
      </div>
    </Link>
  );
};

export default OtherEducareProducts;
