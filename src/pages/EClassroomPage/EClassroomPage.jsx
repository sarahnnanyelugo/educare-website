import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./e-classroom.scss";
import WhyEClassroom from "./WhyEClassroom/WhyEclssroom";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Eclassroom from "../../assets/images/eclassroom_dashboard.png";
import Aisa from "../../assets/images/aisa.svg";
import EducarePrivacy from "../../components/EducarePrivacy/EducarePrivacy";
import SimplePrices from "../../components/SimplePrices/SimplePrices";
import Badge from "../../components/Badge/Badge";
import { Link } from "react-router-dom";
import Shield from "../../assets/images/security.json";
import Quote1 from "../../assets/images/lottieq1.json";
import Quote2 from "../../assets/images/quote2.json";
import Lottie from "react-lottie-player";

function EClassroomPage() {
  return (
    <>
      {" "}
      <div className="col-md-12 e-classroom-nav col-12">
        {" "}
        <NavTwo
          title="eClassroom"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-12  e-classroom ">
        <div className="col-md-12  flexy">
          <div className="col-md-6 right-section ">
            {" "}
            <div className="col-md-10 offset-md-2">
              <Heading
                bg="#FCEBD7"
                color="#EA8713"
                text="Introducing eClassroom"
              />
              <h1>
                Empowering Boundless Learning: Embrace the eClassroom Revolution
              </h1>
              <p>
                Transform your school into a hub of knowledge, unbound by
                physical limitations. educare's Learning Management System
                offers a robust eClassroom module, empowering educators and
                students to connect, collaborate, and learn in a digital realm.
              </p>
              <Link to={"/contact-us"}>
                {" "}
                <button>Request for demo</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6  eclassroom-form">
            <div className="col-md-6 offset-md-3">
              {" "}
              <Form
                bg="#CC006E"
                text="Get started"
                body="#fff"
                formHeading="Sign up and onboard your school in seconds"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="teams mt">
        {" "}
        <center>
          <h2>Trusted by teams at</h2>
        </center>
        <center>
          {" "}
          <div className="row row-cols-2 row-cols-lg-3 col-12 col-md-6 ">
            {" "}
            <div className="col">
              <img className="aisa" src={Aisa} alt="Scholar" />
            </div>
            <div className="col mt2">
              <img className="ms" src={Microsoft} alt="Scholar" />
            </div>
            <div className="col mt2">
              {" "}
              <img className="flutter" src={Flutterwave} alt="Scholar" />
            </div>
          </div>
        </center>
      </div> */}
      <div id="features" />
      <center>
        <h1 className="reco-alt mtt">Classroom on the go</h1>
      </center>
      <div className="col-md-10 offset-md-1 mt6 on-d-go">
        <center className="flexy">
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Empower Virtual Learning</h3>
              <p>
                With educare's eClassroom module, reach students beyond the
                classroom walls. Conduct live video classes, ensuring a dynamic
                and engaging learning experience. Seamlessly deliver lessons,
                foster interaction, and connect with your students, no matter
                where they are.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Bridge the Distance</h3>
              <p>
                Break barriers and forge strong connections with your students
                through educare's eClassroom. Enjoy real-time interactions,
                conduct discussions, and answer questions as if you were in the
                same room. With interactive features, the virtual classroom
                becomes a thriving space for collaborative learning.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4 mt5">
            <div className="col-md-10">
              {" "}
              <h3>Learning, Anytime, Anywhere</h3>
              <p>
                Flexibility meets education with educare's eClassroom. Record
                your classes and share them with your students, allowing them to
                revisit lessons at their convenience. Whether it's revision,
                catching up on missed classes, or self-paced learning, recorded
                classes offer endless possibilities.
              </p>
            </div>
          </div>{" "}
        </center>
      </div>
      <div className="col-md-10 offset-md-1">
        <img className="" src={Eclassroom} alt="Scholar" width="100%" />
      </div>
      <div className="col-md-10 offset-md-1 why-eclassroom mt7 mb5">
        <WhyEClassroom />
      </div>
      <div className="col-md-10 offset-md-1  privacy-container">
        {" "}
        {/* <educarePrivacy
          heading="Enjoy secure virtual learning with educare’s Privacy and Protection"
          paragraph="educare ensures data privacy by implementing advanced security measures, including encryption and secure communication channels. We have no access to your data, and strict policies are in place to keep your data under your control. Trust us to keep your data safe and secure"
        /> */}
        <div className="col-md-12 flexy mt">
          <div className="col-md-2 offset-md-1">
            <Lottie
              loop
              animationData={Shield}
              play
              style={{ width: 366, height: 366, marginTop: "-110px" }}
            />
          </div>
          <div className="col-md-6 offset-md-2">
            <h2 style={{ fontFamily: "rebondG-Medium" }}>
              Enjoy secure virtual learning with educare’s Privacy and
              Protection
            </h2>
            <div className="col-md-12">
              {" "}
              <p>
                educare ensures data privacy by implementing advanced security
                measures, including encryption and secure communication
                channels. We have no access to your data, and strict policies
                are in place to keep your data under your control. Trust us to
                keep your data safe and secure
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 empty-cream" />
      <div className="col-md-12 trial-sign-up">
        <center>
          {" "}
          <div className=" sign-btn-eclass">
            {" "}
            <Link to={"/login"}>
              {" "}
              <button>Sign up now to get started</button>
            </Link>
          </div>
        </center>
      </div>
      <div className="flexy lotie-quotes">
        <div className="col-md-2 offset-md-1">
          <div className="col-md-10">
            <Lottie loop animationData={Quote1} play />
          </div>
        </div>

        <div className="col-md-5">
          <div className="col-md-12">
            <center>
              {" "}
              <h3>
                {/* “This is a very useful meeting tool, as it enhanced our learning
                during COVID pandemic, it was an easy choice to use educare
                eclassroom. “ */}
                "educare eClassroom Module is a tool that has tremendously
                improved our learning experience. It's ability to ensure steady
                learning anytime anywhere was made more evident during the COVID
                pandemic in 2020. I recommend educare eClassroom."
              </h3>
            </center>
          </div>
        </div>
        <div className="col-md-2 offset-md-1" style={{ marginLeft: "40px" }}>
          <div className="col-md-10">
            <Lottie loop animationData={Quote2} play className="lquote" />
          </div>
        </div>
      </div>
      {/* <center>
        <h1 id="pricing">Our simple prices made for you </h1>
      </center> */}
      {/* <div className="grad col-md-12">
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
                btnBg="#CE456D"
              />
            </div>
          </div>
          <div className="col-md-3 recommended-container">
            <div className="offset-md-4 offset-5    heading-adj">
              <Heading
                bg="#FFD5EB"
                color="#CC006E"
                boda="solid 1px #FFD5EB"
                text="Recommended"
              />
            </div>
            <div className="col-md-11">
              <SimplePrices
                package="e-learning"
                amount="200.00"
                paragraph="Per Student (Monthly)"
                annualAmount="150 billed annually"
                url={""}
                currency="₦"
                active="active-button "
                cls="recommended3"
                btnBg="#CE456D"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Premium"
                amount="500.00"
                paragraph="Per Student (Monthly)"
                annualAmount="450 billed annually"
                url={""}
                currency="₦"
                btnBg="#CE456D"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-11 ">
              <SimplePrices
                package="Enterprise"
                amount="Contact Us"
                paragraph=""
                btnBg="#CE456D"
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
          <Link to={""} className="link">
            Pricing page
          </Link>
          {""} for complete details
        </p>
      </center> */}
      {/* <div className="col-md-10 offset-md-1 tools-management">
        <center>
          <div className="col-md-8">
            <h2>We’ve got the tools you need</h2>
            <p>
              educare Medicals offers comprehensive platform for managing
              medical services in schools, ensuring the health and well-being of
              students
            </p>
          </div>

          <button>Sign up for a free trial today</button>
        </center>
      </div> */}
    </>
  );
}

export default EClassroomPage;
