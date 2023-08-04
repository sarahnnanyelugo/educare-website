import React from "react";
import "./simple-prices.scss";
import { Link } from "react-router-dom";
const myClassName = "my-class-name";
const props = {
  className: myClassName,
};
export interface SimplePricesProps {
  annualAmount: string;
  paragraph: string;
  icon: string;
  package: string;
  amount: string;
  url: string;
  currency: string;
  cls: string;
  btnBg: string;
}
function SimplePrices(props: SimplePricesProps, active: any) {
  const { btnBg } = props;
  return (
    <>
      <div className={`col-md-12 simple-prices ${props.cls}`}>
        <h3>{props.package}</h3>
        <div style={{ height: "135px" }}>
          <h2 className="price-tag">
            {" "}
            <span>{props.currency}</span>
            {props.amount}
          </h2>
          <p>{props.paragraph}</p>
          <p>
            <strong>{props.currency}</strong>
            {props.annualAmount}
          </p>
        </div>
        <Link to={"/login"}>
          {" "}
          <button style={{ backgroundColor: btnBg }}>Get Start</button>
        </Link>
      </div>
    </>
  );
}

export default SimplePrices;
