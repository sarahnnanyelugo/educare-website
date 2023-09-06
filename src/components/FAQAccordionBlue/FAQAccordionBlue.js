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
            <p>
              What is educare’s main purpose? ( What exactly does Educare do?)
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li>
                {" "}
                educare is designed to streamline school management, enhance
                learning experiences, and facilitate efficient information
                management for educational institutions.
              </li>
              <li>
                educare is a comprehensive educational management software that
                offers a range of features for schools and businesses. It
                includes modules for school management, learning management,
                financial management, HR, and more
              </li>
            </ul>
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
            <p>How can I request a demo of educare?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Answer: To request a demo of educare, simply visit our website and
              click on the "Request a Demo" button on the homepage. Fill in your
              details, and we'll get in touch with you shortly.
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
              No, we do not store your credit card information. Take a look at
              our <Link to={"/"}>Privacy Policy</Link> <br /> to learn more.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p>Are my transactions secure?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare secures your transactions through SSL encryption and
              two factor
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
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p>
              Can educare integrate with other educational tools we already use?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, educare offers seamless integration capabilities with various
              third-party educational tools, ensuring a smooth and efficient
              workflow.
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
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p>How does your educare enhance remote learning?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare offers features like virtual classrooms, content sharing,
              and assessment tools, making remote learning engaging and
              effective.
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
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <p>What security measures are in place to protect student data?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We employ industry-standard encryption protocols and strict data
              security measures to safeguard all student and school data.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <p>Do you offer support and training for users?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we provide comprehensive user training and ongoing support to
              ensure that your staff can make the most of educare.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <p>Is educare compliant with educational regulations?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is designed to comply with various educational regulations
              and standards, ensuring that your institution remains compliant.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <p>
              Can parents access their child's progress and reports using
              educare?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, parents can access their child's academic progress,
              attendance, and reports through our dedicated parent portal.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <p>How can we migrate our existing data to your software?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We offer data migration services to help you seamlessly transfer
              your existing data to our software. Our team will assist you
              throughout the process.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            <p>
              What devices and platforms are compatible with your software? -
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is compatible with Windows, macOS, Android, and iOS
              devices, ensuring accessibility for all users.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            <p>Is your software cloud-based or on-premises?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We offer a cloud-based solution that caters to the specific needs
              of your school.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="13">
          <Accordion.Header>
            <p>How can we customize educare to fit our unique requirements?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare is highly customizable, and our team will work closely
              with you to tailor it to your school's specific needs.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>
            <p>What reporting and analytics features does educare offer? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              educare includes robust reporting and analytics tools that help
              educators make data-driven decisions for improved learning
              outcomes.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
        <Accordion.Item eventKey="15">
          <Accordion.Header>
            <p>Can we scale our subscription as our school grows? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, our flexible subscription plans allow you to scale your usage
              as your school’s number grows, ensuring cost-effectiveness.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="16">
          <Accordion.Header>
            <p>What is the uptime guarantee for educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We provide a 99.9% uptime guarantee to ensure uninterrupted access
              to our software.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="17">
          <Accordion.Header>
            <p>How often do you release software updates? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              We release regular software updates to introduce new features,
              improvements, and security enhancements.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="18">
          <Accordion.Header>
            <p>Are there any hidden fees or additional charges? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Our pricing is transparent, and there are no hidden fees. You only
              pay for the total number of children you have.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header>
            <p>Can we track student and teacher attendance using educare? -</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, our software includes attendance tracking features for both
              students and teachers.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header>
            <p>Is there a mobile app available for educare? </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, we offer a school-customized mobile app for convenient access
              to our software on iOS and Android devices.
            </p>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>
    </div>
  );
};
export default FAQAccordionBlue;
