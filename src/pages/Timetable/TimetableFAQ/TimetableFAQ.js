import React, { useState } from "react";
import "./_time-faq.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const TimetableFAQ = () => {
  return (
    <div className="timetable-accordion-container ">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>What is business email?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Business email refers to an email service that is specifically
              designed for professional communication within an organization. It
              is a means of electronic communication that allows employees,
              departments, and teams to exchange messages, collaborate on
              projects, and share information related to their work.
            </p>
            {/* <button className="accord-get-started">Get started</button> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>How is business email different from personal email?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Personal email is used for one-to-one exchanges with friends and
              family, as well as personal services and social media. Business
              email is designed for managing professional communication, with
              features like group aliases, higher storage, and business-specific
              integrations. It ensures professionalism and efficient business
              correspondence.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>What is email hosting?</p>
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
        </Accordion.Item>

        <Accordion.Item eventKey="3">
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
            {/* <button className="accord-get-started">Get started</button> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default TimetableFAQ;
