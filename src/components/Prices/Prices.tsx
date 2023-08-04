import React from "react";
import "./prices.scss";
import { Link } from "react-router-dom";
const myClassName = "my-class-name";
const props = {
  className: myClassName,
};
export interface PricesProps {
  clss: any;
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
function Prices(props: PricesProps, active: any) {
  const { btnBg } = props;
  return (
    <div className={`col-md-12 prices ${props.cls}`} id={` ${props.clss}`}>
      <h4>{props.package}</h4>
      <div style={{ height: "135px" }}>
        <h2>
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
  );
}

export default Prices;
