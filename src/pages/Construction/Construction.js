import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./construction.scss";
import Img from "../../assets/images/construction-dashboard.png";

function Construction() {
  return (
    <>
      <div className="col-md-12 constuction-container ">
        <center>
          <div className="col-md-5">
            <h1>Construction</h1>

            <p className="col-md-11">
              Within our clientele are construction companies who have empowered
              their team, executed projects, and revolutionized their operations
              with educare comprehensive operational Tools.
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
      <div className="col-md-12 construction-efficiency">
        <center>
          <div className="col-md-4  construction-div">
            <h1>Efficient HR Management</h1>
            <p className="col-md-11">
              HR Management in construction establishments has taken a paradigm
              shift as they effortlessly manage their construction team,
              streamline HR processes, track performance, manage payroll using
              Educare HRM Module.
            </p>
          </div>
          <div className="col-md-7 mt6">
            {" "}
            <img className=" " src={Img} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <div className="col-md-12 construction-efficiency2">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5">
            <h1 className="col-md-10">Seamless Facility Management</h1>
            <p className="col-md-11">
              Effortlessly track and manage construction sites, equipment
              allocation, and resource planning with our Facility Management
              feature. Gain real-time insights into construction site
              activities, optimize resource allocation, and ensure smooth
              operations. Enhance efficiency, minimize downtime, and maximize
              productivity with streamlined facility management.
            </p>
          </div>
          <div className="col-md-5 offset-md-2">
            <h1 className="col-md-10">Insightful Project Reporting</h1>
            <p className="col-md-11">
              Generate comprehensive project progress reports, cost estimates,
              and safety compliance documentation with our advanced Reporting
              feature. Leverage real-time data to monitor project milestones,
              track costs, and ensure compliance with safety regulations. Gain
              valuable insights into project performance, make informed
              decisions, and communicate project status effectively.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5">
            <h1>Enhanced Project Communication</h1>
            <p className="col-md-11">
              Use our integrated Mailbox function to provide seamless
              communication between project managers, architects, and
              contractors. Facilitate effective teamwork, provide project
              updates, and quickly resolve problems. Create efficient
              communication routes to keep all parties informed and in alignment
              throughout the project’s lifecycle.
            </p>
          </div>
          <div className="col-md-5 offset-md-2">
            <h1 className="col-md-10">Efficient Calendar Management</h1>
            <p className="col-md">
              Utilise our logical Calendar function to maintain organisation and
              keep projects moving forward. Project milestones, timetables, and
              cooperation with subcontractors should all flow smoothly. For
              efficient project execution, manage project timelines, monitor
              activities, and ensure good subcontractor communication.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Join the community of successful educare subscribers who rely on our
            platform to automate workflows, produce precise financial data, and
            offer first-rate customer experiences in the market of today..
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

export default Construction;
