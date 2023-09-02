import React, { useEffect, useState } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-packages.scss";

import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { Partners } from "../../components/Partners/Partners";
import Axios from "axios";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import BusinessPackage from "./BusinessPackage";
import SchoolsPackages from "../EducareSchoolPackages/Schoolspackages";
import {getItems} from "../../core/QueryResponseProvider";
import {AxiosService} from "../../core/axios-service";

function EducarePackages(props) {
  const [categories, setCategories] = useState([]);
  const [currency_list, setCurrencyList] = useState([]);
  const [currency, setCurrency] = useState('NGN');
  const [billingDuration, setBillingDuration] = useState(1);
  const [activeCategory, setCategory] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState({});

  const getPackageCategories = () =>{
    getItems('auth/package-categories').then(function (request:any) {
      setCurrentCurrency(request.current_currency);
      setCurrency(request.current_currency);
      setCurrencyList(request.currency_list);
      setCategories(request.categories);
      setCategory(request.categories[0]);
    },function (request:any) {});
  };

  useEffect(()=>{
    const temp = AxiosService.localStorageGet('billing_currency');
    if (temp){
      setCurrency(temp);
    }else{
      AxiosService.localStorageSet('billing_currency', currency)
    }
    const temp2 = AxiosService.localStorageGet('billing_duration');
    if (temp2){
      setBillingDuration(temp2);
    }else{
      AxiosService.localStorageSet('billing_duration', billingDuration)
    }

    getPackageCategories();
  }, []);

  useEffect(()=>{
    if (activeCategory){
      AxiosService.localStorageSet('category_id', activeCategory.id)
    }
  }, [activeCategory]);

  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) => activeIndex === index ? className : "";
  const checkActive2 = (index, className) => activeIndex === index ? className : "";
  return (
    <>
      <div className="col-md-12 nav-two-business col-12 "> </div>
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
        <div className="tabs offset-md-5">
          {categories?.length>0 &&categories.map((category:any, index:number) => (<button key={'key_'+category.id}
            className={`tab ${activeCategory.id==category.id? "active2":''}`}
            onClick={()=>setCategory(category)} style={{ marginLeft: (index!=0?"20px":"") }}>
            {category.name}
          </button>
          ))}
        </div>
        <div className="panels">

          {categories?.length>0 &&categories.map((category:any, index:number) => (<div key={'key_'+category.id} className={`panel ${activeCategory.id==category.id? "active2":''}`}>
                <BusinessPackage category={category} currency={currency} billingDuration={billingDuration} currencyList={currency_list} />
              </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default EducarePackages;
