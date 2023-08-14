import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
import Key from "../../assets/images/keygirl.svg";
import Ball1 from "../../assets/images/r-ball1.svg";
import Ball2 from "../../assets/images/r-ball2.svg";
import Ball3 from "../../assets/images/r-ball3.svg";
import { Link, NavLink } from "react-router-dom";

import "./weekly-remarks.scss";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import Badge from "../../components/Badge/Badge";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
function WeeklyRemarks() {
  return (
    <>
      <div className="col-md-12 nav-div">
        {" "}
        <NavTwo title="Weekly Remarks" />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-12 weeky-intro">
        <div className="col-md-2 " style={{ marginTop: "350px" }}>
          <img className="" src={Ball2} alt="Scholar" />
        </div>
        <center>
          <div
            className=" col-md-6 remark-intro-div flexy"
            style={{ marginTop: "-350px" }}
          >
            <div className="col-md-2">
              <img className="ms" src={Ball1} alt="Scholar" />
            </div>
            <div className="col-md-10">
              {" "}
              <Heading
                text="Introducing Weekly Remarks"
                background="#fff"
                boda="solid 1px #11A377"
                color="#11A377"
              />
              <h1 className="col-md-12 reco-alt">
                Accelerate Success, Supercharge your productivity
              </h1>
              <p>
                Experience enhanced efficiency and goal attainment with Weekly
                Remarks. This powerful tool offers effective task management and
                time tracking, providing numerous benefits to boost
                productivity, reduce stress, and drive success in both personal
                and professional pursuits.
              </p>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#C32BD6"
                  cls="gsmwr"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <Link to={"/contact-us"}>
                  {" "}
                  <button className="demo">Request for demo</button>
                </Link>
              </center>
            </div>
            <div
              className="col-md-2 offset-md-4"
              style={{ marginTop: "250px" }}
            >
              <img className="ms" src={Ball3} alt="Scholar" />
            </div>
          </div>
        </center>
      </div>

      {/* <div className="teams mt7">
        {" "}
        <center>
          <h2>Trusted by teams at</h2>
        </center>
        <center>
          {" "}
          <img className="aisa" src={Aisa} alt="Scholar" />
          <img className="ms" src={Microsoft} alt="Scholar" />
          <img className="flutter" src={Flutterwave} alt="Scholar" />
        </center>
      </div> */}
      <div id="features" />
      <center>
        <h1 className="reco-alt mt">educare Weekly remarks for all</h1>
      </center>
      <div className="col-md-12 flexy weekly-remarks mt6">
        <div className="col-md-4">
          <div className="col-md-12 remarks task">
            <center>
              <h3>Master Tasks </h3>
              <p>
                Take control of your to-do list with Educare's Weekly Remarks
                Module. Effortlessly manage tasks, set priorities, and stay
                organized throughout the week. Empower your productivity and
                witness unparalleled efficiency in achieving your goals.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks stress">
            {" "}
            <center>
              <h3>Stress-Free Zone</h3>
              <p>
                Bid farewell to stress with Educare's Weekly Remarks Module.
                Stay organized, prioritize tasks, and manage your time
                effectively. Experience reduced anxiety as you navigate your
                week with clarity and confidence.
              </p>
            </center>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12 remarks time">
            <center>
              <h3>Maximize Time</h3>
              <p>
                Time is your most valuable asset, and Educare's Weekly Remarks
                help you make the most of it. Effectively track and optimize
                your time, ensuring every moment counts towards success.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks motivate">
            {" "}
            <center>
              <h3>Ignite Your Motivation</h3>
              <p>
                Keep the fire of motivation burning bright with Educare's Weekly
                Remarks. Track your achievements, set new targets, and celebrate
                your progress. Fuel your drive for success with weekly
                reflections on your journey.
              </p>
            </center>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-12 remarks report">
            <center>
              <h3>Reporting</h3>
              <p>
                Get weekly reports that summarize your accomplishments, goals,
                and tasks, helping you to identify areas for improvement and
                celebrate your successes.
              </p>
            </center>
          </div>
          <div className="col-md-12 remarks reflect">
            {" "}
            <center>
              <h3>Unleash Growth: Reflect and Evolve</h3>
              <p>
                Embrace the power of reflection with Educare's Weekly Remarks
                Module. Look back on your week's accomplishments and challenges,
                and use these insights to grow and evolve.
              </p>
            </center>
          </div>
        </div>
      </div>
      {/* <center>
        <h1 className="mtt mb5" id="pricing">
          Our simple prices made for you{" "}
        </h1>
      </center> */}
      {/* <div className="grad col-md-12 mt">
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
                btnBg="#C32BD6"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container ">
            <div
              className="offset-md-5 offset-5"
              style={{ marginBottom: "-50px" }}
            >
              <Heading
                bg="#fff"
                color="#C32BD6"
                boda="solid 1px #C32BD6"
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
                cls="recommended5"
                btnBg="#C32BD6"
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
                btnBg="#C32BD6"
              />
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "-20px" }}>
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#C32BD6"
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
      <div className="col-md-12 unlock-remark mt">
        <center>
          <div className="col-md-3">
            <img className="" src={Key} alt="Scholar" width="100%" />
          </div>
          <center>
            <div className="col-md-4">
              <h3 className=" reco-alt mt4">
                Unlock your potential, week by week!
              </h3>
              <center>
                <GetStartedForm
                  text=" Get started"
                  bg="#C32BD6"
                  cls="gsmwr"
                  bgbtn="#0098DA"
                  backdropbg="modal-backdrop-dark"
                />
                <Link to={"/contact-us"}>
                  {" "}
                  <button className="demo">Request for demo</button>
                </Link>
              </center>
            </div>
          </center>
        </center>
      </div>
    </>
  );
}

export default WeeklyRemarks;
