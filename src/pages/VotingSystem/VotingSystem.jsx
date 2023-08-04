import "./voting-system.scss";

import React from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import { Heading } from "../../components/Heading/Heading";
import Dashboard from "../../assets/images/voting-dashboard.png";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";
import Lottie from "react-lottie-player";
import Engagement from "../../assets/images/lottie11.json";
import Assessment from "../../assets/images/lottie10.json";
import Assessibility from "../../assets/images/lottie9.json";
import Data from "../../assets/images/lottie8.json";
import Bias from "../../assets/images/lottie7.json";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function VotingSystem() {
  return (
    <>
      <div className="col-md-12 nav-two-voting col-12">
        {" "}
        <NavTwo
          title="Voting System"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />
      <center>
        <div className="col-md-6 voting-div">
          <Heading
            text="Introducing voting system"
            bg="#CEF0FF"
            color="#0098DA"
            boda="#CEF0FF"
          />
          <h1>Engage your staff and students in an interesting way</h1>
          <p>
            Streamline various processes and promote greater participation and
            engagement from students and staff alike.
          </p>
          <div className="flexy flexyM offset-md-4 mt4 voting-btns offset-2">
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmvs"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <button className="demo">Request for demo</button>
          </div>
        </div>
      </center>
      <div id="features" />

      <div className="col-md-12 dashboard">
        <center>
          <div className="col-md-5">
            <p>
              Educare voting system thrives in creating a fair form of learning
              that helps improve performance for teachers
            </p>
          </div>
        </center>
        <center>
          {" "}
          <div className="col-md-9 ">
            {" "}
            <img className="" src={Dashboard} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <center>
        <h3 className="rating-heading ">
          A platform to run fair forms of voting and rating
        </h3>
      </center>
      <div className="col-md-10 offset-md-1 flexy ">
        <div className="col-md-6">
          <div className="col-md-11 engagement rating">
            <h5>Engagement</h5>
            <p>
              Student engagement can be increased by making learning more
              interactive and participatory.
            </p>
            <div className="col-md-8 offset-md-4">
              <Lottie loop animationData={Engagement} play className="l" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Assessment</h5>
            <p>
              The system can be used as a form of formative or summative
              assessment, providing teachers with valuable feedback on student
              understanding.
            </p>
            <div className="col-md-12 offset-md-2">
              <Lottie loop animationData={Assessment} play className="l" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 accessibility flexy ">
        <div className="col-md-6">
          {" "}
          <h5>Accessibility</h5>
          <p>
            Activities can be accessed remotely, allowing for distance learning
            and providing students with more flexibility in how they participate
            <br />
            in class.
          </p>
        </div>
        <div className="col-md-6">
          <Lottie
            loop
            animationData={Assessibility}
            play
            className=""
            style={{ height: "300px", marginTop: "-60px" }}
          />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-6">
          <div className="col-md-11 engagement rating">
            <h5>Data Collection</h5>
            <p>
              Collect and analyze data on student performance and participation,
              providing teachers with insights into student needs and areas for
              improvement.
            </p>
            <div className="col-md-12 offset-md-">
              <Lottie loop animationData={Data} play className="l" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Reduced Bias</h5>
            <p>
              Bias can be reduced in the classroom by giving all students an
              equal opportunity to participate and share their thoughts and
              ideas.
            </p>
            <div className="col-md-8 offset-md-4 ">
              <Lottie
                loop
                animationData={Bias}
                play
                className="l"
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="voting-plans col-md-12 mtt" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our HR Manager.
            </p>
          </div>
        </div>
        <div className="offset-md-4 recomend">
          {" "}
          <button>Recommended</button>
        </div>
        <div className="col-md-10 offset-md-1 flexy prices-contain">
          <div className="col-md-3 zoom curve">
            {" "}
            <Prices
              package="Basic"
              amount="400.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Professional"
              amount="600.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Premium"
              amount="800.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom curve2">
            {" "}
            <Prices
              package="Enterprise"
              amount="Contact Us"
              url={""}
              // clss="curve2"
              // btnBg="#ed2f59"
            />
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-business"} className="link">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div> */}
      <div className="col-md-10 offset-md-1 participation mtt">
        <center>
          <div className="col-md-4 col-12">
            <h2>Better participation</h2>
            <h3>Better results</h3>

            <div
              className="flexy flexyM col-md-12"
              style={{ marginLeft: "50px" }}
            >
              <GetStartedForm
                text=" Get started"
                bg="#0098DA"
                cls="gsmadm"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-blue"
              />
              <button className="demo">Request for demo</button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default VotingSystem;
