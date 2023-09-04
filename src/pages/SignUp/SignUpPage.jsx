import React from "react";
import Logo from "../../assets/images/logo2.png";
import { Link, NavLink } from "react-router-dom";
import "./sign-up-page.scss";
import SignUpForm from "./SignUpForm/SignUpForm";
import {AxiosService} from "../../core/axios-service";

function SignUpPage() {
  // AxiosService.unsetBilling();
  return (
    <>
      <div className="login-container col-md-12 container-fluid">
        <div className="container flexy">
          {" "}
          <div className="col-md-2" style={{ flexGrow: 1 }}>
            {" "}
            <Link to={"/"}>
              {" "}
              <img className="   logo" src={Logo} alt="Scholar" width="20%" />
            </Link>
          </div>
          <p>
            Already have an educare Account?{" "}
            <a href={process.env.REACT_APP_CPANEL_URL} className="login">
              LOG IN
            </a>
          </p>
        </div>
        <div className="col-md-4 offset-md-4">
          <div className="col-md-9 form-holder">
            {" "}
            <SignUpForm />
          </div>
        </div>
        <center>
          <p>© 2023, educare technologies Ltd. All Rights Reserved.</p>
        </center>
      </div>
    </>
  );
}

export default SignUpPage;
