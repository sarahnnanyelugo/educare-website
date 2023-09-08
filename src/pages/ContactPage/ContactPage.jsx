import React from "react";
import { Heading } from "../../components/Heading/Heading";
import "./contact-page.scss";
import LinkedIn from "../../assets/images/linkedin.svg";
import FB from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
import Form from "./Form/Form";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import MasterForm from "../../components/FormWizard/MasterForm";
function ContactPage() {
  return (
    <>
      <div className="col-md-12  flexy">
        <div className="col-md-6 address-div ">
          <div className="  offset-md-2">
            {" "}
            <Heading
              text="Contact Us"
              bg="#CEF0FF"
              color="#0098DA"
              boda="#CEF0FF"
            />
            <h1 className="col-md-6">Stay Connected and Reach Out!</h1> <br />
            <h5>
              We appreciate your visit! If you have any inquiries, comments, or
              simply want to reach out, feel free to contact us. We value our
              community and enjoy engaging with you.
            </h5>
            <br />
            <h5>
              Don’t hesitate to drop us a message or use the provided contact
              form below. We’re here to assist you, connect with you, and
              provide the support you need.
            </h5>{" "}
            <br /> <br />
            <h2>Call us</h2>
            <p>Our friendly team is here to help</p> <br />
            <h5>NIGERIA</h5>
            <a href="tel:+234 909 555 2183">+234 909 555 2183</a>
            <a href="tel:+234 904 303 8325">+234 904 303 8325</a>
            <h6> </h6>
            <br />
            <h5>UK:</h5>
            <a href="tel:+447932073610">+447932073610</a>
            <br /> <br />
            <h2>Email us:</h2>
            <a href="mailto:support@educare.ng">support@educare.ng</a>
            <br /> <br />
            <h4>Visit Us</h4>
            <p>Come say hello at our office</p> <br />
            <div className="col-md-10">
              {" "}
              <h6 className="address">
                UK: 20-23 Wenlock Road, London, England
                <br />
                <a href="tel:14455617">14455617.</a>
              </h6>{" "}
              <br />
              <h6 className="address">
                U.S.A: 651, North Broad Street, Middletown, DE 19709, United
                States.
              </h6>{" "}
              <br />
              <h6 className="address">
                {" "}
                NIGERIA: 16B, Alhaji Hussein Sunmonu Street, Lekki Phase 1,
                Lagos State, Nigeria.
              </h6>
            </div>
            <ul className="list-unstyled list-inline mobile-ul media-icons">
              <li className="list-inline-item">
                {" "}
                <img className="fb" src={FB} alt="Scholar" width="100%" />
              </li>
              <li className="list-inline-item">
                {" "}
                <img className="twi" src={Twitter} alt="Scholar" width="100%" />
              </li>
              <li className="list-inline-item">
                {" "}
                <img className="lI" src={LinkedIn} alt="Scholar" width="100%" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 offset-md-1 mtt">
          {/* <Form text="Submit" bg="#0098DA" /> */}
          <MasterForm />
        </div>
      </div>
      <Prefooter text="Provide a Finance experience that will scale your business upward." />
    </>
  );
}

export default ContactPage;
