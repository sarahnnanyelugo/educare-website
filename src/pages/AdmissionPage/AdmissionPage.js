import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./admission-page.scss";
import Dashboard1 from "../../assets/images/admin_dashboard1.png";
import Dashboard2 from "../../assets/images/admin-dashboard2.png";
import Dashboard3 from "../../assets/images/admin-dashboard3.png";
import Dashboard4 from "../../assets/images/admin-dashboard4.png";
import Dashboard5 from "../../assets/images/admin-dashboard5.png";
import Dashboard6 from "../../assets/images/notify_dashboard.png";
import Step1 from "../../assets/images/step1.png";
import Step2 from "../../assets/images/step2.png";
import Step3 from "../../assets/images/step3.png";
import Step4 from "../../assets/images/step4.png";
import Step5 from "../../assets/images/step5.png";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function AdmissionPage() {
  return (
    <>
      <div className="col-md-12 admission-nav-div col-12">
        {" "}
        <NavTwo
          title="Admission"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "120px" }} />
      <div className="col-md-12 admissions-div">
        <center>
          <div className="col-md-5">
            <h2>
              Unlock a World of Potential: <br />
              Seamlessly Admit Students with Ease!
            </h2>
            <p className="col-md-10">
              Seize Control of Admissions: Empower Staff with Effortless Student
              Profile Creation. Streamline Administrative Tasks with Confidence
              and Ease. Elevate Admissions Efficiency: Welcome Students with
              Simplified, Powerful Tools.
            </p>
            <center>
              <GetStartedForm
                text=" Get started"
                bg="#0098DA"
                cls="gsmadm"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-blue"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
      </div>
      <div id="features" />
      <div className="col-md-12 admission-steps">
        {" "}
        <center>
          <div className="col-md-8 ">
            {" "}
            <img
              className="col-md-12 dashboard1"
              src={Dashboard1}
              alt="Scholar"
              width="100%"
            />
            <center>
              <div className="flexy">
                {" "}
                <a href="#application" className="col-md-4 dir">
                  <div className="col-md-11  steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step1} alt="Scholar" />
                      <p>Application Management</p>
                    </div>
                  </div>
                </a>{" "}
                <a className="col-md-4 dir" href="#review">
                  <div className="col-md-11  steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step2} alt="Scholar" />
                      <p>Applicant Evaluation & Review</p>
                    </div>
                  </div>
                </a>{" "}
                <a className="col-md-4 dir" href="#comm">
                  <div className="col-md-11 steps">
                    <div className="flexy flexyM">
                      <img className="col-md-2" src={Step3} alt="Scholar" />
                      <p>Communications & Notification</p>
                    </div>
                  </div>
                </a>
              </div>
            </center>
          </div>
        </center>
        <div className="flexy col-md-6 offset-md-3 mt5 no-m">
          {" "}
          <a href="#decision" className="col-md-6 dir">
            <div className="col-md-11  steps">
              <div className="flexy flexyM">
                <img className="col-md-2" src={Step4} alt="Scholar" />
                <p>Redefined Decisions</p>
              </div>
            </div>
          </a>{" "}
          <a className="col-md-6 dir" href="#scale">
            <div className="col-md-11  steps">
              <div className="flexy flexyM">
                <img className="col-md-2" src={Step5} alt="Scholar" />
                <p>Scalability and Performance</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="application" />
      <div className="col-md-12 admission-dashboards mt">
        {" "}
        <center id="">
          <div className="col-md-6">
            <h1>Application Management</h1>
            <p>
              Discover the future of student admissions with Educare's powerful
              module. Seamlessly manage applications from start to finish,
              saving time and resources while ensuring a smooth, organized
              process. From initial submissions to final decisions, experience
              the pinnacle of admission management efficiency.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Creation and Customization of Application Forms</h4>
            <p>
              The module allows organizations to design and customize
              application forms according to their specific requirements. This
              includes adding relevant fields, specifying validation rules, and
              capturing the necessary applicant information.
            </p>{" "}
            <h4>Online Application Submission</h4>
            <p>
              Applicants can conveniently submit their applications online
              through a user-friendly interface. This eliminates the need for
              paper-based applications and allows for efficient data collection.
            </p>{" "}
            <h4>Application Fee Processing</h4>
            <p>
              The software may offer functionality to process application fees
              securely, allowing applicants to make payments online.
            </p>
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard2}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 admission-dashboards2 mt" id="review">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Applicant Evaluation & Review</h1>
            <p>
              Educare's Admission Module goes beyond applications; it empowers
              institutions with tools for comprehensive applicant evaluation and
              review. Effortlessly assess candidates based on customizable
              criteria, enabling confident decisions that lead to the best-fit
              students for your school.
            </p>
          </div>
        </center>
        <div className="col-md-11  flexy mt9">
          {" "}
          <div className="col-md-6 mt6">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard3}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5  offset-md-1">
            <h4>Scoring or Rating of Applicants</h4>
            <p>
              This enables administrators to define evaluation criteria and
              assign scores or ratings to applicants. This helps in objectively
              assessing applicants and comparing them to predefined benchmarks.
            </p>{" "}
            <h4>Reviewing and Assessing Applicant Documents:</h4>
            <p>
              Admission staff can access and review applicant documents directly
              within the module. This feature streamlines the evaluation process
              and ensures all necessary materials are considered.
            </p>{" "}
            <h4>Comparison and Ranking of Applicants</h4>
            <p>
              The module provides tools to compare and rank applicants based on
              evaluation scores, allowing administrators to identify the most
              qualified candidates.
            </p>
          </div>
        </div>
      </div>
      <div id="comm" />
      <div className="col-md-12 admission-dashboards mt" id="">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Communications and Notifications</h1>
            <p>
              Stay connected and informed with Educare's Communication &
              Notification feature. Engage applicants throughout the admissions
              process with automated updates, interview invitations, and
              decision notifications. A streamlined communication channel
              ensures a positive candidate experience and builds a strong
              connection with your school.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Automated Notifications</h4>
            <p>
              Send automated notifications to applicants at various stages of
              the admission process. These notifications may include application
              received confirmation, document submission reminders, interview
              scheduling, or final decision notifications.
            </p>{" "}
            <h4>Customizable Email Templates</h4>
            <p>
              Administrators can create and customize email templates for
              communication with applicants. This ensures consistent messaging
              and saves time by automating routine communication.
            </p>{" "}
            <h4>Applicant Portal</h4>
            <p>
              Individuals can log in to view their application status, update
              contact information, submit additional documents, or communicate
              with the admissions team on an applicant portal.
            </p>
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard6}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      <div id="decision" />
      <div className="col-md-12 admission-dashboards2 mt" id="">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Redefined Decisions</h1>
            <p>
              Educare's Decision Management feature streamlines the process of
              accepting and rejecting applicants, providing administrators with
              a clear overview and enabling efficient decision-making. With
              comprehensive data at your fingertips, you can shape a cohort that
              aligns perfectly with your school's vision and values.
            </p>
          </div>
        </center>
        <div className="col-md-11  flexy mt9">
          {" "}
          <div className="col-md-6 mt6">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard4}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5  offset-md-1">
            <h4>Centralized Platform for Decision-making</h4>
            <p>
              A centralized platform where administrators can access applicant
              profiles, evaluation scores, and other relevant data to facilitate
              informed decision-making.
            </p>{" "}
            <h4>Decision-making Tools and Workflows</h4>
            <p>
              Offers workflows or decision-making tools to guide administrators
              through the selection process. This includes setting decision
              criteria, defining acceptance thresholds, and managing waitlists.
            </p>{" "}
            <h4>Generation of Acceptance/Rejection Letters</h4>
            <p>
              Be able to generate acceptance, rejection, or waitlist letters
              automatically. This simplifies the process of notifying applicants
              about their admission status and ensures consistent and timely
              communication.
            </p>
          </div>
        </div>
      </div>
      <div id="scale" />
      <div className="col-md-12 admission-dashboards mt" id="scale">
        {" "}
        <center>
          <div className="col-md-6">
            <h1>Scalability and Performance</h1>
            <p>
              Built for growth, Educare's Student Admission Module ensures
              scalability and unmatched performance. Whether your institution is
              small or large, the system remains robust and responsive,
              delivering a seamless experience for both administrators and
              applicants.
            </p>
          </div>
        </center>
        <div className="col-md-11 offset-md-1 flexy mt5">
          <div className="col-md-5">
            <h4>Handling Large Application Volumes</h4>
            <p>
              Our software is designed to handle large volumes of applications
              efficiently without compromising performance. It can handle high
              traffic and accommodate spikes in application submissions during
              peak admission periods..
            </p>{" "}
            <h4>High Availability</h4>
            <p>
              We ensure high availability and reliability, minimizing downtime
              and ensuring uninterrupted access to critical admission data and
              functionalities.
            </p>{" "}
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12"
              src={Dashboard5}
              alt="Scholar"
              width="100%"
            />
          </div>
        </div>
      </div>{" "}
      {/* <div className="col-md-12 admin-simple-prices" id="pricing">
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
        <div className="col-md-5 admin-process mt">
          <h3>
            Streamline Your Admission Process with educare admissions today!
          </h3>
          <center>
            {/* <button className="started">Get started</button> */}
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmadm"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <button className="demo">Request for demo</button>
          </center>
        </div>
      </center>
    </>
  );
}

export default AdmissionPage;
