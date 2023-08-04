import React, { useState } from "react";
import "./_faq--accordion.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQAccordion = () => {
  return (
    <div className="faq-accordion-container">
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
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>Can One Account Manage Multi Schools ?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Getting your school enrolled is so easy. Click on signup to
              onboard your <br />
              school in seconds.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>How secure is my data ?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is GDPR COMPLIANT. From day one, we built educare to help
              you manage your school efficiently. We
              <br /> do not share/sell your data. The educare software is
              optimize with end-to-end encription to ensure maximum <br />
              data security.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p>Do you offer phone support?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, our customer support team are here 24/7 to assist you with a
              prompt <br />
              response. Give it a shot! Get help now.
            </p>
            <button className="accord-get-started">Get started</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default FAQAccordion;
