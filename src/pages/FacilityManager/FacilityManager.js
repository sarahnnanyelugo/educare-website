import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./facility-manager.scss";
import Fac1 from "../../assets/images/fac1.svg";
import Fac2 from "../../assets/images/fac2.svg";
import Fac3 from "../../assets/images/facility_dash1.png";
import Fac4 from "../../assets/images/fac4.png";
// import Fac4 from "../../assets/images/fac-img2.png";
import Fac5 from "../../assets/images/fac-img3.png";
import Fac6 from "../../assets/images/fac-img4.png";
import Player1 from "../../assets/images/settings-lottie.json";
import Lottie from "react-lottie-player";
import Tick from "../../assets/images/fac-tick.png";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function FacilityManager() {
  return (
    <>
      <div className="col-md-12 facility-nav-div col-12">
        {" "}
        <NavTwo
          title="Facility Management"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />

      <div className="facility-div col-md-12">
        <div className="col-md-11 offset-md-1 flexy">
          <div className="col-md-5 mtt  no-m">
            <h1>Ensure Smooth Operations with Proactive Maintenance</h1>
            <p className="col-md-10 flexy flexyM">
              Gain actionable insights from comprehensive reporting and
              analytics, empowering you to optimize resources, improve
              efficiency, and enhance facility performance
            </p>
            <button className="demo">Request for demo</button>
          </div>
          <div className="col-md-7 formmy-dive flexy">
            <div className="col-md-3 img1">
              {" "}
              <img className="dnM" src={Fac1} alt="Scholar" />
            </div>
            <div className="col-md-6 ">
              <Form
                bg="#0B2FF7"
                text="Get started"
                body="#fff"
                formHeading="Sign up and onboard your school in seconds"
              />
            </div>
            <div className="col-md-3 img2">
              {" "}
              <img className="dnM" src={Fac2} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>

      <div id="features" />
      <center>
        <h1 className="col-md-5 mt">
          Who says managing your facility has to be tedious?
        </h1>
        <div className="col-md-8 mt7">
          {" "}
          <img className="col-md-12" src={Fac3} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 asset-management mtt">
        <center>
          <h1>Asset Management</h1>
        </center>
        <div className="flexy">
          <div className="col-md-6">
            <div className="col-md-10">
              <h4>Centralized asset database</h4>
              <p>
                A module allows for the creation of a centralized repository to
                manage and track all facility assets, including equipment,
                furniture, and infrastructure.
              </p>
              <h4>Preventive maintenance</h4>
              <p>
                The module enables the scheduling and management of preventive
                maintenance tasks to minimize downtime and extend asset
                lifespan.
              </p>
              <h4>Asset lifecycle management</h4>
              <p>
                It facilitates monitoring asset conditions, tracking maintenance
                schedules, and managing repair and replacement processes.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="col-md-" src={Fac4} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 asset-management2 mtt">
        <center>
          <h1>Maintenance and Repair</h1>
        </center>
        <div className="flexy">
          <div className="col-md-6 mt7">
            {" "}
            <img className="col-md-12" src={Fac5} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-5 offset-md-1 mt4">
            <div className="col-md-10">
              <h4>Work order management</h4>
              <p>
                We help streamline the process of creating, assigning, and
                tracking work orders for maintenance, repairs, or service
                requests.
              </p>
              <h4>Asset maintenance history</h4>
              <p>
                It maintains a detailed record of maintenance activities
                performed on assets, facilitating historical analysis and
                informed decision-making.
              </p>
              <h4>Staff management</h4>
              <p>
                The management of contracts, service agreements, and performance
                tracking to ensure efficient and quality service delivery can be
                enabled on the educare facility management module.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 asset-management mt">
        <center>
          <h1>Reporting and Analytics</h1>
        </center>
        <div className="flexy mt7">
          <div className="col-md-6">
            <div className="col-md-10">
              <h4>Customizable reports</h4>
              <p>
                It allows for generating customizable reports on various
                facility management aspects, such as asset utilization,
                maintenance history, and costs.
              </p>
              <h4>Data-driven decision-making</h4>
              <p>
                The module provides insights and analytics based on facility
                data, supporting data-driven decision-making for optimizing
                resources, reducing costs, and improving operational efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <img className="col-md-12" src={Fac6} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-6 mt">
          <h2>Efficiently Manage Your Facilities with Ease</h2>
          <p>
            We understand how managing facility can be like and that is why we
            are here to cater to all your facility management needs without
            worry
          </p>
        </div>
      </center>
      <div className="col-md-8 offset-md-2 flexy fac-settings mt7">
        <div className="col-md-4">
          {" "}
          <Lottie loop animationData={Player1} play className="lottieee" />
        </div>
        <div className="offset-md-2 col-md-6">
          <ul className="list-unstyled mt4">
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Efficient operations and streamlined processes
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Cost savings through optimized resource allocation
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Increased productivity and employee satisfaction
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Ensures regulatory compliance
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Data-driven decision-making and insights
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col-md-12 admin-simple-prices " id="pricing">
        {" "}
        <center>
          <h1 className=" ">Our simple prices made for you </h1>
        </center>
        <div className=" col-md-12 mt8">
          {" "}
          <div className="col-md-10 offset-md-1 flexy mb5 mt5">
            <div className="col-md-3 " style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Basic"
                  amount="100.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="75 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3 recommended-container ">
              <div
                className="offset-md-4 offset-5"
                style={{ marginBottom: "-50px" }}
              >
                <Heading
                  bg="#FCEBD7"
                  color="#BB6C0F"
                  boda="solid 1px #FCEBD7"
                  text="Recommended"
                />
              </div>
              <div className="col-md-11 mt3">
                <SimplePrices
                  package="e-learning"
                  amount="200.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="150 billed annually"
                  url={""}
                  currency="₦"
                  active="active-button "
                  cls="recommendedCal"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Premium"
                  amount="500.00"
                  paragraph="Per Student (Monthly)"
                  annualAmount="450 billed annually"
                  url={""}
                  currency="₦"
                  btnBg="#0098DA"
                />
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: "-20px" }}>
              <div className="col-md-11 ">
                <SimplePrices
                  package="Enterprise"
                  amount="Contact Us"
                  paragraph=""
                  btnBg="#0098DA"
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
        </center>
      </div> */}
      <center>
        <div className="col-md-5 admin-process">
          <h3>
            Streamline Your Admission Process with educare admissions today!
          </h3>
          <center>
            <GetStartedForm
              text=" Get started"
              bg="#0B2FF7"
              cls="gsmmed"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <button className="demo">Request for demo</button>
          </center>
        </div>
      </center>
    </>
  );
}

export default FacilityManager;
