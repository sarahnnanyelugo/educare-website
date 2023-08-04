import React from "react";
import Form from "../../components/Form/Form";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./calendar.scss";
import Wallet3 from "../../assets/images/fin-icon.svg";
import Icon from "../../assets/images/cal-icon1.png";
import Icon2 from "../../assets/images/cal-icon2.png";
import Icon3 from "../../assets/images/cal-icon.png";
import Icon4 from "../../assets/images/cal-icon3.png";
import Icon5 from "../../assets/images/cal-icon4.png";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import FAQ from "./FAQ/FAQ";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import { Link } from "react-router-dom";
import { Heading } from "../../components/Heading/Heading";
import { MenuTab } from "../../components/NavBar/MenuTab/MenuTab";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function Calendar() {
  return (
    <>
      <div className="col-md-12 calendar-nav-div col-12">
        {" "}
        <NavTwo
          title="Calendar"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />
      <div className="calendar-div col-md-12">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt6">
            <h1>
              Your Time Navigator: <br />
              Unlock the Power of Educare Calendar!
            </h1>
            <p>
              Welcome the future of time scheduling with Educare's empowering
              Calendar Module. Mark key dates, plan engaging events, and stay
              ahead of your business's journey.
            </p>
            <button className="demo">Request for demo</button>
          </div>
          <div className="col-md-4 offset-md-2 form-divvv">
            {" "}
            <Form
              bg="#0098DA"
              text="Get started"
              body="transparent"
              formHeading="Sign up and onboard your business in seconds"
            />
          </div>
        </div>
      </div>
      <div id="features" />
      <center>
        <h1 className="reco-alt mt col-md-9">
          For Your Business's Efficiency: Embrace the Elegance of Educare
          Calendar!
        </h1>
      </center>
      <div className="col-md-10 flexy cal-management offset-md-1 mt7">
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Wallet3} alt="Scholar" />

            <h4>Create Anytime, Anywhere!</h4>
            <p>
              Our intuitive platform ensures seamless event setup, fostering a
              dynamic business calendar that enhances engagement and
              collaboration. With Educare's Calendar Module, event creation
              becomes a breeze.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Icon} alt="Scholar" />

            <h4>Manage Events with Ease!</h4>
            <p>
              Efficiently manage all your business events with Educare's
              Calendar Module. Stay organized and in control as you track
              upcoming activities, set reminders, and avoid scheduling
              conflicts.
            </p>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-11 wallet">
            <img className="" src={Icon2} alt="Scholar" />

            <h4>Time, Ticked and Tackled: Schedule Events Like a Pro!</h4>
            <p>
              Time management meets precision with Educare's Calendar Module.
              Seamlessly schedule events, class sessions, and important business
              occasions to maximize productivity and minimize disruptions.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 grad">
        <div className="col-md-10 flexy cal-management offset-md-1 mt7 ">
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Icon4} alt="Scholar" />

              <h4>Collaboration Unleashed: Share and Shine Together!</h4>
              <p>
                Educare's Calendar Module promotes collaboration and engagement.
                Share event details with staff, students, and parents, fostering
                a vibrant learning community.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Icon3} alt="Scholar" />

              <h4>Calendar Views: See the Big Picture, Take Charge!</h4>
              <p>
                Gain invaluable insights with Educare's multiple Calendar Views,
                whether it's daily, weekly, or monthly. Get a concise overview
                of events, allowing you to plan strategically and manage your
                schedule efficiently.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 wallet">
              <img className="" src={Icon5} alt="Scholar" />

              <h4>Recurring Efficiency!</h4>
              <p>
                Embrace recurring efficiency with Educare's Calendar Module.
                Easily schedule and manage events that repeat, saving time and
                effort. Whether it's weekly meetings or monthly activities, our
                platform ensures you can plan ahead with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <center>
        <h1 className="mtt">Frequently asked questions</h1>
      </center>
      <div className="col-md-8 offset-md-2">
        {" "}
        <FAQ />
      </div> */}
      {/* <center>
        <h1 className="mt " id="pricing">
          Our simple prices made for you{" "}
        </h1>
      </center>
      <div className="grad col-md-12 mt8">
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
              className="offset-md-3 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#CEF0FF"
                color="#0098DA"
                boda="solid 1px #CEF0FF"
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
      </center> */}
      <div className="col-md-12 prefooterCal">
        <div className="col-md-10 offset-md-1 prefooterCal-inner">
          <center>
            <div className="col-md-7">
              <h2>
                Stay on top of your schedule with our intuitive calendar
                software
              </h2>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#0098DA"
                  cls="gsmcal"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <button className="demo">Request for demo</button>
              </center>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Calendar;
