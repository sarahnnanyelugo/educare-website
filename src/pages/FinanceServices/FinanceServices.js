import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./finance-services.scss";
import Img from "../../assets/images/fs-dashboard.png";

function FinanceServices() {
  return (
    <>
      <div className="col-md-12 fs-container ">
        <center>
          <div className="col-md-5">
            <small>Financial Services</small>
            <h1>Streamline, Analyze, and Enhance Financial Management</h1>
            <p className="col-md-10">
              Transform financial services with our comprehensive module.
              Empower individuals and businesses with cutting-edge tools,
              revolutionize financial management, reporting, and communication.
              Streamline processes, generate accurate reports and deliver
              exceptional client experiences with our intuitive interface and
              robust features.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmrep"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
        </center>
      </div>
      <div className="col-md-12  flexy finance-div">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-4 mt">
          <h1>Insightful Reporting and Analysis</h1>
          <p className="col-md-11">
            Generate detailed financial reports, balance sheets, and income
            statements with our powerful Reporting feature. Leverage our
            advanced analytics capabilities to gain valuable insights into
            financial performance, track key metrics, and identify areas for
            improvement. Make data-driven decisions and provide clients with
            accurate and meaningful financial information.
          </p>
        </div>
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-4 mt">
          <h1>Effortless Calendar Management</h1>
          <p className="col-md-11">
            Stay organized and never miss important financial deadlines. Our
            intuitive Calendar feature allows you to schedule financial planning
            meetings, tax deadlines, and payment reminders. Ensure timely
            compliance and assist clients in staying on top of their financial
            obligations.
          </p>
        </div>
      </div>
      <div className="col-md-12 eficient-finance-div">
        <center>
          <div className="col-md-4 fin-manage">
            <h2>Efficient Financial Management</h2>
            <p className="col-md-">
              Easily take charge of your finances. We offer complete financial
              management tools, budgeting options, and cost tracking features in
              our Financial Services module. Give your clients the tools they
              need to properly manage their personal or corporate money, keep an
              eye on their spending, and reach their financial objectives.
            </p>
          </div>
          <div className="col-md-8">
            {" "}
            <img className=" " src={Img} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy fin-divs">
        <div className="col-md-5 mt">
          <h1 className="col-md-10">Secure Client Communication</h1>
          <p>
            Facilitate secure communication between financial advisors and
            clients with our integrated Mailbox feature. Enable confidential and
            encrypted messaging to maintain privacy and build trust. Strengthen
            client relationships by providing a secure channel for sharing
            sensitive financial information and receiving personalized advice.
          </p>
        </div>
        <div className="col-md-5 offset-md-2 mt">
          <h1>Valuable Advisor Insights</h1>
          <p>
            Empower financial advisors to provide valuable insights and
            recommendations to clients through our Weekly Remarks feature.
            Advisors can share expert opinions, market updates, and personalized
            recommendations to guide clients in making informed financial
            decisions. Enhance client engagement and loyalty through regular and
            meaningful communication
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Join the community of successful financial service providers who
            rely on our platform to automate workflows, produce precise
            financial data, and offer first-rate customer experiences in the
            market of today.
          </p>
        </div>
        <div className="offset-md-2 mt3">
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
    </>
  );
}

export default FinanceServices;
