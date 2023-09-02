import React, { useEffect, useState, useRef } from "react";
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
import {AxiosService} from "../../core/axios-service";
import {useNavigate} from "react-router";
function BusinessPackage(props) {
  const navigate = useNavigate();

  const [currencyList, setCurrencyList] = useState(props.currencyList);

  const [category, setCategory] = useState({});

  const [activeIndex2, setActiveIndex2] = useState(1);

  const handleClick = (index) => {
    setActiveIndex2(index);
    AxiosService.localStorageSet('billing_duration', index)
  };

  const checkActive = (index, className) => activeIndex2 === index ? className : "";
  const checkActive2 = (index, className) => activeIndex2 === index ? className : "";

  const [toCurrency, setToCurrency] = useState(props.currency?props.currency:'NGN');
  const [conversionRate, setConversionRate] = useState(1);

  const convertCurrency = () => {
    setConversionRate(toCurrency.rate);
  };

  const handelGetStarted = (packageData:any) =>{
    if (packageData){
      AxiosService.localStorageSet('package_id', packageData.id)
    }
    navigate('/sign-up');
  };

  function setThisCurrency(curr) {
    if (curr.code !== toCurrency.code) {
      setToCurrency(curr);
    }
    AxiosService.localStorageSet('billing_currency', curr.code)
  }

  useEffect(() => {
    convertCurrency();
  }, []);

  useEffect(() => {
    convertCurrency();
  }, [toCurrency]);

  const inputReference = useRef(null);

  useEffect(()=>{
    if (props.category){
      setCategory(props.category)
    }
  }, [props]);

  return (
    <div>

      <div className="business-pricing-tab ">
        <div className="tabs2 offset-md-1">
          <button className={`tab2 ${checkActive(1, "active3")}`}
                  onClick={() => handleClick(1)}>
            Monthly
          </button>
          <button className={`tab2 ${checkActive(2, "active3")}`}
                  onClick={() => handleClick(2)}>
            Yearly
          </button>
        </div>
        <div className="currency-buttons2 flexy flexym offset-md-9 offset-lg-10">
          {currencyList.length>0 && currencyList.map((currency:any) => (<button onClick={() => setThisCurrency(currency)}
            ref={inputReference} className={` ${toCurrency.code === currency.code ? "curr-active" : ""}`}>
            {currency.code}
          </button>))}
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="col-md-12 col-lg-8 flexy monthly-container2 offset-lg-2 ">
              {category?.web_packages?.length>0 &&category.web_packages.map((web_package:any, index:number) => (<div className={"col-md-4 "+(web_package.is_recommended?"standard":"")}>
                {web_package.is_recommended==1 && <div className="offset-lg-6 offset-md-5" style={{
                  top: '-25px',
                  position: 'absolute'
                }}>
                  {" "}
                  <button className="premium-button">Recommended</button>
                </div>}
                <div className={web_package.is_recommended==1?"":"col-md-12 e-learning right-cards2"}>
                  <h3>{web_package.name}</h3>

                  {web_package.category==1 && <div className="flexy flexyM">
                    <h1>
                      {" "}
                      <span dangerouslySetInnerHTML={{__html: toCurrency.html_entities,}}/>
                      {(web_package.rate_month * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per {category.rate_by} <br /> (Monthly)
                    </h6>
                  </div>}

                  {web_package.category==2 && <h1>Contact Us</h1>}

                  <button onClick={()=>handelGetStarted(web_package)} className="price-button">Get started</button>

                  <ul className="list-unstyled">
                    {web_package.features.map((items, index) => (
                      <li key={items.id}>
                        <img className="" src={Tick} alt="Scholar" width="4%" />
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>))}
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            <div className="col-md-12 col-lg-8 flexy monthly-container2 offset-lg-2 ">
              {category?.web_packages?.length>0 &&category.web_packages.map((web_package:any, index:number) => (<div className={"col-md-4 "+(web_package.is_recommended?"standard":"")} >
                {web_package.is_recommended==1 && <div className="offset-lg-6 offset-md-5" style={{
                  top: '-25px',
                  position: 'absolute'
                }}>
                  {" "}
                  <button className="premium-button">Recommended</button>
                </div>}
                <div className={web_package.is_recommended==1?"":"col-md-12 e-learning right-cards2"}>
                  <h3>{web_package.name}</h3>

                  {web_package.category==1 && <div className="flexy flexyM">
                    <h1>
                      {" "}
                      <span dangerouslySetInnerHTML={{__html: toCurrency.html_entities,}}/>
                      {(web_package.rate_year * conversionRate).toFixed(2)}
                    </h1>
                    <h6>
                      Per {category.rate_by} <br /> (Yearly)
                    </h6>
                  </div>}

                  {web_package.category==2 && <h1>Contact Us</h1>}

                  {/*<Link to={"/login"}>*/}
                    <button onClick={()=>handelGetStarted(web_package)} className="price-button">Get started</button>
                  {/*</Link>*/}

                  <ul className="list-unstyled">
                    {web_package.features.map((items, index) => (
                        <li key={items.id}>
                          <img className="" src={Tick} alt="Scholar" width="4%" />
                          {items}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>))}
            </div>
          </div>
        </div>
      </div>

      {category?.web_packages?.length>0 && <div className="col-md-12 more-details-container">
        <CompareFeatures title="Compare Features" webPackages={category.web_packages}/>
      </div>}

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
