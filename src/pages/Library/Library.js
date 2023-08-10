import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./library.scss";
import Player1 from "../../assets/images/lottie6.json";
import Player3 from "../../assets/images/libuser.json";
import Lottie from "react-lottie-player";
import Benefits from "../../assets/images/p-chart.svg";
import Management from "../../assets/images/management.svg";
import Player2 from "../../assets/images/girl-with-books.json";
import Player4 from "../../assets/images/book-idea.json";
import Resources from "../../assets/images/resource.svg";
import User from "../../assets/images/user.svg";
import Accessibility from "../../assets/images/load.svg";
import Security from "../../assets/images/security.svg";
import LibFeatures from "./LibFeatures/LibFeatures";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";
import Access from "../../assets/images/access.png";
import Manage from "../../assets/images/bulb.png";
import Learn from "../../assets/images/learn.png";
import Dashed1 from "../../assets/images/dashed_line_11.png";
import Dashed2 from "../../assets/images/dashed_line_22.png";
import LibraryFAQ from "./LibraryFAQ/LibraryFAQ";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";

function Library() {
  return (
    <>
      <div className="col-md-12 library-nav col-12">
        {" "}
        <NavTwo
          title="Library"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />

      <div className="col-md-12 library-container">
        <div className="col-md-10 offset-md-1  flexy ">
          <div className="col-md-5 ">
            <Heading
              bg="#FCDCE3"
              color="#ED2F59"
              text="Introducing Library"
              boda="solid 1px #FCDCE3"
            />
            <h1>Reading Made Easy!</h1>
            <p>
              Enhance your students reading ability with Educare Library Module.
              With a vast collection of resources and intuitive features, we
              make learning easy and accessible. Discover your gateway to
              knowledge today.
            </p>
            <div className="flexy flexyM lib-btns">
              <GetStartedForm
                text=" Get started"
                bg="#ED2F59"
                cls="gsmlib"
                bgbtn="#ED2F59"
                backdropbg="modal-backdrop-pink"
              />
              <button className="demo">Request a demo</button>
            </div>
          </div>
          <div className="lottie-divs col-md-7">
            <div className="flexy flexyM">
              <div className="col-md-4 col-6 offset-md-2">
                <div className="col-md-11  book-animations">
                  {" "}
                  <Lottie
                    loop
                    animationData={Player2}
                    play
                    className="lottieee"
                    style={{ height: "227px" }}
                  />
                </div>
              </div>{" "}
              <div className="col-md-5 col-6 mt4">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "", marginLeft: "50px" }}
                >
                  {" "}
                  <Lottie
                    loop
                    animationData={Player4}
                    play
                    className="lottieee"
                    style={{ height: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="flexy flexyM">
              <div className="col-md-6 col-6">
                <div className="col-md-11 book-animations">
                  {" "}
                  <Lottie
                    loop
                    animationData={Player3}
                    play
                    className="lottieee"
                  />
                </div>
              </div>{" "}
              <div className="col-md-3 col-6">
                <div
                  className="col-md-11 book-animations"
                  style={{ height: "", marginLeft: "50px" }}
                >
                  <Lottie
                    loop
                    animationData={Player1}
                    play
                    className="lottieee"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features" />
      <center>
        <div className="col-md-8 flexy mt mb5 flexyM  ">
          <div className="col-md-1 col-1 lib-feats no-m">
            <img className="" src={Access} alt="Scholar" width="100%" />
            <h6>Access</h6>
          </div>{" "}
          <div className="col-md-4 col-4 mt1">
            <img className="" src={Dashed1} alt="Scholar" width="100%" />
          </div>{" "}
          <div className="col-md-1 col-1">
            <img className="" src={Manage} alt="Scholar" width="100%" />
            <h6>Manage</h6>
          </div>{" "}
          <div className="col-md-4 col-4">
            <img className="" src={Dashed2} alt="Scholar" width="100%" />
          </div>{" "}
          <div className="col-md-1 col-1">
            <img className="" src={Learn} alt="Scholar" width="100%" />
            <h6>Learn</h6>
          </div>
        </div>
      </center>
      <div className="col-md-12 mt mb5 flexy">
        <div className="col-md-12 ">
          <DashboardDisplay />
        </div>
      </div>

      <div className="col-md-12 graded mt ">
        <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-5 ">
          <div className="col try">
            <LibFeatures
              title="Library Account Management"
              subtitle="Unlock a World of Learning Possibilities!"
              paragraph="Elevate your school's library experience with Educare's unparalleled Library Management system. With  seamless Personalized book recommendations and effortless resource tracking, our Library Management takes learning to new heights."
              icon={Management}
            />
          </div>
          <div className="col try">
            <LibFeatures
              title="Resources and Services"
              paragraph="Discover a treasure trove of knowledge at your fingertips! Educare's comprehensive Resources and Services offer a diverse range of books, digital media, research materials, and educational services. Revolutionize your learning experience and unlock academic success."
              icon={Resources}
              subtitle="Your Gateway to Limitless Knowledge!"
            />
          </div>

          <div className="col try">
            <LibFeatures
              title="User Interface"
              paragraph="Experience a User Interface that sets the standard for excellence in library automation. Educare's intuitive search and interactive displays, ignite curiosity, and inspire a love for learning."
              icon={User}
              subtitle=" Intuitive, Innovative, and Inspiring!"
            />
          </div>
        </div>
      </div>
      <center>
        {" "}
        <div className="col-md-7 row row-cols-1 row-cols-lg-2 g-2 g-lg-5">
          <div className="col try">
            <LibFeatures
              title="Accessibility"
              paragraph="Knowledge knows no bounds, and neither should your access to it. With Educare's Accessibility feature, we break down barriers to learning, ensuring inclusivity for all. Empower every learner to thrive, regardless of their physical location."
              icon={Accessibility}
              subtitle="Knowledge Without Boundaries!"
            />
          </div>

          <div className="col try">
            <LibFeatures
              title="Security & Privacy"
              paragraph="Safeguarding your data is our utmost priority. With Educare's top-tier Security & Privacy measures, trust that your school's information and students' data are fortified against any threats. Focus on shaping bright minds while we take care of the rest."
              icon={Security}
              subtitle="Your Data, Fortified and Protected!"
            />
          </div>
        </div>
      </center>
      {/* 
      <div className="library-plans col-md-12 mt" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Library Module.
            </p>
          </div>
        </div>
        <div className="offset-md-4 recomendF">
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
      <div className="col-md-10 offset-md-1 lib-get-started flexy mtt">
        <div className="col-md-5 started-div">
          <h2>Get started today</h2>
          <p>
            Sign up and see how easy it is acquiring <br />
            knowledge with our software.
          </p>
        </div>
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
      {/* <div className="col-md-8 offset-md-2 mt">
        <center>
          <h1>Frequently asked questions</h1>
        </center>
        <LibraryFAQ />
      </div> */}
    </>
  );
}

export default Library;
