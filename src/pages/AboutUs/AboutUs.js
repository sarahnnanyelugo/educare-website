import React from "react";
import { PartnersInlineDisplay } from "../../components/PartnersInlineDisplay/PartnersInlineDisplay";
import "./about-us.scss";
import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack.svg";
import Microsoft from "../../assets/images/lbs.png";
import Flutterwave from "../../assets/images/grange.png";
import Apen from "../../assets/images/apen.png";
import Aisa from "../../assets/images/aisa.svg";
import Cobis from "../../assets/images/cobis.svg";
import LandingImg from "../../assets/images/abt_us_landing.png";
import Mission from "../../assets/images/mission.png";
import Commitment from "../../assets/images/commit.png";
import Collab from "../../assets/images/colla.png";
import Innovate from "../../assets/images/inno.png";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
function AboutUs() {
  return (
    <>
      <div className="col-md-12 about-landing">
        <img className="" src={LandingImg} alt="Scholar" width="100%" />
        <div className="centering">
          <center>
            <h1 className="col-md-12">
              We are building a better future for your School and Business
            </h1>
          </center>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy missions-and-vissions mt">
        <div className="img-div col-md-6">
          <img className="" src={Mission} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 offset-md-1">
          <h1>Our Misson</h1>
          <p>
            Our mission is to empower educational institutions and businesses
            through innovative software solutions. We strive to streamline
            processes, enhance productivity, and facilitate growth by leveraging
            cutting-edge technology and a deep understanding of the unique needs
            and challenges of the education and business sectors.
          </p>
          <p>
            {" "}
            Our aim is to create software that not only meets our clients’
            immediate requirements but also adapts to the ever-changing
            landscape, driving sustainable success and making a positive impact
            in the communities we serve.
          </p>
        </div>
      </div>
      <div className="col-md-12 shadow2">
        {" "}
        <center>
          <div className="col-md-6 mtt">
            <h1>We’re a mission driven company</h1>
            <p>
              We are dedicated to developing innovative solutions that empower
              schools and businesses to streamline their workflows and focus on
              what matters most – educating the next generation.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-6 mt6">
          <h3>Our Commitment to Continuous Improvement</h3>
          <p className="mt2">
            At Educare, we are committed to continuous improvement and the
            journey towards excellence. Our software platform evolves to meet
            the changing needs of our clients in the education sector and
            businesses.
          </p>
          <p>
            We work tirelessly to enhance our platform, customer service, and
            internal processes, actively seeking feedback to deliver an
            exceptional user experience.
          </p>
          <p>
            By staying at the forefront of technological advancements, we ensure
            that our clients’ evolving needs are met effectively.
          </p>
        </div>
        <div className="col-md-6 img-div">
          {" "}
          <img className="" src={Commitment} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-6 img-div">
          {" "}
          <img className="" src={Innovate} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 offset-md-1 mt8">
          <h3>Embracing Change and Innovation</h3>
          <p className="mt5">
            Educare is driven by a commitment to embracing change and fostering
            innovation. We understand that the educational and business
            landscapes are constantly evolving.
          </p>
          <p>
            Our focus is on continuous improvement, refining and developing our
            software to provide effective solutions. By actively seeking and
            incorporating user feedback, we stay ahead of the curve, offering
            cutting-edge features and functionalities that meet the evolving
            needs of our clients in education and business sectors.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy  missions-and-vissions mtt">
        <div className="col-md-5 mt6">
          <h3>Our Collaborative Approach</h3>
          <p className="mt3">
            We emphasize the significance of collaboration for success. We
            closely collaborate with our clients, understanding their unique
            challenges and requirements.
          </p>
          <p>
            Our team combines expertise in technology and education to deliver
            tailored solutions that meet the specific needs of each school and
            business we serve.
          </p>
          <p>
            We prioritize strong client relationships, fostering open
            communication and providing ongoing support to help schools and
            businesses achieve excellence.
          </p>
        </div>
        <div className="col-md-6 img-div offset-md-1">
          {" "}
          <img className="" src={Collab} alt="Scholar" width="100%" />
        </div>
      </div>
      <center>
        {" "}
        <h1 className="col-md mtt">Trusted by leading organisations</h1>
      </center>
      <center>
        {" "}
        <div className="col-md-9  partners-container2 ">
          {" "}
          <center>
            <div className="mt1 col-md-">
              {" "}
              <img className="standard" src={Standard} alt="Scholar" />
              <img className="aisa" src={Aisa} alt="Scholar" />
              <img className="ms" src={Microsoft} alt="Scholar" />
              <img className="flutter" src={Flutterwave} alt="Scholar" />
              <img className="pay" src={Paystack} alt="Scholar" />
              <img className="apen" src={Apen} alt="Scholar" />
              <img className="" src={Cobis} alt="Scholar" />
            </div>
          </center>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 cv-div mtt">
        <center>
          <div className="col-md-7">
            <h2>Ready to be more efficient??</h2>
            <p>Let’s get you signed up for free today!</p>
            <GetStartedForm
              text="Sign up for free now"
              bg="#0098DA"
              cls="gsmsp"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
        </center>
      </div>
    </>
  );
}

export default AboutUs;
