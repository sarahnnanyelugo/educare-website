import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./facility-manager.scss";
import Fac1 from "../../assets/images/fac1.svg";
import Fac2 from "../../assets/images/fac2.svg";
import Fac3 from "../../assets/images/facility_dash1.png";
import Fac4 from "../../assets/images/fac44.png";
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
            <h1>Ensure Smooth Operations with Proactive Maintenance.</h1>
            <p className="col-md-10 flexy flexyM">
              Embrace the brilliance of our software, as chaos transforms into
              control, and your facilities reach their fullest potential.
              Elevate your spaces, redefine facility management, and experience
              the magic of educare today!
            </p>
            <Link to={"/contact-us"}>
              <button className="demo">Request for demo</button>
            </Link>
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
                formHeading="Sign up and onboard your business in seconds"
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
          Reclaim Facility Management:
          <br /> Effortlessly, Seamlessly, Triumphantly!
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
              <h4>Embrace educare's Asset Management platform!</h4>
              <p>
                With educare's Facility Management platform, asset management
                becomes a transformative experience for both schools and
                businesses. Our platform provides a centralized asset database,
                a comprehensive repository that empowers you to track and manage
                all assets effortlessly.
              </p>
              <h4>Elevate Facility Efficiency with Preventive Maintenance!</h4>
              <p>
                At educare, we believe in proactive care that drives reliability
                and excellence. Our Facility Management platform enables
                preventive maintenance, empowering you to stay ahead of
                potential issues and minimize downtime. Embrace a culture of
                efficiency and consistency, as you nurture assets for peak
                performance and long-term value. .
              </p>
              <h4>
                Beyond Possession, Unlock Value: Embrace Asset Lifecycle
                Management with educare!
              </h4>
              <p>
                Assets have their own journey, and educare's Facility Management
                platform ensures they thrive at every stage. Asset lifecycle
                management facilitates monitoring asset conditions, tracking
                maintenance schedules, and managing repair and replacement
                processes.
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
                educare Facility platform helps streamline the process of
                creating, assigning, and tracking work orders for maintenance,
                repairs, or service reques
              </p>
              <h4>Unveiling Asset Maintenance History</h4>
              <p>
                Informed decisions become the cornerstone of successful facility
                management. With educare, access comprehensive asset maintenance
                history for every possession. Track maintenance schedules, past
                repairs, and service records to ensure optimal performance and
                value retention.
              </p>
              <h4>Embrace Staff Management with educare!</h4>
              <p>
                educare Facility Management platform oversees contracts, service
                agreements, and performance tracking to ensure efficient and
                quality service delivery.
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
                This allows for generating customizable reports on various
                facility management aspects, such as asset utilization,
                maintenance history, and costs.
              </p>
              <h4>Data-driven decision-making</h4>
              <p>
                This platform provides insights and analytics based on facility
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
          <h2>
            Your Facility Management Partner: Embrace a Seamless Journey with
            Us!
          </h2>
          <p>
            Embarking on the complex journey of facility management can be a
            daunting task, fraught with challenges and complexities. However,
            rest assured, for we stand ready as your unwavering ally, catering
            to all your facility management needs with utmost dedication and
            expertise.
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
              Efficient operations and streamlined processes.
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Effective Resource Utilization.
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Enhanced Facility Security.
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Utmost adherence to regulatory compliance.
            </li>{" "}
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Data-driven decision-making and insights.
            </li>
            <li>
              {" "}
              <img className="" src={Tick} alt="Scholar" width="5%" />
              Reliable Support and Training.
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
          <h3>Empowerment Through Expert Facility Management!</h3>
          <center>
            <GetStartedForm
              text=" Get started"
              bg="#0B2FF7"
              cls="gsmmed"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <Link to={"/contact-us"}>
              {" "}
              <button className="demo">Request for demo</button>
            </Link>
          </center>
        </div>
      </center>
    </>
  );
}

export default FacilityManager;
