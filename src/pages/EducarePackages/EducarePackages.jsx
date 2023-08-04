import { useEffect, useState } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-packages.scss";
// import {
//   standardData,
//   rates,
//   professionalData,
//   businessEnterpriseData,
//   currencyChar,
// } from "../../TestData";
// import Tick from "../../assets/images/tickk2.png";
import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { Partners } from "../../components/Partners/Partners";
import Axios from "axios";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import BusinessPackage from "./BusinessPackage";
import SchoolsPackages from "../EducareSchoolPackages/Schoolspackages";

function EducarePackages(props) {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="col-md-12 nav-two-business col-12 ">
        {" "}
        <NavTwo title="educare for Business" />
      </div>
      <div style={{ height: "130px" }} />
      <div className="packages-first-heading col-md-12 ">
        <center>
          {" "}
          <div className="col-md-6">
            '<h1>Grow better with the right plan</h1>
            <p>For what you need (when you need it)</p>
          </div>
        </center>
      </div>{" "}
      <div className="business-pricing-tab ">
        {" "}
        <div className="tabs">
          <button
            className={`tab ${checkActive2(1, "active2")}`}
            onClick={() => handleClick2(1)}
          >
            Businesses
          </button>
          <button
            className={`tab ${checkActive2(2, "active2")}`}
            onClick={() => handleClick2(2)}
            style={{ marginLeft: "20px" }}
          >
            Schools
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <BusinessPackage />
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            <SchoolsPackages />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="col-md-12 more-details-container">
        <CompareFeatures title="Compare Features" />
      </div>
      <div className="col-md-12 more-details-container">
        <div className="col-md-12">
          <center>
            <div className="col-md-6 onboarding">
              <h1>Onboarding</h1>
              <p>
                Our Onboarding Experts have extensive experience working with
                numerous businesses worldwide. They are available to assist you
                with setting up your dashboard improving your team’s workflow,
                and ensuring your company fully adopts the platform. If you
                prefer, you can also select a partner from our directory to
                receive guidance on implementation, training, and integration.
              </p>
            </div>
          </center>
        </div>
        <div className="col-md-10 offset-md-1 flexy faq-container">
          <div className="col-md-3">
            <h1>FAQs</h1>
          </div>
          <div className="col-md-9">
            <FAQAccordionBlue />
          </div>
        </div>
        <Partners />
      </div>
    </>
  );
}

export default EducarePackages;
