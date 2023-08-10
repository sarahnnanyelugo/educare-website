import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./pastoral-page.scss";
import PastoralDashboard from "../../assets/images/pastoral2.png";
// import Efficiency from "../../components/Efficiency/Efficiency";
import Setting from "../../assets/images/Layer.svg";
import Track from "../../assets/images/track.svg";
import Storage from "../../assets/images/data-storage.svg";
import Support from "../../assets/images/support.svg";
import Together from "../../assets/images/together.svg";
import Logo from "../../assets/images/logo2.png";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link, NavLink } from "react-router-dom";
import { PartnersInlineDisplay } from "../../components/PartnersInlineDisplay/PartnersInlineDisplay";
import Badge from "../../components/Badge/Badge";
import Efficiency from "../../components/Efficiency/Efficiency";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function Pastoral(props) {
  return (
    <>
      <div className="col-md-12 pastoral-nav col-12">
        {" "}
        <NavTwo title="Pastoral" nav1="Features" nav3="Resources" />
      </div>
      <div style={{ height: "140px" }} />

      <div className="col-md-12 wellbeing">
        <center>
          <div className="col-md-5">
            {" "}
            <h2>Monitoring & Enhancing Student Well-Being</h2>
            <p>
              From behavior monitoring to impactful disciplinary measures, every
              aspect is meticulously handled, leaving no room for surprises.
              With Educare Pastoral Module, unlock the potential to shape future
              leaders, nurture personal growth, and create an atmosphere where
              students thrive, ultimately setting the stage for a brighter and
              successful academic journey.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#ED2F59"
              cls="gsmpst"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <button className="demo">Request for a demo</button>
          </div>
        </center>{" "}
      </div>
      <div className="empty-bg"></div>
      <div className="col-md-8 offset-md-2 pdash">
        {" "}
        <img
          className="   "
          src={PastoralDashboard}
          alt="Scholar"
          width="100%"
          height="100%"
        />
      </div>
      <div id="features" />

      <center>
        <div className="col-md-5 efficient">
          {" "}
          <h1>Transform Student Care </h1>
          <h2> Unleash Unmatched Efficiency in Your School!</h2>
        </div>
      </center>
      <div className="rad col-md-12">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Elevate Student Well-being"
                icon={Setting}
                subtitle=" Experience Streamlined Pastoral Care with Educare!"
                paragraph=" Embrace a transformative system that optimizes the management of student well-being. From counseling sessions to student support initiatives, everything seamlessly falls into place, empowering your team to focus on what truly matters - nurturing students' growth and emotional well-being."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Empower Your Approach"
                subtitle=" Customize Student Well-being Tracking with Educare!"
                icon={Track}
                paragraph="Every student is unique, and so should be their well-being tracking. Educare Pastoral Module offers customizable tools that adapt to such unique vision and goals. With our pastoral Module, you hold the power to tailor student support, ensuring a holistic approach that fosters a thriving and resilient student community."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Data is Power"
                icon={Storage}
                subtitle="Centralized Data Storage with Educare Pastoral Module!"
                paragraph="In the quest for student well-being, data is the driving force. With Educare Pastoral Module's centralized data storage, access and analysis become effortless. Retrieve critical information about individual students and analyze trends at a macro level. Armed with this powerful information, your pastoral team can make informed decisions, identify areas of improvement, and implement targeted interventions to nurture students' emotional and academic growth."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 offset-md-2 flexy mt8">
        <div className="col-md-6">
          <div className="col-md-11">
            <Efficiency
              title="Proactive Support, Empowered Success"
              subtitle="Facilitate Interventions with Educare!"
              icon={Support}
              paragraph="Waiting for problems to arise is not an option when it comes to student well-being. Educare Pastoral Module equips your school with proactive support capabilities, enabling timely and targeted interventions. Identify potential challenges early on, address them with precision, and empower students to thrive in a supportive environment. With Educare Pastoral, you become a guiding force in your students' journey to success."
            />
          </div>
        </div>{" "}
        <div className="col-md-6">
          <div className="col-md-11">
            <Efficiency
              title="Stronger Together"
              icon={Together}
              subtitle="Collaborative Communication with Educare Pastoral Module!"
              paragraph="In the realm of pastoral care, communication is the key to impactful support. Educare Pastoral brings collaborative features to the forefront, fostering effective communication among your pastoral team, teachers, parents, and students. Share insights, coordinate efforts, and keep everyone involved in the loop. Together, create a united front that ensures students receive unwavering support, promoting a positive and nurturing school community."
            />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 pastoral-management">
        <center>
          <div className="col-md-8">
            <h2>Enhance your Pastoral Care Management Process with</h2>
          </div>

          <center>
            <div className="col-md-3 flexy">
              <img className="" src={Logo} alt="Scholar" />{" "}
              <h6 style={{ marginTop: "20px" }}>Pastoral</h6>
            </div>
          </center>
          <div id="pricing" />
          <GetStartedForm
            text=" Get started"
            bg="#ED2F59"
            cls="gsmpst"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-pink"
          />
        </center>
      </div>
      {/* <center>
        <h1>Our simple prices made for you </h1>
      </center> */}
      {/* <div className="rad col-md-12">
        {" "}
        <div className="col-md-10 offset-md-1 flexy mb5 mt5">
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Basic"
                amount="100.00"
                paragraph="Per Student (Monthly)"
                annualAmount="75 billed annually"
                url={""}
                currency="₦"
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div className="offset-md-5 reco-badge">
              <Badge btnBg="#FCDCE3" btnColor="#ED2F59" />
            </div>
            <div className="col-md-11 ">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommended"
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#ed2f59"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                annualAmount=""
                url={""}
                btnBg="#ed2f59"
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
      <PartnersInlineDisplay /> */}
    </>
  );
}

export default Pastoral;
