import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./medicals-page.scss";
import Ambulance from "../../assets/images/ambulance.png";
import Report from "../../assets/images/medical-report.png";
import MedicalTabNav from "./MedicalTab/TabNav";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge/Badge";
import { Heading } from "../../components/Heading/Heading";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function MedicalsPage() {
  return (
    <>
      {" "}
      <div className="col-md-12 medicals-nav col-12">
        {" "}
        <NavTwo title="Medicals" />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-10 offset-md-1 flexy services-container">
        <div className="col-md-5 health-services">
          <div className="heading-container">
            {" "}
            <Heading
              bg="#D6DCFE"
              color="#0B2FF7"
              text="Introducing Medical"
              boda="#D6DCFE"
            />
          </div>
          <h1 style={{ marginTop: "10px" }} className="mt4">
            Health Services with a Difference.
          </h1>
          <p>
            Capturing Health Incidence as well as Reporting and Analytics for
            Tracking Health Trends.
          </p>
          <div className="flexy flexyM ">
            <GetStartedForm
              text=" Get started"
              bg="#0B2FF7"
              cls="gsmmed"
              bgbtn="#0B2FF7"
              backdropbg="modal-backdrop-purple"
            />
            <Link to={"/contact-us"}>
              <button className="demo" style={{ marginLeft: "5px" }}>
                Request for Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 offset-md-1">
          {" "}
          <img className="" src={Ambulance} alt="Scholar" width="100%" />
        </div>
      </div>
      <div id="features" />
      <center>
        <h1>Care, Manage and Report</h1>
      </center>
      <div className="col-md-10 offset-md-1">
        {" "}
        <img className="" src={Report} alt="Scholar" width="100%" />
      </div>
      <div className="col-md-12 grad">
        {" "}
        <div className="col-md-11 offset-md-1">
          <MedicalTabNav />
        </div>
      </div>
      {/* <center>
        <h1 className="mtt mb5" id="pricing">
          Our simple prices made for you{" "}
        </h1>
      </center> */}
      {/* <div className="grad col-md-12">
        {" "}
        <div className="col-md-10 offset-md-1 flexy mb5 mt5">
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Basic"
                amount="100.00"
                paragraph="Per Student (Monthly)"
                annualAmount="75 billed annually"
                url={""}
                currency="₦"
                btnBg="#0B2FF7"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div className="offset-md-4 offset-5    heading-adj">
              <Heading
                bg="#D6DCFE"
                color="#0B2FF7"
                boda="solid 1px #D6DCFE"
                text="Recommended"
              />
            </div>
            <div className="col-md-11">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommended2"
                btnBg="#0B2FF7"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#0B2FF7"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#0B2FF7"
                annualAmount=""
                url={""}
              />
            </div>
          </div>
        </div>
      </div>
      <center>
        <p>
          Kindly check out our{" "}
          <Link to={"/educare-packages"} className="link">
            Pricing page
          </Link>
          {""} for complete details
        </p>
      </center> */}
      <div className="col-md-10 offset-md-1 tools-management">
        <center>
          <div className="col-md-8">
            <h2>We’ve got the tools you need</h2>
            <p>
              With educare's Medical platform, you unlock a world of
              possibilities, where well-organized workflows streamline clinic
              operations, ensuring efficient health management
            </p>
          </div>

          <Link to={"/login"}>
            {" "}
            <button>Sign up today</button>
          </Link>
        </center>
      </div>
    </>
  );
}

export default MedicalsPage;
