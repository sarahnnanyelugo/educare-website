import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
import Apen from "../../assets/images/apen.png";

import "./partners.scss";
export const Partners = () => {
  return (
    <>
      {" "}
      <div className="col-md-11 offset-md-1 mt5 partners-container flexy">
        <h1 className="col-md- flexy">
          Corporate membership
          <br /> & partners
        </h1>
        <div className="mt5 offset-md-1 col-md-">
          {" "}
          <img className="aisa" src={Aisa} alt="Scholar" />
          <img className="ms" src={Microsoft} alt="Scholar" />
          <img className="flutter" src={Flutterwave} alt="Scholar" />
          <br />
          <img className="pay" src={Paystack} alt="Scholar" />
          <img className="standard" src={Standard} alt="Scholar" />
          <img className="apen" src={Apen} alt="Scholar" />
        </div>
      </div>
    </>
  );
};
