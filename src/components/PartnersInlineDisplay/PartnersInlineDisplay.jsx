import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Apen from "../../assets/images/apen.png";
import Aisa from "../../assets/images/aisa.svg";
import "./partners-inline-display.scss";
export const PartnersInlineDisplay = () => {
  return (
    <>
      {" "}
      <div className="col-md-10 offset-md-1 mt5 partners-container  ">
        {" "}
        <center>
          <h1 className="col-md-">Corporate membership & partners</h1>
        </center>
        <center>
          <div className="mt5 row row-cols-2 row-cols-lg-6">
            {" "}
            <div className="col">
              {" "}
              <img className="aisa" src={Aisa} alt="Scholar" />
            </div>
            <div className="col mt2">
              {" "}
              <img className="ms" src={Microsoft} alt="Scholar" />
            </div>
            <div className="col mt2">
              {" "}
              <img className="flutter" src={Flutterwave} alt="Scholar" />
            </div>
            <div className="col mt2">
              {" "}
              <img className="pay" src={Paystack} alt="Scholar" />
            </div>
            <div className="col">
              {" "}
              <img className="standard" src={Standard} alt="Scholar" />
            </div>
            <div className="col mt3">
              {" "}
              <img className="apen" src={Apen} alt="Scholar" />
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
