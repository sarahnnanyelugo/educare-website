import React from "react";
import { Heading } from "../../components/Heading/Heading";
import "./all-products.scss";
import { Link } from "react-router-dom";
import ProductsTab from "./ProductsTab/ProductsTab";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import FAQ from "../Calendar/FAQ/FAQ";

function AllProducts() {
  return (
    <>
      <div className="all-products-container col-md-12">
        <center>
          <div className="col-md-5">
            <Heading
              text="All products"
              bg="#CEF0FF"
              color="#0098DA"
              boda="#CEF0FF"
            />
            <h1>All the software you need to run your business</h1>
          </div>
          <center>
            <Link to={"/login"}>
              <button className="sign-up">Sign Up and Deploy in Seconds</button>
            </Link>
            <Link to={"/contact-us"}>
              <button className="contact">Contact Us</button>
            </Link>
          </center>
        </center>
      </div>
      <div>
        <ProductsTab />
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-4 mt no-m">
          <h1>FAQs</h1>
        </div>
        <div className="col-md-8">
          {" "}
          <FAQAccordionBlue />
        </div>
      </div>
      <Prefooter texta="Get started now and experience ease in your workflow." />
    </>
  );
}

export default AllProducts;
