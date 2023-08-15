import { useEffect, useState, useRef } from "react";
import {
  standardData,
  businessRates,
  professionalData,
  businessEnterpriseData,
  currencyChar,
} from "../../TestData";
import Tick from "../../assets/images/tickk2.png";
import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import { Partners } from "../../components/Partners/Partners";
import { Link } from "react-router-dom";
function BusinessPackage() {
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex2 === index ? className : "";

  const [amount, setAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("NGN");
  const [conversionRate, setConversionRate] = useState(1);

  const convertCurrency = () => {
    setConversionRate(businessRates[toCurrency]);
  };
  function setThisCurrency(curr) {
    if (curr !== toCurrency) {
      setToCurrency(curr);
    }
  }
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
  const inputReference = useRef(null);
  return (
    <div>
      <div className="business-pricing-tab ">
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
        <div className="currency-buttons2 flexy flexym offset-md-9 offset-lg-10">
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
            <div className="offset-lg-6 offset-md-5">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-12 col-lg-8 flexy monthly-container2 offset-lg-2 ">
              <div className="col-md-4 ">
                <div className="col-md-12 e-learning right-cards2">
                  <h3>{standardData.heading1}</h3>
                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {(standardData.monthlyAmount * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per Employee <br /> (Monthly)
                    </h6>
                  </div>
                  <Link to={"/login"}>
                    <button className="price-button">Get started</button>
                  </Link>

                  <ul className="list-unstyled">
                    {standardData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4   standard">
                <h3>{professionalData.heading1}</h3>
                <div className="flexy flexyM">
                  <h1>
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(professionalData.monthlyAmount * conversionRate).toFixed(
                      2
                    )}
                  </h1>{" "}
                  <h6>
                    Per Employee <br /> (Monthly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {professionalData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4 right-cards e-learning ">
                <h3>{businessEnterpriseData.heading1}</h3>
                <h1>{businessEnterpriseData.monthlyAmount}</h1>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {businessEnterpriseData.packages.map((items, index) => (
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
            <div className="col-md-12 col-lg-8 flexy monthly-container2 offset-lg-2 ">
              <div className="col-md-4 ">
                <div className="col-md-12 e-learning right-cards2">
                  <h3>{standardData.heading1}</h3>
                  <div className="flexy flexyM">
                    {" "}
                    <h1>
                      {" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: currencyChar[toCurrency],
                        }}
                      ></span>
                      {(standardData.yearlyAmount * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per Employee <br /> (Yearly)
                    </h6>
                  </div>
                  <Link to={"/login"}>
                    {" "}
                    <button className="price-button">Get started</button>
                  </Link>
                  <ul className="list-unstyled">
                    {standardData.packages.map((items, index) => (
                      <li key={items.id}>
                        {" "}
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 standard ">
                <h3>{professionalData.heading1}</h3>
                <div className="flexy flexyM">
                  <h1>
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currencyChar[toCurrency],
                      }}
                    ></span>
                    {(professionalData.yearlyAmount * conversionRate).toFixed(
                      2
                    )}
                  </h1>
                  <h6>
                    Per Employee <br /> (Yearly)
                  </h6>
                </div>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {professionalData.packages.map((items, index) => (
                    <li key={items.id}>
                      {" "}
                      <img className="" src={Tick} alt="Scholar" width="4%" />
                      {items.value}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="col-md-4 right-cards e-learning ">
                <h3>{businessEnterpriseData.heading1}</h3>
                <h1>{businessEnterpriseData.yearlyAmount}</h1>
                <Link to={"/login"}>
                  <button className="price-button">Get started</button>
                </Link>

                <ul className="list-unstyled">
                  {businessEnterpriseData.packages.map((items, index) => (
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
    </div>
  );
}

export default BusinessPackage;
