import React, { useState } from "react";
import "./_faq--accordion-blue.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import GetStartedForm from "../GetStartedForm/GetStartedForm";

const FAQAccordionBlue = () => {
  return (
    <div className="faq-accordion-blue-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>How can I sign up my business ?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Getting your school enrolled is so easy. Click on signup to
              onboard your <br />
              school in seconds.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>Can One Account Manage Multiple businesses ?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Getting your business enrolled is so easy. Click on signup to
              onboard your <br />
              school in seconds.
            </p>
            <GetStartedForm
              text=" Sign up"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>Do you store my credit card information?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              No, we don’t store your credit card information. Take a look at
              our Privacy Policy <br /> to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p>Are my transactions secure?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, Zoho Books secures your transactions through SSL encryption
              and two factor
              <br /> authentication method.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordionBlue;
