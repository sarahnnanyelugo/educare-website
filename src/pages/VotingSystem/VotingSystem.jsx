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
          <h1>
            Vote, Influence, Decide: <br />
            Experience the Impact of educare's Voting platform!
          </h1>
          <p className="col-md-11">
            Embrace transparency, inclusivity, and the power of choice, as you
            make every vote count with educare's Voting platform.
          </p>
          <div className="flexy flexyM offset-md-4 mt4 voting-btns offset-2">
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmvs"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <Link to={"/contact-us"}>
              <button className="demo">Request for demo</button>
            </Link>
          </div>
        </div>
      </center>
      <div id="features" />

      <div className="col-md-12 dashboard">
        <center>
          <div className="col-md-5">
            <p>
              With educare's Voting platform, you unlock a world of democratic
              participation, empowering teachers and students to vote for
              important school decisions and elections.
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
            <h5>Elevate Engagement</h5>
            <p>
              With educare's Voting platform, participation is no longer a mere
              act but a fiery expression of student and teacher engagement.
              Embrace the spirit of collaboration, as every vote becomes a
              catalyst for positive change and collective growth.
            </p>
            <div className="col-md-8 offset-md-4">
              <Lottie loop animationData={Engagement} play className="l" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Assessment with Impact</h5>
            <p>
              Go beyond mere voting; assess and refine your school's initiatives
              with educare's powerful Voting platform. Teachers and students can
              cast their votes, offering valuable insights into preferences, and
              priorities.
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
          <h5>Vote Anywhere, Anytime</h5>
          <p>
            Empower your school community with the freedom of choice through
            educare's Voting platform. Accessibility becomes the norm, as
            teachers and students can cast their votes seamlessly, anywhere and
            anytime. Embrace the convenience, knowing that every voice matters,
            regardless of location or time constraints.
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
            <h5>Data-Driven Decision-Making</h5>
            <p>
              With educare's Voting platform, data becomes the cornerstone of
              informed decision-making. Our platform collects valuable insights
              through voting, enabling schools to access comprehensive data for
              analysis. Embrace the power of data-driven choices, as your
              institution takes confident strides towards continuous improvement
              and excellence.
            </p>
            <div className="col-md-12 offset-md-">
              <Lottie loop animationData={Data} play className="l" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12 assessment rating">
            <h5>Fairness and Integrity</h5>
            <p>
              Fairness is at the core of educare's Voting platform, ensuring
              reduced bias and promoting a level playing field for all
              participants. By removing the potential for favoritism and
              ensuring anonymity in the voting process, our platform maintains
              integrity and builds trust, creating an environment where merit
              and competence triumph.
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
              <Link to={"/contact-us"}>
                <button className="demo">Request for demo</button>
              </Link>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default VotingSystem;
