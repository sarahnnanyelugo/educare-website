import React, { useState } from "react";
import "./_faq.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const MailboxFAQ = () => {
  return (
    <div className="faq-accordion-blue-container2">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>How do I send personalised bulk emails?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Personalization is key to making your recipients feel valued. With
              educare mailbox, Use merge tags or dynamic content features to
              insert personalized information such as the recipient's name,
              location, or recent interactions with your brand.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>How do I track mail delivery status?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Email delivery status is tracked automatically in educare. To see
              the status of a particular mail sent you can simply click on the
              "Sync" button beside the recipient mail and it shows the current
              status of the mail. or you can simply select all and "Sync all" to
              see the current status of all sent mail
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>How long does it take to onboard?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Email hosting refers to the service provided by a hosting provider
              or a dedicated email hosting provider that allows individuals,
              businesses, or organizations to have their own email accounts
              using their own domain name. Instead of relying on free email
              services like Gmail or Yahoo, email hosting enables users to have
              personalized email addresses that match their domain (e.g.,
              yourname@yourdomain.com).
            </p>
          </Accordion.Body>
        </Accordion.Item> */}

        {/* <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p>How can I migrate from my existing provider?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare Mailbox provides seamless migration tools and
              round-the-clock dedicated support to ensure a smooth transition
              from your current email provider. With educare Mailbox, you can
              effortlessly migrate your emails, calendars, contacts, and even
              PST files while minimizing any data loss. The intuitive migration
              tools and expert assistance make the transition process
              hassle-free and efficient.
            </p>
         
          </Accordion.Body>
        </Accordion.Item> */}
      </Accordion>
    </div>
  );
};
export default MailboxFAQ;
