import React from "react";
import { Heading } from "../../components/Heading/Heading";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import LandingImg from "../../assets/images/support-main.png";
import SupportImg from "../../assets/images/mic.png";

import "./support.scss";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Link } from "react-router-dom";
export default function Support() {
  return (
    <>
      <div className="support-div flexy">
        <div className="col-md-6 support-intro col-12">
          <Heading text="Support" bg="#CEF0FF" color="#0098DA" boda="#CEF0FF" />
          <h1>educare Support</h1>
          <p>
            Unlock your business potential with educare support, empowering you
            to thrive in any environment, be it the cloud or on-premises.
            Experience unparalleled support that enables effective planning,
            faster adoption, and seamless innovation. educare is your partner in
            success, providing the expertise and assistance you need to surpass
            your business goals and drive remarkable outcomes.
          </p>
        </div>
        <div className="col-md-8 support-img ">
          {" "}
          <img className="" src={LandingImg} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-12 support-need">
        <center>
          <h1>Support for all your needs</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy mt8">
          <div className="col-md-4">
            <div className="col-md-11">
              <h4>Technical Assistance</h4>
              <p>
                Our support team is equipped with deep product knowledge and
                expertise to assist you with troubleshooting, configuration, and
                customization queries. We work closely with you to quickly
                identify and resolve any technical challenges you may encounter.
                Count on us to provide step-by-step guidance and solutions to
                keep your software running smoothly.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11">
              <h4>Software Updates and Patches</h4>
              <p>
                Stay up to date with the latest enhancements and bug fixes
                through our regular software updates and patches. Our support
                team ensures that you have access to the most stable and secure
                versions of our software. We proactively notify you of available
                updates and assist with the installation and deployment process.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11">
              <h4>Community Forums</h4>
              <p>
                Engage with our vibrant user community on our forums, where you
                can exchange ideas, seek advice, and collaborate with fellow
                users. Our community is a valuable platform for knowledge
                sharing, troubleshooting discussions, and networking. Benefit
                from the collective wisdom and experiences of other users to
                enhance your software experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flexy col-md-10 mt6">
          <div className="col-md-4 offset-md-3">
            {" "}
            <div className="col-md-11">
              <h4>Knowledge Base and Documentation</h4>
              <p>
                Access our extensive knowledge base, documentation, and user
                guides to find answers to common questions, learn best
                practices, and explore advanced features. Our comprehensive
                resources are designed to empower you with in-depth product
                knowledge, enabling you to leverage the full capabilities of our
                software solutions. You can easily search for articles,
                tutorials, and FAQs to find the information you need.
              </p>
            </div>
          </div>{" "}
          <div className="col-md-4 ">
            <div className="col-md-11">
              <h4>Training and Education</h4>
              <p>
                Enhance your software proficiency with our training programs and
                educational resources. We offer a range of training options,
                including online courses, webinars, and workshops, to empower
                you and your team with in-depth product knowledge. Our training
                sessions cover various aspects of software usage,
                administration, and customization, ensuring you can make the
                most of our software’s capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy flexyM mic-cont">
        <div className="col-md-8">
          {" "}
          <img className="" src={SupportImg} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 blue-div-empy dn" />{" "}
      </div>
      <h1 className="offset-md-1 mt ">Our Support Plans:</h1>
      <div className="col-md-10 offset-md-1 flexy support-plans mt1">
        <div className="col-md-4 plans  plans1">
          <h4>Standard Support</h4>
          <p>
            Our entry-level support plan is designed to address general
            inquiries and basic technical assistance. With Standard Support, you
            gain access to our extensive knowledge base, self-help resources,
            and online community forums, where you can connect with other users.
            Additionally, you’ll receive limited email support during standard
            business hours.
          </p>
          <h6>Benefits of Standard Support include:</h6>
          <p>
            — Access to knowledge base, self-help resources, and community
            forums <br />— Limited email support during standard business hours
          </p>
        </div>
        <div className="col-md-4 plans plans1">
          <h4>Premium Support</h4>
          <p>
            For a more comprehensive support experience, our Premium Support
            plan offers faster response times and extended support hours. Enjoy
            the benefits of email and phone support from our expert team,
            ensuring that your critical issues receive prompt attention and
            resolution. You also gain access to software updates, patches, and
            service packs to keep your software up to date.
          </p>
          <h6>Benefits of Premium Support include:</h6>
          <p>
            — Email and phone support with faster response times <br /> —
            Extended support hours <br /> — Software updates, patches, and
            service packs
          </p>
        </div>
        <div className="col-md-4 plans">
          <h4>Enterprise Support</h4>
          <p>
            Our Enterprise Support plan is tailored for businesses with
            mission-critical software deployments. Experience the highest level
            of support with 24/7 access to our experienced support engineers.
            Benefit from faster response times, priority handling of your
            support cases, and personalized guidance to ensure uninterrupted
            operations. Additionally, you receive proactive monitoring and
            alerts for potential issues, along with regular software updates and
            upgrades.
          </p>
          <h6>Benefits of Enterprise Support include:</h6>
          <p>
            — 24/7 access to experienced support engineers
            <br /> — Faster response times and priority handling of support
            cases <br />— Personalized guidance and assistance
            <br /> — Proactive monitoring and alerts
            <br /> — Regular software updates and upgrades
          </p>
        </div>
      </div>
      <div className="col-md-12 flexy mt ready-support">
        <div className="col-md-5 offset-md-1">
          <h1>Ready to get started with one of our support plans?</h1>
          <p>
            To reach our support team, visit our dedicated support portal or
            contact our support hotline. Our experienced support professionals
            are ready to assist you with any questions, technical issues, or
            guidance you may need.
          </p>
        </div>
        <div className="col-md-3 offset-md-2">
          <center>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmsp"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <Link to={"/contact-us"}>
              {" "}
              <button className="demo">Request for demo</button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}
