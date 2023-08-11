import { useEffect, useState, useRef } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-school-packages.scss";
import {
  enterpriseData,
  elearningData,
  premiumData,
  basicData,
  schoolRates,
  currencyChar,
} from "../../TestData";
import Tick from "../../assets/images/tickk2.png";
import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { Partners } from "../../components/Partners/Partners";
import Axios from "axios";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import { Link } from "react-router-dom";

function SchoolsPackages(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("NGN");
  const [conversionRate, setConversionRate] = useState(1);

  const convertCurrency = () => {
    setConversionRate(schoolRates[toCurrency]);
  };
  function setThisCurrency(curr) {
    if (curr !== toCurrency) {
      setToCurrency(curr);
    }
  }
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);
  useEffect(() => {
    convertCurrency();
    console.log(toCurrency, conversionRate);
  }, []);
  useEffect(() => {
    convertCurrency();
    setTimeout(() => {
      console.log(toCurrency, conversionRate);
    }, 1000);
  }, [toCurrency]);
  return (
    <>
      <div className="educare-for-school-packages">
        {" "}
        <div className="tabs2 offset-md-1">
          <button
            className={`tab2 ${checkActive(1, "active3")}`}
            onClick={() => handleClick(1)}
          >
            Monthly
          </button>
          <button
            className={`tab2 ${checkActive(2, "active3")}`}
            onClick={() => handleClick(2)}
          >
            Yearly
          </button>
        </div>
        <div className="currency-buttons2 flexy flexym offset-md-10">
          <button
            onClick={() => setThisCurrency("NGN")}
            ref={inputReference}
            className={` ${toCurrency === "NGN" ? "curr-active" : ""}`}
          >
            NGN
          </button>
          <button
            onClick={() => setThisCurrency("USD")}
            className={` ${toCurrency === "USD" ? "curr-active" : ""}`}
          >
            USD
          </button>
          <button
            onClick={() => setThisCurrency("GBP")}
            className={` ${toCurrency === "GBP" ? "curr-active" : ""}`}
          >
            GBP
          </button>{" "}
          <button
            onClick={() => setThisCurrency("EUR")}
            className={` ${toCurrency === "EUR" ? "curr-active" : ""}`}
          >
            EUR
          </button>{" "}
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="offset-md-6">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-10 flexy monthly-container2">
              <div className="col-md-4 left-cards enterprise">
                <h3>{basicData.heading1}</h3>
                <div className="flexy flexyM">
                  {" "}
                  <h1>
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(basicData.monthlyAmount * conversionRate).toFixed(2)}
                  </h1>
                  <h6>
                    Per Student <br /> (Monthly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {basicData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4 standard">
                <div className="col-md-12  ">
                  <h3>{premiumData.heading1}</h3>
                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {(premiumData.monthlyAmount * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per Student <br /> (Monthly)
                    </h6>
                  </div>
                  <Link to={"/login"}>
                    <button className="price-button">Get started</button>
                  </Link>

                  <ul className="list-unstyled">
                    {premiumData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-3 left-cards2 e-learning">
                <h3>{elearningData.heading1}</h3>
                <div className="flexy flexyM">
                  {" "}
                  <h1>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(elearningData.monthlyAmount * conversionRate).toFixed(2)}
                  </h1>
                  <h6>
                    Per Student <br />
                    (Monthly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {elearningData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="col-md-4 right-cards e-learning">
                <h3>{enterpriseData.heading1}</h3>
                <h1>{enterpriseData.yearlyAmount}</h1>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {enterpriseData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`panel ${checkActive(2, "active2")}`}>
            <div className="offset-md-6">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-10 flexy monthly-container2">
              <div className="col-md-4 left-cards enterprise">
                <h3>{basicData.heading1}</h3>
                <div className="flexy flexyM">
                  {" "}
                  <h1>
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(basicData.yearlyAmount * conversionRate).toFixed(2)}
                  </h1>
                  <h6>
                    Per Student <br /> (Yearly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {basicData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4">
                <div className="col-md-12  standard">
                  <h3>{premiumData.heading1}</h3>

                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {(premiumData.yearlyAmount * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per Student <br /> (Yearly)
                    </h6>
                  </div>
                  <Link to={"/login"}>
                    <button className="price-button">Get started</button>
                  </Link>

                  <ul className="list-unstyled">
                    {premiumData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-3 left-cards2 e-learning">
                <h3>{elearningData.heading1}</h3>
                <div className="flexy flexyM">
                  <h1>
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(elearningData.yearlyAmount * conversionRate).toFixed(2)}
                  </h1>

                  <h6>
                    Per Student <br />
                    (Yearly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {elearningData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="col-md-4 right-cards e-learning ">
                <h3>{enterpriseData.heading1}</h3>
                <h1>{enterpriseData.yearlyAmount}</h1>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {enterpriseData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 more-details-container">
        <CompareFeatures title="Compare Features" />
      </div>
      <br />
      <br />
      <div className="col-md-12 more-details-container">
        <div className="col-md-12">
          <center>
            <div className="col-md-6 onboarding">
              <h1>Onboarding</h1>
              <p>
                Our Onboarding Experts have extensive experience working with
                numerous businesses worldwide. They are available to assist you
                with setting up your dashboard improving your team’s workflow,
                and ensuring your company fully adopts the platform.
                {/* If you
                prefer, you can also select a partner from our directory to
                receive guidance on implementation, training, and integration. */}
              </p>
            </div>
          </center>
        </div>
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
    </>
  );
}

export default SchoolsPackages;
