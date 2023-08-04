import React from "react";
import "./educare-products.scss";
import { Link, NavLink } from "react-router-dom";

export interface ProductComponentProps {
  productName: string;
  productDetail: string;
  productIcon: string;
  url: string;
}
export const EducareProducts = (props: ProductComponentProps) => {
  return (
    <>
      <Link to={props.url} className="features-link">
        <div className="col-md-12 educare-products">
          <center>
            <img
              className=""
              src={props.productIcon}
              alt="Scholar"
              width="100%"
            />
            <h3>{props.productName}</h3>
            <p>{props.productDetail}</p>
          </center>
        </div>
      </Link>
    </>
  );
};

export default EducareProducts;
