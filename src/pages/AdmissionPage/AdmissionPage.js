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
            <h4>Elevate Admissions: Craft and Customize Application Forms.</h4>
            <p>
              With Educare's Admission Module, the path to academic excellence
              begins with seamless application management. Create and customize
              application forms tailored to your school's unique requirements,
              offering a user-friendly experience for prospective students.
            </p>{" "}
            <h4>
              Accelerate Admissions: Embrace Online Application Submission.
            </h4>
            <p>
              Embrace the power of digital transformation with Educare's
              Admission Module. Our platform enables online application
              submission, eliminating paperwork and streamlining the admissions
              process. Say goodbye to time-consuming manual submissions, and
              embrace the efficiency of online applications that accelerate the
              admission process.
            </p>{" "}
            <h4>Fees Made Simple: Effortless Application Fee Processing</h4>
            <p>
              At Educare, we believe in simplifying the admissions journey for
              both students and administrators. Our Admission Module facilitates
              secure and seamless application fee processing. Enable applicants
              to pay their fees online, ensuring a hassle-free experience and
              minimizing administrative burden. Embrace a convenient, cashless
              approach to application fee management.
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
            <h4>
              Discover Brilliance: Unravel the Power of Educare's Applicant
              Evaluation & Review!
            </h4>
            <p>
              With Educare's Admission Module, brilliance takes center stage as
              applicants are scored and rated to identify the brightest minds.
              Our platform simplifies the evaluation process, enabling
              administrators to objectively assess each applicant's potential,
              skills, and qualifications.
            </p>{" "}
            <h4>
              Powerful Insights, Confident Decisions: Review and Assess
              Applicant Documents with Educare!
            </h4>
            <p>
              In the pursuit of excellence, fairness is paramount. Educare's
              Applicant Evaluation & Review feature allows administrators to
              thoroughly review and assess applicant documents, ensuring every
              candidate is given an equal opportunity.
            </p>{" "}
            <h4>
              The Quest for Greatness: Compare and Rank Applicants with Educare!
            </h4>
            <p>
              Educare's Admission Module offers a powerful comparison and
              ranking tool, enabling administrators to identify standout
              applicants. Embrace the efficiency of data-driven comparison,
              where each candidate's strengths and achievements are evaluated,
              leading to a curated list of top candidates who align perfectly
              with your school's vision and values.
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
            <h4>
              Stay Informed with Educare's Automated Notifications Feature.
            </h4>
            <p>
              With Educare's Admission Module, communication becomes the
              heartbeat of your admissions process. Stay connected with
              prospective students and their families through automated
              notifications that keep them informed at every step of their
              application journey.
            </p>{" "}
            <h4>Personalize with Customizable Email Templates!</h4>
            <p>
              At Educare, we believe in the power of personalization. Our
              Communication and Notifications feature offers customizable email
              templates, allowing you to convey your institution's unique
              personality and message. Embrace the freedom to create tailored
              communications that resonate with your applicants, nurturing a
              lasting connection that sets your institution apart.
            </p>{" "}
            <h4>
              The Gateway to Success: Empower Applicants with the Educare
              Applicant Portal!
            </h4>
            <p>
              With Educare's Applicant Portal, empower applicants to take
              control of their admission journey. This user-friendly platform
              becomes the gateway to success, offering a centralized hub for
              applicants to access updates, important documents, and real-time
              notifications.
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
            <h4>Centralize your Decision-making Platform</h4>
            <p>
              With Educare's Admission Module, the future of your institution
              lies in redefined decisions. Embrace the power of a centralized
              platform for decision-making, where your team can collaborate
              seamlessly and make well-informed choices.
            </p>{" "}
            <h4>Embrace Decision-making Tools and Workflows with Educare!</h4>
            <p>
              Educare's Redefined Decisions feature puts the power in your
              team's hands. Our platform offers robust decision-making tools and
              workflows, optimizing the evaluation process and ensuring no
              detail is overlooked. .
            </p>{" "}
            <h4>
              Seal Your Legacy: Elevate Acceptance and Rejection Letters with
              Educare!
            </h4>
            <p>
              The legacy of your institution begins with acceptance and
              rejection letters that inspire and uplift. With Educare's
              Redefined Decisions, generate impactful acceptance and rejection
              letters that celebrate achievements and encourage growth. Embrace
              a compassionate and empowering approach to decision-making,
              shaping futures with every letter.
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
            <h4>Scale to Success with Educare's Admission Module!</h4>
            <p>
              With Educare's Scalability and Performance, your institution is
              ready to embrace growth with unwavering confidence. Our Admission
              Module is engineered to handle large application volumes
              seamlessly, empowering you to welcome applicants from all corners
              with open arms. Embrace the power of scalability, where success
              knows no bounds.
            </p>{" "}
            <h4>
              Always Ready, Always Thriving: Experience High Availability with
              Educare!
            </h4>
            <p>
              At Educare, we believe in providing an admission module that never
              misses a beat. High availability is the backbone of our platform,
              ensuring it remains accessible and reliable at all times. Embrace
              the peace of mind that comes with a system that thrives with you,
              empowering your institution to reach new heights of excellence.
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
