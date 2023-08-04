import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./daily-reporting.scss";
import Dashboard from "../../assets/images/daily-dashboard.png";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function DailyReporting() {
  return (
    <>
      <div className="col-md-12 daily-reporting-nav  col-12">
        {" "}
        <NavTwo title="Daily Reports" />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-12  daily-reporting-container">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mt9">
            {" "}
            <Heading
              bg="transparent"
              color="#ED2F59"
              text="Introducing Daily Reports"
              boda="solid 1px #ED2F59"
            />
            <h1 className="col-md-10 ">Unlock productivity and efficiency</h1>
            <p>
              Centralize daily updates for improved collaboration and informed
              decision-making.
            </p>
          </div>
          <div className="col-md-4 offset-md-3">
            <div className="col-md-12">
              {" "}
              <Form
                bg="#ED2F59"
                text="Get started"
                body="#fff"
                formHeading="Sign up and onboard your school in seconds"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="features" />
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-5 daily-planning-features mt">
        <div className="col">
          <div className="daily-report-feature itemm1">
            <center>
              <h4>Real-Time Data Capture</h4>
              <p>
                Users can input data and updates directly into the software
                module, capturing real-time information related to tasks,
                activities, and accomplishments. This ensures that daily reports
                reflect the most current and accurate information.
              </p>
            </center>
          </div>
        </div>
        <div className="col">
          <div className="daily-report-feature itemm2">
            <h4>Centralized Report Repository</h4>
            <p>
              The module acts as a central repository for all daily reports,
              making it easy for supervisors, managers, or other stakeholders to
              access and review the reports whenever necessary. This
              centralization streamlines communication and enhances
              collaboration.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="daily-report-feature itemm3">
            <h4>Notifications and Reminders</h4>
            <p>
              Automated notifications and reminders are sent to users to ensure
              timely submission of daily reports. This feature helps maintain
              accountability and keeps everyone on track with their reporting
              responsibilities.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 daily-reporting-dashboard">
        <div className="empty-gray1" />
        <div className="daily-report-dashboard2 col-md-12 shadowed">
          <center>
            <div className="col-md-6">
              {" "}
              <img
                className="col-md-12 dashboard1"
                src={Dashboard}
                alt="Scholar"
                width="100%"
              />
            </div>
          </center>
        </div>
        <div className="empty-gray11" />
      </div>
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-5 daily-planning-features ">
        <div className="col dpf no-m">
          <div className="daily-report-feature itemm4">
            <center>
              <h4>No backdating Report</h4>
              <p>
                This upholds transparency and data integrity within the
                organization. It prohibits the backdating of any reports or
                entries, ensuring that all information reflects real-time and
                accurate data.
              </p>
            </center>
          </div>
        </div>
        <div className="col dpf no-m">
          <div className="daily-report-feature itemm5">
            <h4>Communication and Collaboration</h4>
            <p>
              The module often includes communication features such as
              discussion boards or messaging systems. This fosters collaboration
              among students or team members, allowing them to seek
              clarification, discuss the report, or exchange ideas.
            </p>
          </div>
        </div>
        <div className="col dpf no-m">
          <div className="daily-report-feature itemm6">
            <h4>Data Security</h4>
            <p>
              We prioritize data security, ensuring that sensitive information
              is protected. It allows administrators to set permissions,
              granting access to specific users or teams while maintaining data
              confidentiality.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 daily-get-started flexy">
        <div className="col-md-5 offset-md-1">
          <h2>
            Harness the power of data analytics to drive productivity and growth
          </h2>
        </div>
        <div className="offset-md-2 mt2 offset-1">
          <GetStartedForm
            text=" Get started"
            bg="#ED2F59"
            cls="gsmdr"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
          <button className="demo">Request for demo</button>
        </div>
      </div>
    </>
  );
}

export default DailyReporting;
