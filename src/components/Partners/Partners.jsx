import Standard from "../../assets/images/standard.png";
import Switch from "../../assets/images/switch.png";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
import Apen from "../../assets/images/apen.png";
import Cobis from "../../assets/images/cobis2.jpeg";

import "./partners.scss";
export const Partners = () => {
  return (
    <>
      <center>
        {" "}
        <h1 className="mt">Trusted by leading organisations</h1>
      </center>{" "}
      <div className="col-md-10 offset-md-1  partners-container flexy">
        <center>
          {" "}
          <div className="">
            {" "}
            <img className="aisa" src={Aisa} alt="Scholar" />
            <img className="ms" src={Microsoft} alt="Scholar" />
            <img className="ms" src={Switch} alt="Scholar" />
            <img className="standard-logo" src={Standard} alt="Scholar" />
            <img className="apen" src={Apen} alt="Scholar" />
            <img
              className="aisa"
              src={Cobis}
              alt="Scholar"
              style={{ marginTop: "-3px" }}
            />
          </div>
        </center>
      </div>
    </>
  );
};
