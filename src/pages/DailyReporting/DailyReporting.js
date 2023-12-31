import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./daily-reporting.scss";
import Dashboard from "../../assets/images/daily-dashboard.png";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Link } from "react-router-dom";

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
              With educare's Daily Reporting platform, productivity reaches new
              heights. Empower your staff to input their daily tasks with ease,
              ensuring accountability and streamlined work hours. Embrace
              data-driven excellence, as each staff member's productivity
              becomes the heartbeat of your establishment.
            </p>
          </div>
          <div className="col-md-4 offset-md-3">
            <div className="col-md-12">
              {" "}
              <Form
                bg="#ED2F59"
                text="Get started"
                body="#fff"
                formHeading="Sign up and onboard your business in seconds"
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
              <h4>No backdating Report</h4>
              <p>
                educare Weekly Report upholds transparency and data integrity
                within the organization. It prohibits the backdating of any
                reports or entries, ensuring that all information reflects
                real-time and accurate data.
              </p>
            </center>
          </div>
        </div>
        <div className="col">
          <div className="daily-report-feature itemm2">
            <h4>Centralized Report Repository</h4>
            <p>
              The platform acts as a central repository for all daily reports,
              making it easy for supervisors, managers, or other stakeholders to
              access and review the reports whenever necessary. This
              centralization streamlines communication and enhances
              collaboration.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="daily-report-feature itemm3">
            <h4>Never Miss a Beat: Stay Informed !</h4>
            <p>
              Never miss a beat with educare's Daily Reporting platform. Our
              platform sends timely notifications and reminders, ensuring staff
              members stay on track with their daily tasks.
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
              <h4>Forward-Moving Accountability</h4>
              <p>
                Accountability is the cornerstone of success, and educare's
                Daily Reporting platform ensures it's maintained with integrity.
                Our platform enforces a no-backdating policy, promoting accurate
                and honest reporting.
              </p>
            </center>
          </div>
        </div>
        <div className="col dpf no-m">
          <div className="daily-report-feature itemm5">
            <h4>Collaborate, Elevate</h4>
            <p>
              Communication and collaboration become a breeze with educare's
              Daily Reporting platform. Staff members can seamlessly communicate
              within the platform, sharing updates, progress, and insights.
            </p>
          </div>
        </div>
        <div className="col dpf no-m">
          <div className="daily-report-feature itemm6">
            <h4>Data Shielded, Trust Secured</h4>
            <p>
              At educare, we take data security seriously. Our Daily Reporting
              platform ensures robust data protection, safeguarding confidential
              information from unauthorized access.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 daily-get-started flexy">
        <div className="col-md-6 offset-md-1">
          <h3>
            Harness the power of data analytics to drive productivity and growth
          </h3>
        </div>
        <div className="offset-md-1 mt2 offset-1">
          <GetStartedForm
            text=" Get started"
            bg="#ED2F59"
            cls="gsmdr"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
          <Link to={"/contact-us"}>
            <button className="demo">Request for demo</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DailyReporting;
