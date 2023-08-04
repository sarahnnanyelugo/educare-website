import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import HRDashboard from "../../assets/images/hr-page.png";
import HRSimple from "../../assets/images/hr-simple.png";
import { Link } from "react-router-dom";
import People from "../../assets/images/people2.svg";

import "./hrm-page.scss";
import DashboardAccordion from "./DashboardAccordion/DashboardAccordion";
import Prices from "../../components/Prices/Prices";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Prefooter } from "../../components/Prefooter/Prefooter";

export const HRMPage = () => {
  return (
    <>
      <div className="col-md-12 hrm-nav col-12 ">
        {" "}
        <NavTwo
          title="HR Manager"
          headerIcon={People}
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-12  hr-manager-container">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt9">
            {" "}
            <Heading
              bg="#FCEBD7"
              color="#EA8713"
              text="Introducing HR Manager"
              boda="#FCEBD7"
            />
            <h1>
              Empower, Engage, Excel: Harness the Power of Educare HRM Today!
            </h1>
            <p className="col-md-9">
              Step into the future of HR management with Educare HRM, the
              ultimate all-in-one solution that covers every aspect from "Hire"
              to "Retire" for your business's most crucial asset – your
              employees. Leave behind outdated, time-consuming processes and
              embrace the power of efficiency and effectiveness with Educare HRM
            </p>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="col-md-12">
              {" "}
              <Form
                bg="#EA8713"
                text="Get started"
                body="#fff"
                formHeading="Sign up and deploy your business in seconds"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 hr-dashboard" id="features">
        {" "}
        <center>
          {" "}
          <div className="col-md-11">
            <img
              className="   logo"
              src={HRDashboard}
              alt="Scholar"
              width="100%"
            />
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1  mt hr-simple">
        {" "}
        <div className="col-md-11 ">
          <div className="flexy">
            <div className="col-md-4">
              <h1>Core HR made simple</h1>
            </div>
            <div className="col-md-6 offset-md-2">
              <p style={{ lineHeight: "30px" }}>
                Embrace the Future of HR: Say Goodbye to Tedious Tasks and
                Welcome Smart Efficiency! Our cutting-edge HR software liberates
                you from the shackles of manual spreadsheets and rigid systems.
                Tailored with precision, our features are designed to simplify
                core HR operations, allowing you to reclaim precious time and
                focus on what truly matters – driving growth and nurturing your
                workforce.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-11 offset-md-1 dashboard-accordion flexy">
        <DashboardAccordion />
      </div>
      <center>
        <div className="col-md-9">
          {" "}
          <img
            className="   mt9 mb5"
            src={HRSimple}
            alt="Scholar"
            width="100%"
          />
        </div>
      </center>
      {/* <div className="pricing-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our HR Manager.
            </p>
          </div>
        </div>
        <div className="offset-md-5 recomend">
          {" "}
          <button>Recommended</button>
        </div>
        <div className="col-md-10 offset-md-1 flexy prices-contain">
          <div className="col-md-3 zoom curve">
            {" "}
            <Prices
              package="Basic"
              amount="400.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Professional"
              amount="600.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Premium"
              amount="800.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom curve2">
            {" "}
            <Prices
              package="Enterprise"
              amount="Contact Us"
              url={""}
              // clss="curve2"
              // btnBg="#ed2f59"
            />
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-business"} className="link">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div> */}
      {/* <center>
        <div className="col-md-6 mtt" style={{ marginBottom: "30px" }}>
          <h1>Get your team working with educare’s HR Manager.</h1>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy  hr-steps ">
        <div className="col-md-4 boda pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Create an account.</h4>
              <p>
                It’s free to start. Tell us about your business and we’ll find
                the best plan for your needs.
              </p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-4 boda pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Add your people.</h4>
              <p>
                Enter your employees into Gusto. They can even self-onboard to
                save you time.
              </p>
            </div>
          </center>
        </div>{" "}
        <div className="col-md-4 pt">
          <center>
            {" "}
            <div className="col-md-8">
              <h4>Run your first payroll.</h4>
              <p>
                Once we have your employee and tax info, you can run payroll in
                just a few clicks.
              </p>
            </div>
          </center>
        </div>
      </div>
      <center>
        {" "}
        <GetStartedForm
          text=" Get started"
          bg="#EA8713"
          cls="gsmhr"
          bgbtn="#EA8713"
          backdropbg="modal-backdrop-dark"
        />
      </center> */}
      <br />
      <br />
      <br />
      <br />
      <Prefooter text="Get started now and experience ease in your workflow." />
    </>
  );
};
