import { useEffect, useState } from "react";
import {
  standardData,
  rates,
  professionalData,
  businessEnterpriseData,
  currencyChar,
} from "../../TestData";
import Tick from "../../assets/images/tickk2.png";

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
    setConversionRate(rates[toCurrency]);
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
  return (
    <div>
      <div className="business-pricing-tab ">
        <center>
          {" "}
          <div className="tabs2">
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
        </center>
        <div className="currency-buttons flexy flexym offset-md-10">
          <button
            onClick={() => setThisCurrency("NGN")}
            className={` ${toCurrency === "NGN" ? "curr-active" : ""}`}
          >
            NGN
          </button>
          <button
            onClick={() => setThisCurrency("USD")}
            className={` ${toCurrency === "USD" ? "curr-active" : ""}`}
          >
            USD
          </button>{" "}
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
            <div className="offset-md-3">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-9 flexy monthly-container offset-md-1">
              <div className="col-md-4 ">
                <div className="col-md-12 standard">
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
                  <button className="price-button">Get started</button>
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
              <div className="col-md-4 right-cards2 e-learning ">
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
                <button className="price-button">Get started</button>
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
                <button className="price-button">Get started</button>
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
            <div className="offset-md-3">
              {" "}
              <button className="premium-button">Recommended</button>
            </div>
            <div className="col-md-9 flexy monthly-container offset-md-1">
              <div className="col-md-4 ">
                <div className="col-md-12 standard">
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
                  <button className="price-button">Get started</button>
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
              <div className="col-md-4 right-cards e-learning ">
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
                <button className="price-button">Get started</button>
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
                <button className="price-button">Get started</button>
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
    </div>
  );
}

export default BusinessPackage;
