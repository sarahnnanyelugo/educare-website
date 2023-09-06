import React, { useState } from "react";
import "./_faq--accordion-blue.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import GetStartedForm from "../GetStartedForm/GetStartedForm";

const FAQAccordionBlueTwo = () => {
  return (
    <div className="faq-accordion-blue-container">
      {" "}
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p>How do I access technical support in case of issues?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              You can access our technical support team 24/7 through our support
              platform or by contacting our dedicated support line.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p>
              What types of assessments and quizzes can be created with educare?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare allows you to create various types of assessments,
              including multiple-choice, essay, and interactive quizzes.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p>How does educare help improve teacher-student communication?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare includes communication tools like messaging and
              notifications to facilitate easy communication between teachers
              and students.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p>Can our school white-label your software with our branding? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer white-labelling options, allowing you to customize
              educare with your school's branding.
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
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p>CDoes educare support e-learning content creation?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare includes tools for e-learning content creation,
              making it easy for educators to develop engaging lessons.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p>How do I stay updated on new features and announcements? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Stay informed about new features and announcements by subscribing
              to our newsletter and following us on social media.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <p>Can we request custom features or modules for our school?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer custom development services to build specific
              features or modules based on your school's requirements.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <p> Is there a trial period available for educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>Answer: No, we do not offer a free trial period.</p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <p>What is educare best known for?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is best known for its all-in-one educational management
              solution, simplifying administrative tasks, improving learning
              experiences, and facilitating efficient information management.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <p>What are the requirements for schools to use educare?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Schools need a stable internet connection and compatible devices
              for accessing educare. Our team will provide guidance on system
              requirements during onboarding.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <p>What are the requirements for businesses to use educare?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Businesses require internet access and devices with a modern web
              browser to access educare. Our software is adaptable to various
              business needs.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <p>Can you use educare on any computer?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare is web-based, making it accessible on most modern
              computers with an internet connection.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            <p>Is educare an app?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is accessible through web browsers and is mobile-friendly
              for smart phone/tablet users, but we also offer a customized
              mobile app version for schools.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="13">
          <Accordion.Header>
            <p> Is educare a portal?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare provides a user-friendly portal for schools,
              businesses, and their stakeholders to access educational
              management tools and information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>
            <p>How secure is educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Educare prioritizes data security and complies with industry
              standards to protect student and institutional data. We employ
              encryption and regular security audits.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="15">
          <Accordion.Header>
            <p>Can we migrate our data from our former software to educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer data migration services to help you seamlessly
              transfer data from your previous software to educare during
              onboarding.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="16">
          <Accordion.Header>
            <p>How flexible is educare?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is highly flexible, allowing you to customize the modules
              and features the way that best suit your needs, ensuring a
              customized experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="17">
          <Accordion.Header>
            <p>Can we link other applications to educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare offers integration capabilities, allowing you to link
              other applications and tools to create a seamless educational
              ecosystem.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="18">
          <Accordion.Header>
            <p>Can we upload data in bulk on educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare provides tools to upload data in bulk, making it
              efficient to populate the system with necessary information.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header>
            <p>Is educare connected to my bank?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare can be integrated with various payment gateways and
              financial institutions to facilitate secure and convenient fee
              collection.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header>
            <p>Will educare build a mobile application for my school?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer mobile application development services to create a
              branded mobile app for your educational institution.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>
    </div>
  );
};
export default FAQAccordionBlueTwo;
