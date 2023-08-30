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
            <h1>Financial Services</h1>

            <p className="col-md-10">
              educare has gained the trust of financial institutions. Thousands
              of these establishments depend on educare ERP daily in
              streamlining their operations, enhancing efficiency and in
              delivering exceptional customer service. To Financial services
              around the world, educare is tested and trusted.
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
            With educare insightful reports module, financial services are able
            to generate detailed financial reports, balance sheets, and income
            statements. They leverage our advanced analytics capabilities to
            gain valuable insights into financial performance, track key
            metrics, and identify areas for improvement. Moreso, they make
            data-driven decisions and provide clients with accurate and
            meaningful financial information.
          </p>
        </div>
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-4 mt">
          <h1>Effortless Calendar Management</h1>
          <p className="col-md-11">
            educare calendar module has successfully ensured that financial
            services stay organized and never miss important financial
            deadlines. Our intuitive Calendar feature allows them to schedule
            financial planning, meetings, tax deadlines, and payment reminders.
            In addition, it dutifully ensures timely compliance and assist
            clients in staying on top of their financial obligations.
          </p>
        </div>
      </div>
      <div className="col-md-12 eficient-finance-div">
        <center>
          <div className="col-md-4 fin-manage">
            <h2>Efficient Financial Management</h2>
            <p className="col-md-">
              At educare, we have empowered financial services to easily take
              charge of their finances by offering them complete financial
              management tools, budgeting options, and cost tracking features
              using our Finance module. Financial services around the world
              trust in educare operational tools.
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
            We have facilitated secure communication between financial advisors
            and clients with our integrated Mailbox feature. This has enabled
            confidential and encrypted messaging to maintain privacy and build
            trust, and has strengthened client relationships by providing a
            secure channel for sharing sensitive financial information and
            receiving personalized advice.
          </p>
        </div>
        <div className="col-md-5 offset-md-2 mt">
          <h1>Valuable Advisor Insights</h1>
          <p>
            Financial advisors have also been empowered with valuable insights
            and recommendations to clients through our Weekly Remarks feature.
            This has enabled advisors to share expert opinions, market updates,
            and personalized recommendations to guide clients in making informed
            financial decisions.
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
